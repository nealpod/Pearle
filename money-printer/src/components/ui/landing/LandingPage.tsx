import { Hero } from "@/components/ui/landing/Hero";
// import { TrustedBy } from "@/components/ui/landing/TrustedBy";
import { Platform } from "@/components/ui/landing/Platform";
// import { CallToAction } from "@/components/ui/landing/CallToAction";

export function LandingPage() {
  return (
    // UPDATED: Changed bg-white to bg-black
    <div className="bg-black w-full text-white">
      <Hero />
      {/* <TrustedBy /> */}
      <Platform />
      {/* <CallToAction /> */}
    </div>
  );
}