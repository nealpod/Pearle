import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <div className="relative bg-white w-full overflow-x-hidden">
      
      {/* ==============================================
          THE DIAGONAL GRADIENT BACKGROUND 
          ============================================== */}
      <div className="absolute top-0 left-0 w-full h-[600px] lg:h-[800px] z-0 pointer-events-none">
        {/* Diagonal shadow maintained */}
        <div className="absolute inset-0 bg-slate-900 origin-top-left -skew-y-6 transform scale-110 -translate-y-24 sm:-translate-y-32 shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)]">
           
           <div className="animate-gradient-bg absolute inset-0 w-full h-full opacity-90" />
           <div className="animate-gradient-bg absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-purple-500 blur-[800px] opacity-80 mix-blend-overlay" />
           <div className="animate-gradient-bg absolute bottom-0 left-0 w-[1000px] h-[1000px] rounded-full bg-purple-500 blur-[600px] opacity-40 mix-blend-overlay" />
        </div>
      </div>


      {/* ==============================================
          HERO CONTENT
          ============================================== */}
      <section className="relative z-10 pt-40 pb-12 lg:pt-52 lg:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: Typography in a BOX with SHADOW */}
            <div className="max-w-2xl relative z-20"> 
              
              {/* --- NEW: Box Container for Text --- */}
              <div className="rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <h1 className="text-6xl font-extrabold tracking-tight text-white mb-8 leading-[1.1] drop-shadow-sm">
                  Premium <br />
                  eyewear <br />
                  to sharpen your <br />
                  focus
                </h1>

                <p className="mb-10 max-w-lg text-lg text-blue-50/90 leading-relaxed font-medium drop-shadow-sm">
                  Join the millions of patients who trust us to protect their vision. From comprehensive eye exams to designer frames, we help you see the world with perfect clarity.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="h-12 rounded-full bg-slate-900 px-8 text-sm font-bold text-white transition hover:bg-slate-800 hover:scale-105 active:scale-95 shadow-xl border border-slate-800">
                    Shop frames &rarr;
                  </button>
                  <button className="h-12 rounded-full bg-transparent px-8 text-sm font-bold text-white transition hover:bg-white/10 border border-white/30">
                    Book exam
                  </button>
                </div>
              </div>
              {/* ----------------------------------- */}

            </div>

            {/* RIGHT COLUMN: Visual Composition */}
            <div className="relative hidden lg:block perspective-1000 z-10">
              
              {/* Card Container - INCREASED SHADOW HERE */}
              <div className="absolute right-0 top-12 h-[500px] w-[600px] rotate-y-12 rotate-z-6 rounded-xl bg-white/90 backdrop-blur-sm border border-white/50 p-8 translate-x-20 relative group shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]">
                 
                 {/* GIANT FLOATING GLASSES */}
                 <div className="absolute top-[15%] -right-[15%] z-50 w-[500px] text-slate-800 drop-shadow-2xl transform -rotate-12 transition-all duration-700 group-hover:scale-105 group-hover:-rotate-6 group-hover:-translate-y-4 pointer-events-none">
                    <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="10" y="20" width="70" height="50" rx="20" stroke="currentColor" strokeWidth="10" />
                      <rect x="120" y="20" width="70" height="50" rx="20" stroke="currentColor" strokeWidth="10" />
                      <path d="M80 45 Q100 25 120 45" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                      <path d="M10 45 L0 40" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                      <path d="M190 45 L200 40" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                      <path d="M25 35 L65 55" stroke="currentColor" strokeWidth="4" strokeOpacity="0.2" strokeLinecap="round" />
                      <path d="M135 35 L175 55" stroke="currentColor" strokeWidth="4" strokeOpacity="0.2" strokeLinecap="round" />
                    </svg>
                 </div>

                 {/* SQUIGGLY DASHBOARD CONTENT */}
                 <div className="mb-8 flex gap-4 items-center opacity-60">
                    <div className="h-10 w-48 border-2 border-slate-100 rounded-lg p-2 flex items-center">
                      <svg width="100%" height="100%" viewBox="0 0 160 20" fill="none" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round">
                          <path d="M2 10 C5 5 15 15 20 10 S35 5 40 10 S55 5 60 10 S75 5 80 10 S95 5 100 10 S115 5 120 10 H140" />
                      </svg>
                    </div>
                    <div className="ml-auto h-10 w-10 border-2 border-slate-100 rounded-full flex items-center justify-center">
                       <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round">
                          <path d="M5 10 Q10 5 15 10" />
                       </svg>
                    </div>
                 </div>
                 
                 <div className="flex gap-6 h-72 opacity-60">
                   <div className="flex-1 space-y-4 flex flex-col">
                      <div className="h-24 w-full border-2 border-slate-100 rounded-lg p-3 flex flex-col justify-center gap-2">
                           <svg width="100%" height="40" viewBox="0 0 100 40" fill="none" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round">
                              <path d="M5 10 C10 5 20 15 25 10 S40 5 45 10 H80" />
                              <path d="M5 25 C10 20 20 30 25 25 S40 20 45 25 H60" />
                           </svg>
                      </div>
                      <div className="flex-1 w-full border-2 border-slate-100 rounded-lg p-3">
                           <svg width="100%" height="100%" viewBox="0 0 100 120" fill="none" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" className="overflow-visible">
                              <path d="M5 10 H30 M5 30 H50 M5 50 H40 M5 70 H60 M5 90 H35" />
                           </svg>
                      </div>
                   </div>
                   <div className="flex-[2] border-2 border-slate-100 rounded-xl p-6 relative overflow-hidden">
                      <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" preserveAspectRatio="none">
                          <path d="M10 20 C20 15 30 25 40 20 S60 15 70 20 S90 15 100 20 S120 15 130 20 S150 15 160 20 S180 15 190 20 H250" />
                          <path d="M10 40 C20 35 30 45 40 40 S60 35 70 40 S90 35 100 40 S120 35 130 40 S150 35 160 40 H220" />
                          <path d="M10 60 C20 55 30 65 40 60 S60 55 70 60 S90 55 100 60 H180" />
                          <path d="M10 100 C20 95 30 105 40 100 S60 95 70 100 S90 95 100 100 S120 95 130 100 S150 95 160 100 H240" />
                          <path d="M10 120 C20 115 30 125 40 120 S60 115 70 120 S90 115 100 120 H200" />
                          <rect x="10" y="150" width="80" height="30" rx="15" stroke="#94A3B8" strokeWidth="2" />
                          <path d="M30 165 H60" strokeWidth="2" />
                      </svg>
                   </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ... Rest of the sections (Trusted By, Features, CTA) unchanged ... */}
      <section className="py-12 border-b border-slate-100">
        <div className="container mx-auto px-4 text-center">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">Trusted by leading healthcare providers</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale">
               {[1,2,3,4,5].map((i) => (
                   <div key={i} className="h-8 w-32 bg-slate-300 rounded animate-pulse"></div>
               ))}
            </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">A complete platform for your eyes</h2>
            <p className="text-xl text-slate-600">We bring together everything required to manage your vision health, from booking appointments to tracking prescriptions.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             {[1, 2, 3].map((i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                   <div className="h-12 w-12 bg-blue-100 rounded-lg mb-6 flex items-center justify-center text-blue-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                   </div>
                   <div className="h-6 w-2/3 bg-slate-200 rounded mb-3"></div>
                   <div className="space-y-2">
                      <div className="h-4 w-full bg-slate-100 rounded"></div>
                      <div className="h-4 w-full bg-slate-100 rounded"></div>
                      <div className="h-4 w-3/4 bg-slate-100 rounded"></div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      <section className="py-24">
         <div className="container mx-auto px-4">
             <div className="relative rounded-3xl bg-slate-900 overflow-hidden px-8 py-24 text-center">
                 <div className="relative z-10">
                     <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to see clearly?</h2>
                     <button className="h-12 rounded-full bg-white px-8 text-sm font-bold text-slate-900 transition hover:bg-blue-50">
                        Start your trial
                     </button>
                 </div>
                 <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                 <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
             </div>
         </div>
      </section>

    </div>
  );
}