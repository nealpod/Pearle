import Link from "next/link"; // Import Link
import { Button } from "@/components/ui/common/Button";

export function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32">
      
      {/* ... (Backgrounds remain same) ... */}
      {/* Top Left Bloom - Blue */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-[800px] h-[800px] bg-blue-600/40 rounded-full blur-[120px] pointer-events-none opacity-80"></div>
      {/* Bottom Right Bloom - Purple */}
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[800px] h-[800px] bg-purple-600/40 rounded-full blur-[120px] pointer-events-none opacity-80"></div>
      {/* General Atmosphere */}
      <div className="absolute inset-0 bg-indigo-500/5 blur-3xl pointer-events-none"></div>

      {/* ==============================================
          HERO CONTENT
          ============================================== */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Minimalist Text */}
          <div className="max-w-xl"> 
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-8 leading-[1.1] drop-shadow-sm">
                Vision <br />
                Insurance <br />
                Made <br />
                Effortless
              </h1>

              <p className="mb-10 max-w-lg text-med text-slate-300 leading-relaxed font-medium">
              Empower your staff to submit claims in seconds. <br/>
              We automate the complex insurance interactions <br/>
              so you can spend more time treating patients.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
              
              </div>
          </div>

          {/* ... (Right Column / Image remains exactly the same) ... */}
          <div className="relative hidden lg:block perspective-1000 z-10">
            <div className="right-0 top-6 h-[380px] w-[450px] rotate-y-12 rotate-z-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 translate-x-12 relative group shadow-2xl shadow-black/50">
               
               <div className="absolute top-[15%] -right-[15%] z-50 w-[360px] text-white drop-shadow-2xl transform -rotate-12 transition-all duration-700 group-hover:scale-105 group-hover:-rotate-6 group-hover:-translate-y-4 pointer-events-none">
                  <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="20" width="70" height="50" rx="20" stroke="currentColor" strokeWidth="10" className="text-slate-200" />
                    <rect x="120" y="20" width="70" height="50" rx="20" stroke="currentColor" strokeWidth="10" className="text-slate-200" />
                    <path d="M80 45 Q100 25 120 45" stroke="currentColor" strokeWidth="10" strokeLinecap="round" className="text-slate-200" />
                    <path d="M10 45 L0 40" stroke="currentColor" strokeWidth="10" strokeLinecap="round" className="text-slate-200" />
                    <path d="M190 45 L200 40" stroke="currentColor" strokeWidth="10" strokeLinecap="round" className="text-slate-200" />
                    <path d="M25 35 L65 55" stroke="white" strokeWidth="4" strokeOpacity="0.4" strokeLinecap="round" />
                    <path d="M135 35 L175 55" stroke="white" strokeWidth="4" strokeOpacity="0.4" strokeLinecap="round" />
                  </svg>
               </div>

               <div className="mb-6 flex gap-4 items-center opacity-50">
                  <div className="h-8 w-40 border-2 border-white/20 rounded-lg p-2 flex items-center">
                    <svg width="100%" height="100%" viewBox="0 0 160 20" fill="none" stroke="currentColor" className="text-slate-400" strokeWidth="3" strokeLinecap="round">
                        <path d="M2 10 C5 5 15 15 20 10 S35 5 40 10 S55 5 60 10 S75 5 80 10 S95 5 100 10 S115 5 120 10 H140" />
                    </svg>
                  </div>
                  <div className="ml-auto h-8 w-8 border-2 border-white/20 rounded-full flex items-center justify-center">
                     <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" className="text-slate-400" strokeWidth="3" strokeLinecap="round">
                        <path d="M5 10 Q10 5 15 10" />
                     </svg>
                  </div>
               </div>
               
               <div className="flex gap-4 h-64 opacity-50">
                 <div className="flex-1 space-y-4 flex flex-col">
                    <div className="h-20 w-full border-2 border-white/20 rounded-lg p-3 flex flex-col justify-center gap-2">
                         <svg width="100%" height="30" viewBox="0 0 100 40" fill="none" stroke="currentColor" className="text-slate-400" strokeWidth="3" strokeLinecap="round">
                            <path d="M5 10 C10 5 20 15 25 10 S40 5 45 10 H80" />
                            <path d="M5 25 C10 20 20 30 25 25 S40 20 45 25 H60" />
                         </svg>
                    </div>
                    <div className="flex-1 w-full border-2 border-white/20 rounded-lg p-3">
                         <svg width="100%" height="100%" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-slate-400 overflow-visible">
                            <path d="M5 10 H30 M5 30 H50 M5 50 H40 M5 70 H60 M5 90 H35" />
                         </svg>
                    </div>
                 </div>
                 <div className="flex-2 border-2 border-white/20 rounded-xl p-4 relative overflow-hidden">
                    <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" stroke="currentColor" className="text-slate-400" strokeWidth="2" strokeLinecap="round" preserveAspectRatio="none">
                        <path d="M10 20 C20 15 30 25 40 20 S60 15 70 20 S90 15 100 20 S120 15 130 20 S150 15 160 20 S180 15 190 20 H250" />
                        <path d="M10 40 C20 35 30 45 40 40 S60 35 70 40 S90 35 100 40 S120 35 130 40 S150 35 160 40 H220" />
                        <rect x="10" y="150" width="80" height="30" rx="15" stroke="currentColor" className="text-slate-400" strokeWidth="2" />
                    </svg>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}