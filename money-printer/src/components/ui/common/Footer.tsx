import React from "react";

export function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Copyright */}
        <div className="text-sm text-slate-500 font-medium">
          © {new Date().getFullYear()} Money Printer Inc.
        </div>

        {/* Right: Minimal Navigation */}
        <nav className="flex items-center gap-8 text-sm font-medium text-slate-400">
           <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           <a href="#" className="hover:text-white transition-colors">Support</a>
        </nav>
        
      </div>
    </footer>
  );
}