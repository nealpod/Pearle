"use client";

import React, { useState, useRef, useEffect } from "react";
import { LocationSwitcher } from "./LocationSwitcher"; // Ensure this component exists

export function AppHeader() {
  // We use a single state to track which dropdown is open (if any)
  const [activeDropdown, setActiveDropdown] = useState<"tooling" | "logistics" | null>(null);
  
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdowns if clicking outside the nav area
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (menu: "tooling" | "logistics") => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="relative z-50 w-full bg-black border-b border-white/10">
      <div className="flex h-14 items-center justify-between px-4 md:px-6">
        
        {/* LEFT SIDE: Logo + App Navigation */}
        <div className="flex items-center">
          {/* Logo */}
          <a href="/homepage" className="text-lg font-black tracking-tight text-white shrink-0 transition-opacity hover:opacity-80">
            Money Printer
          </a>

          {/* Divider */}
          <div className="h-4 w-px bg-white/20 mx-6 hidden md:block"></div>

          {/* APP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300" ref={navRef}>
            <a href="/homepage" className="hover:text-white transition-all duration-200">
              Homepage
            </a>

            {/* =======================
                DROPDOWN 1: TOOLING
               ======================= */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("tooling")}
                className={`flex items-center gap-1.5 transition-all duration-200 focus:outline-none ${
                  activeDropdown === "tooling" ? "text-white font-bold" : "hover:text-white hover:font-bold"
                }`}
              >
                Tooling
                <svg 
                  className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === "tooling" ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeDropdown === "tooling" && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-white text-slate-900 rounded-xl shadow-2xl border border-slate-200 overflow-hidden ring-1 ring-black ring-opacity-5 animate-in fade-in zoom-in-95 duration-200">
                  <div className="py-2">
                    
                    {/* Item: Smart Quote */}
                    <a href="/smart_quote" className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group">
                      <div className="h-8 w-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                      </div>
                      <div>
                        <div className="font-bold text-sm">Smart Quote</div>
                        <div className="text-xs text-slate-500">Generate Pricing</div>
                      </div>
                    </a>

                    <div className="h-px bg-slate-100 my-1"></div>

                    {/* Item: Patient Intake */}
                    <a href="/patient_intake" className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group">
                       <div className="h-8 w-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                       </div>
                       <div>
                          <div className="font-bold text-sm">Patient Intake</div>
                          <div className="text-xs text-slate-500">Digital Check-in</div>
                       </div>
                    </a>

                  </div>
                </div>
              )}
            </div>

            {/* =========================
                DROPDOWN 2: LOGISTICS
               ========================= */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("logistics")}
                className={`flex items-center gap-1.5 transition-all duration-200 focus:outline-none ${
                  activeDropdown === "logistics" ? "text-white font-bold" : "hover:text-white hover:font-bold"
                }`}
              >
                Logistics
                <svg 
                  className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === "logistics" ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeDropdown === "logistics" && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-white text-slate-900 rounded-xl shadow-2xl border border-slate-200 overflow-hidden ring-1 ring-black ring-opacity-5 animate-in fade-in zoom-in-95 duration-200">
                  <div className="py-2">
                    
                    {/* Item: Revenue */}
                    <a href="/revenue" className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group">
                      <div className="h-8 w-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
                      </div>
                      <div>
                        <div className="font-bold text-sm">Revenue</div>
                        <div className="text-xs text-slate-500">Revenue & Metrics</div>
                      </div>
                    </a>

                    {/* Item: Organization (Renamed from Team) */}
                    <a href="/team" className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group">
                      <div className="h-8 w-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                      </div>
                      <div>
                        <div className="font-bold text-sm">Organization</div>
                        <div className="text-xs text-slate-500">Staff & Locations</div>
                      </div>
                    </a>

                    {/* Item: Supplies */}
                    <a href="/supplies" className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group">
                      <div className="h-8 w-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                      </div>
                      <div>
                        <div className="font-bold text-sm">Supplies</div>
                        <div className="text-xs text-slate-500">Inventory & Orders</div>
                      </div>
                    </a>

                  </div>
                </div>
              )}
            </div>

          </nav>
        </div>

        {/* RIGHT SIDE: User & Org Info */}
        <div className="flex items-center justify-end gap-4">
           
           {/* LOCATION SWITCHER (Dynamic) */}
           <div className="hidden md:block">
              <LocationSwitcher />
           </div>

           <button className="group relative h-9 w-9 rounded-full overflow-hidden bg-slate-900 border border-slate-700 transition-all duration-300 hover:border-emerald-500 hover:ring-4 hover:ring-emerald-500/20 hover:scale-110 cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-tr from-slate-800 to-slate-700 group-hover:from-blue-600 group-hover:to-purple-600 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-slate-300 group-hover:text-white transition-colors">
                 JM
              </div>
           </button>
        </div>
        
      </div>
    </header>
  );
}