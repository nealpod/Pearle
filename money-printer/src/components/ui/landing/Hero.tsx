import Link from "next/link"; 
import { Button } from "@/components/ui/common/Button";

export function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-black pt-20 pb-40 lg:pt-32 lg:pb-64">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl flex flex-col items-center">
        
        <div className="w-full max-w-4xl text-left"> 
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white mb-8 leading-[0.95]">
            Money Printer is the new standard for running practices
            </h1>

            <p className="mb-10 max-w-lg text-lg text-[#8a8f98] leading-relaxed font-medium">
                Meet the system for modern eye care management.<br className="hidden md:block" /> 
                Streamline patient intake, smart quoting, and revenue tracking.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 max-w-lg">
                
                <Link href="/signup">
                  {/* FIX: Used variant="secondary" to ensure black text on white background. 
                      Added 'text-black' explicitly to override any defaults. */}
                  <Button variant="secondary" className="border-0 h-12 px-8 text-base font-semibold text-black transition-all hover:bg-slate-200 hover:shadow-lg hover:shadow-white/10">
                    Start building
                  </Button>
                </Link>
                
                <Link href="#product-suite" className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                   {/* Gradient Text for the 'New' badge */}
                   <span className="text-base font-medium bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
                     New: Revenue agent for Slack
                   </span>
                   <svg 
                     className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors group-hover:translate-x-0.5" 
                     fill="none" 
                     stroke="currentColor" 
                     viewBox="0 0 24 24"
                   >
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                   </svg>
                </Link>

            </div>
        </div>

      </div>
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/20 via-black to-black opacity-40"></div>
    </div>
  );
}