import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Changed from Montserrat to Inter
import "./globals.css";

// Configure Inter (The standard "Linear" look)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Money Printer",
  description: "Premium eyewear platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-sans bg-black`}
      >
        {children}
      </body>
    </html>
  );
}