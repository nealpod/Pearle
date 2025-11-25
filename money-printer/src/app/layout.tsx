import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Import Montserrat
import "./globals.css";

// Configure Montserrat (Proxima Nova alternative)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // Load multiple weights for headings/body
  variable: "--font-sans", // Bind to the standard sans variable
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
        // Apply the font variable to the body
        className={`${montserrat.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}