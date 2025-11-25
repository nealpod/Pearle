import { CommericalHeader } from "@/components/ui/common/CommercialHeader";
import { LandingPage } from "@/components/ui/landing/LandingPage";
import { Footer } from "@/components/ui/common/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-purple-100 selection:text-purple-900">
      <CommericalHeader />
      <main className="flex-1">
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}