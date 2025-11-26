import Link from "next/link"; 
import { Button } from "@/components/ui/common/Button";

export function CommericalHeader() {
  return (
    <header className="z-50 w-full border-b border-white/10 bg-black">
      
      <div className="container mx-auto max-w-5xl px-6 md:px-12 h-16 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-bold tracking-tight text-white">
            Money Printer
          </span>
        </div>

        {/* Center: Navigation */}
        {/* UPDATED: Changed text-slate-300 to text-[#8a8f98] */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8a8f98]">
          {['Home', 'Browse Products','Customer Reviews', 'Pricing'].map((item) => (
              <a
              key={item}
              href="#"
              className="hover:text-white transition-colors duration-200"
              >
              {item}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
            {/* UPDATED: Changed text-slate-300 to text-[#8a8f98] */}
            <Link href="/login" className="text-sm font-medium text-[#8a8f98] hover:text-white transition-colors">
                Log in
            </Link>

            <Link href="/signup">
                <Button variant="outline" size="sm" className="px-5 border-white/20 text-white hover:bg-white/10 hover:border-white transition-all"> 
                    Sign up
                </Button>
            </Link>
        </div>
      </div>
    </header>
  );
}