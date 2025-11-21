import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="absolute top-0 z-50 w-full pt-6 px-4 md:px-6">
      {/* Floating Pill Container with Animated Gradient & OBVIOUS SHADOW */}
      <div 
        className="container mx-auto rounded-full border-[3px] border-white/90 backdrop-blur-md overflow-hidden"
        style={{
          // 2. Large diffuse shadow for high lift
          boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.2)"
        }}
      >
        <div className="flex h-20 items-center justify-between px-6 md:px-8">
          
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <span className="text-3xl md:text-4xl font-black tracking-tighter text-white drop-shadow-md">
              Money Printer
            </span>
          </div>

          {/* Center: Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-lg font-semibold text-white/95">
            {['Products', 'Solutions', 'Developers', 'Resources', 'Pricing'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="opacity-90 hover:opacity-100 hover:text-white transition-all duration-300 hover:scale-110 drop-shadow-sm"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-lg font-semibold text-white hover:opacity-100 hover:scale-105 transition-all hidden sm:block opacity-90">
              Sign in
            </a>
            <button className="rounded-full bg-white text-slate-900 px-6 py-2.5 text-base font-bold transition hover:bg-blue-50 hover:scale-105 active:scale-95 shadow-lg">
              Contact sales &rarr;
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}