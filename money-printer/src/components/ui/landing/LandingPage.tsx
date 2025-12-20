// src/components/ui/landing/LandingPage.tsx
import { Hero } from "@/components/ui/landing/Hero";
import { InsuranceAPIs } from "@/components/ui/landing/TrustedBy"; // Updated import
import { Platform } from "@/components/ui/landing/Platform";

export function LandingPage() {
  return (
    <div className="bg-black w-full text-white">
      <Hero />
      <InsuranceAPIs />
      <Platform />
    </div>
  );
}