// src/components/ui/landing/TrustedBy.tsx
"use client"

export function TrustedBy() {
  const brands = [1, 2, 3, 4, 5, 6]; 

  return (
    <section className="bg-black py-20 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a8f98]">
          Trusted by leading healthcare providers
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
          {brands.map((i) => (
            <div key={`brand-1-${i}`} className="h-12 w-40 bg-white/10 rounded-lg flex-shrink-0 flex items-center justify-center border border-white/5 hover:bg-white/15 transition-colors">
               <span className="text-white/20 font-bold">BRAND {i}</span>
            </div>
          ))}
          {brands.map((i) => (
            <div key={`brand-2-${i}`} className="h-12 w-40 bg-white/10 rounded-lg flex-shrink-0 flex items-center justify-center border border-white/5 hover:bg-white/15 transition-colors">
               <span className="text-white/20 font-bold">BRAND {i}</span>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
      </div>
    </section>
  );
}

export function InsuranceAPIs() {
  // UPDATED: Array now includes name and logo path for major pVerify-supported payers
  const apis = [
    { name: "VSP Vision", logo: "/logos/vsp.svg" },
    { name: "EyeMed", logo: "/logos/eyemed.svg" },
    { name: "BCBS", logo: "/logos/bcbs.svg" },
    { name: "UnitedHealthcare", logo: "/logos/uhc.svg" },
    { name: "Aetna", logo: "/logos/aetna.svg" },
    { name: "Cigna", logo: "/logos/cigna.svg" },
    { name: "Humana", logo: "/logos/humana.svg" },
    { name: "Medicare", logo: "/logos/medicare.svg" },
    { name: "Medicaid", logo: "/logos/medicaid.svg" },
  ];

  return (
    <section className="bg-black relative z-20 mt-4 mb-2 pb-20 pt-12 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-10">
        <p className="text-xs font-bold text-slate-300 uppercase tracking-[0.2em]">
          Real-time integration with 1,000+ payers via pVerify
        </p>
      </div>

      <div className="relative flex overflow-hidden max-w-6xl mx-auto">
        <div className="flex animate-marquee whitespace-nowrap gap-10 items-center">
          {[...apis, ...apis].map((api, index) => (
            <div 
              key={`${api.name}-${index}`} 
              className="h-20 w-48 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center justify-center p-4 flex-shrink-0 group hover:bg-white/10 transition-colors"
            >
              {/* Logo container: Set to grayscale/opacity by default to match the dark theme */}
              <div className="h-8 w-full relative flex items-center justify-center">
                {/* Note: Ensure your SVG/PNG files exist in the public/logos/ folder.
                  The 'grayscale invert' filter works well for making colored logos look white.
                */}
                <img 
                  src={api.logo} 
                  alt={`${api.name} logo`}
                  className="max-h-full max-w-full object-contain opacity-40 grayscale invert transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:invert-0"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden text-[#8a8f98] font-semibold text-sm group-hover:text-white transition-colors">
                  {api.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
      </div>
    </section>
  );
}