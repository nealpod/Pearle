import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/ui/landing/Hero";
// import { Features } from "@/components/ui/landing/Features";
// import { Stats } from "@/components/ui/landing/Stats";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-purple-100 selection:text-purple-900">
      <Header />
      <main className="flex-1">
        <Hero />
        {/* The previous sections will appear below the diagonal cut */}
        {/* <Features />
        <Stats /> */}
      </main>
    </div>
  );
}