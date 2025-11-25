export function TrustedBy() {
    return (
      <section className="bg-white relative z-20 -mt-16 pb-10 pt-12">
        <div className="container mx-auto px-4 text-center">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">Trusted by leading healthcare providers</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale">
               {[1,2,3,4,5].map((i) => (
                   <div key={i} className="h-28 w-48 bg-slate-300 rounded animate-pulse"></div>
               ))}
            </div>
        </div>
      </section>
    );
  }