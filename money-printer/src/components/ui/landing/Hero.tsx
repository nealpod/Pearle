"use client";

import { useEffect, useRef } from "react";
import Link from "next/link"; 
import { Button } from "@/components/ui/common/Button";
// Ensure this import matches your standardized filename (e.g., Gradient.d.ts)
import { Gradient } from "@/lib/gradient";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Initialize the mesh gradient on the canvas
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black min-h-[90vh] flex items-center pt-20 pb-32 lg:pt-32 lg:pb-64">
      
      {/* 1. THE MESH GRADIENT CANVAS */}
      <canvas 
        id="gradient-canvas" 
        className="absolute inset-0 z-0 opacity-60 pointer-events-none" 
        data-transition-in 
      />
      
      {/* 2. GRADIENT COLORS (CSS Variables) */}
      <style jsx>{`
        #gradient-canvas {
          --gradient-color-4: #0f172a; /* Lifted Navy (Slate 950) */
          --gradient-color-3: #3730a3; /* Vibrant Indigo (Indigo 800) */
          --gradient-color-2: #475569; /* Brighter Slate (Slate 600) */
          --gradient-color-1: #1e40af; /* Deep Royal Blue (Blue 800) */
          width: 100%;
          height: 100%;
        }
      `}</style>

      {/* 3. FADE TO BLACK TRANSITION (The requested addition) */}
      {/* This creates a smooth 32-unit tall transition from the canvas back to the solid black background */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 max-w-7xl flex flex-col items-center">
        <div className="w-full max-w-4xl text-left"> 
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white mb-8 leading-[0.95] animate-in fade-in slide-in-from-bottom-8 duration-1000">
              Money Printer is the new standard for running practices
            </h1>

            <p className="mb-10 max-w-lg text-lg text-[#8a8f98] leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                Meet the system for modern eye care management.<br className="hidden md:block" /> 
                Streamline patient intake, smart quoting, and revenue tracking.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 max-w-lg animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                <Link href="/signup">
                  <Button variant="secondary" className="border-0 h-12 px-8 text-base font-semibold text-black transition-all hover:bg-slate-200">
                    Start building
                  </Button>
                </Link>
                
                <Link href="#product-suite" className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                   <span className="text-base font-medium bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
                     New: Revenue agent for Slack
                   </span>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}