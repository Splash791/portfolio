"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import dynamic from "next/dynamic";

// Dynamically import react-globe.gl to avoid SSR issues since it requires the window object
const GlobeComponent = dynamic(() => import("react-globe.gl"), { ssr: false });

// Some major hub coordinates [lat, lng]
const hubs = [
  [37.7749, -122.4194], // SF
  [40.7128, -74.0060],  // NY
  [51.5074, -0.1278],   // London
  [35.6762, 139.6503],  // Tokyo
  [-33.8688, 151.2093], // Sydney
  [22.3193, 114.1694],  // Hong Kong
  [1.3521, 103.8198],   // Singapore
  [48.8566, 2.3522],    // Paris
  [-23.5505, -46.6333], // Sao Paulo
];

export function Globe() {
  const globeRef = useRef<any>(null);
  const [countries, setCountries] = useState({ features: [] });

  // Generate random flight arcs between hubs
  const arcsData = useMemo(() => {
    const arcs = [];
    for (let i = 0; i < hubs.length; i++) {
      for (let j = i + 1; j < hubs.length; j++) {
        // Only connect some of them to avoid clutter
        if (Math.random() > 0.5) {
          arcs.push({
            startLat: hubs[i][0],
            startLng: hubs[i][1],
            endLat: hubs[j][0],
            endLng: hubs[j][1],
            color: ['rgba(245, 245, 240, 0)', 'rgba(245, 245, 240, 1)'], // Fade in sand color
          });
        }
      }
    }
    return arcs;
  }, []);

  useEffect(() => {
    // Fetch a lightweight GeoJSON of world countries
    fetch("https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  useEffect(() => {
    // Auto-rotate the globe slowly
    const initControls = () => {
      if (globeRef.current && globeRef.current.controls && globeRef.current.controls()) {
        globeRef.current.controls().autoRotate = true;
        globeRef.current.controls().autoRotateSpeed = 0.5;
        globeRef.current.controls().enableZoom = false; // Disable zoom to keep it as a background element
      } else {
        setTimeout(initControls, 100);
      }
    };
    initControls();
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-90">
      <div className="w-full h-full flex items-center justify-center translate-x-[20%] translate-y-[10%] opacity-60">
        <GlobeComponent
          ref={globeRef}
          backgroundColor="rgba(0,0,0,0)"
          width={1000}
          height={1000}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-water.png"
          polygonsData={countries.features}
          polygonAltitude={0.01}
          polygonCapColor={() => "rgba(30, 41, 59, 1)"} // slate-800
          polygonSideColor={() => "rgba(0,0,0,0)"}
          polygonStrokeColor={() => "#F5F5F0"} // sand (country outlines)
          polygonsTransitionDuration={300}
          atmosphereColor="#94a3b8" // slate-400
          atmosphereAltitude={0.25}
          arcsData={arcsData}
          arcColor="color"
          arcDashLength={0.4}
          arcDashGap={4}
          arcDashInitialGap={() => Math.random() * 5}
          arcDashAnimateTime={2000}
          arcStroke={1}
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,var(--color-navy)_80%)]" />
    </div>
  );
}
