"use client";

import React from "react";
import { AppHeader } from "../../components/ui/common/AppHeader";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black font-sans text-white selection:bg-indigo-500/30">
      <AppHeader />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10 animate-in fade-in duration-700">
        
        <div className="w-full max-w-sm text-center">
          
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-black" fill="currentColor">
                   <path d="M12 0L24 12L12 24L0 12L12 0Z" className="opacity-0" />
                   <path d="M18 4L6 16" stroke="black" strokeWidth="3" strokeLinecap="round" />
                   <path d="M20 8L8 20" stroke="black" strokeWidth="3" strokeLinecap="round" />
                   <path d="M16 2L4 14" stroke="black" strokeWidth="3" strokeLinecap="round" />
                </svg>
            </div>
          </div>

          <h1 className="text-2xl font-medium mb-8 tracking-tight text-slate-200">
            Create your workspace
          </h1>

          <div className="space-y-3 mb-8">
            <button className="w-full h-12 bg-[#5e6ad2] hover:bg-[#4e5ac0] text-white font-medium rounded-md transition-all duration-200 flex items-center justify-center gap-3 active:scale-[0.98]">
              Continue with Google
            </button>
          </div>

          <p className="text-xs text-slate-500 leading-relaxed mb-8 px-4">
            By signing up, you agree to our{" "}
            <a href="#" className="text-slate-400 hover:text-slate-300 underline decoration-slate-600">Terms of Service</a>
            {" "}and{" "}
            <a href="#" className="text-slate-400 hover:text-slate-300 underline decoration-slate-600">Data Processing Agreement</a>.
          </p>

          <div className="text-sm text-slate-400">
            Already have an account?{" "}
            <a href="/login" className="text-white hover:underline font-medium">
              Log in
            </a>
          </div>

        </div>
      </main>

    </div>
  );
}