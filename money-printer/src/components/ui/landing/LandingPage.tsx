import { Hero } from "@/components/ui/landing/Hero";
import { TrustedBy } from "@/components/ui/landing/TrustedBy";
import { Platform } from "@/components/ui/landing/Platform";
import { CallToAction } from "@/components/ui/landing/CallToAction";

export function LandingPage() {
  return (
    <div className="bg-white w-full">
      <Hero />
      {/* <TrustedBy /> */}
      <Platform />
      {/* <CallToAction /> */}
    </div>
  );
}