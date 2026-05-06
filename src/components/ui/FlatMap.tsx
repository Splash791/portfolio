"use client";

import React, { useEffect, useState, useMemo } from "react";
import { geoEquirectangular, geoPath } from "d3-geo";
import { motion } from "framer-motion";

const hubs = [
  { name: "Seattle", coordinates: [-122.3321, 47.6062] as [number, number] },
  { name: "Vancouver BC", coordinates: [-123.1207, 49.2827] as [number, number] },
  { name: "Victoria BC", coordinates: [-123.3656, 48.4284] as [number, number] },
  { name: "Portland", coordinates: [-122.6765, 45.5231] as [number, number] },
  { name: "Corvallis", coordinates: [-123.2620, 44.5646] as [number, number] },
  { name: "Los Angeles", coordinates: [-118.2437, 34.0522] as [number, number] },
  { name: "San Fransisco", coordinates: [-122.4194, 37.7749] as [number, number] },
  { name: "San Jose", coordinates: [-121.8863, 37.3382] as [number, number] },
  { name: "Las Vegas", coordinates: [-115.1398, 36.1699] as [number, number] },
  { name: "Missoula", coordinates: [-113.9966, 46.8721] as [number, number] },
  { name: "New York City", coordinates: [-74.0060, 40.7128] as [number, number] },
  { name: "Philadelphia", coordinates: [-75.1652, 39.9526] as [number, number] },
  { name: "Miami", coordinates: [-80.1918, 25.7617] as [number, number] },
  { name: "Orlando", coordinates: [-81.3792, 28.5383] as [number, number] },
  { name: "Dallas", coordinates: [-96.7970, 32.7767] as [number, number] },
  { name: "Austin", coordinates: [-97.7431, 30.2672] as [number, number] },
  { name: "Houston", coordinates: [-95.3698, 29.7604] as [number, number] },
  { name: "Washington D.C.", coordinates: [-77.1043, 38.8816] as [number, number] },
  { name: "St Louis", coordinates: [-90.1994, 38.6270] as [number, number] },
  { name: "Baltimore", coordinates: [-76.6122, 39.2904] as [number, number] },
  { name: "Paris", coordinates: [2.3522, 48.8566] as [number, number] },
  { name: "Rome", coordinates: [12.4964, 41.9028] as [number, number] },
  { name: "Venice", coordinates: [12.3155, 45.4408] as [number, number] },
  { name: "Pisa", coordinates: [10.4017, 43.7228] as [number, number] },
  { name: "Dominican Republic", coordinates: [-70.1627, 18.7357] as [number, number] },
  { name: "Turks and Caicos", coordinates: [-71.7979, 21.6940] as [number, number] },
  { name: "Taiwan", coordinates: [120.9605, 23.6978] as [number, number] },
  { name: "Curacao", coordinates: [-68.9333, 12.1696] as [number, number] },
  { name: "Aruba", coordinates: [-69.9683, 12.5211] as [number, number] },
  { name: "Hong Kong", coordinates: [114.1694, 22.3193] as [number, number] },
  { name: "Singapore", coordinates: [103.8198, 1.3521] as [number, number] },
  { name: "Hanoi", coordinates: [105.8342, 21.0278] as [number, number] },
  { name: "Ha Giang", coordinates: [104.9774, 22.8233] as [number, number] },
  { name: "Ho Chi Minh City", coordinates: [106.6297, 10.8231] as [number, number] },
  { name: "Da Nang", coordinates: [108.2022, 16.0544] as [number, number] },
  { name: "Nha Trang", coordinates: [109.1967, 12.2388] as [number, number] },
  { name: "Hoi An", coordinates: [108.3288, 15.8801] as [number, number] },
  { name: "Phu Quoc", coordinates: [103.9634, 10.2289] as [number, number] },
  { name: "Ninh Binh", coordinates: [105.9745, 20.2539] as [number, number] },
  { name: "Auckland", coordinates: [174.7633, -36.8485] as [number, number] },
  { name: "Taupo", coordinates: [176.0827, -38.6857] as [number, number] },
  { name: "Paihia", coordinates: [174.0894, -35.2811] as [number, number] }
];

export function FlatMap() {
  const [geographies, setGeographies] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson")
      .then((res) => res.json())
      .then((data) => {
        setGeographies(data.features);
      });
  }, []);

  // Map dimensions
  const width = 2400;
  const height = 1200;

  // Projection
  const projection = useMemo(() => {
    return geoEquirectangular()
      .scale(width / (2 * Math.PI))
      .translate([width / 2, height / 2]);
  }, [width, height]);

  // Path generator
  const pathGenerator = useMemo(() => geoPath().projection(projection), [projection]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-60 flex items-center justify-center pointer-events-none">
      <div className="relative w-full h-full min-h-[800px] flex items-center justify-center">
        <motion.div
          animate={{ x: [0, -width] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="flex absolute left-1/2 -translate-x-1/2"
          style={{ width: width * 2 }}
        >
          {[0, 1].map((mapIndex) => (
            <svg
              key={mapIndex}
              width={width}
              height={height}
              viewBox={`0 0 ${width} ${height}`}
              className="shrink-0"
              style={{ display: "block" }}
            >
              <g>
                {geographies.map((d, i) => (
                  <path
                    key={`path-${i}`}
                    d={pathGenerator(d) || ""}
                    fill="rgba(30, 41, 59, 0.4)" // slate-800
                    stroke="#475569" // slate-600
                    strokeWidth={0.5}
                  />
                ))}
              </g>
              <g>
                {hubs.map((hub, i) => {
                  const [x, y] = projection(hub.coordinates) || [0, 0];
                  if (!x && !y) return null;
                  return (
                    <g key={`pin-${i}`} transform={`translate(${x}, ${y})`}>
                      <circle r={3} fill="#F5F5F0" />
                      <circle r={12} fill="#F5F5F0" opacity={0.3} className="animate-pulse" />
                    </g>
                  );
                })}
              </g>
            </svg>
          ))}
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-navy)_70%)] pointer-events-none" />
    </div>
  );
}
