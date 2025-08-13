import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster'; // we'll add this later or remove for now

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tyler Quach\'s Portfolio',
  description: 'Welcome to my professional portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
        {/* <Toaster /> Uncomment when Toaster component is added */}
      </body>
    </html>
  );
}
