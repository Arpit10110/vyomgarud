import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "VyomGarud - Military Grade UAVs",
  description: "Reliable, long-range drones engineered for precision and security. Built for defense, surveillance, and critical mission environments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body      >
        {children}
      </body>
    </html>
  );
}
