"use client";

import React from "react";
import { AppHeader } from "@/components/ui/common/AppHeader";
import { Footer } from "@/components/ui/common/Footer";

// Helper for the pulsing live indicator
function LiveDot() {
  return (
    <div className="relative flex h-1.5 w-1.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
      <AppHeader />

      <main className="flex-1 container mx-auto px-4 py-12 lg:py-16 max-w-5xl mb-36">
        
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
            Welcome back, Justin
          </h1>
          <p className="text-slate-500 text-base font-medium">
            Select a workspace to manage your practice.
          </p>
        </div>

        {/* ROW 1: TOOLING */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
             <span className="bg-slate-100 border border-slate-200 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] px-2.5 py-1 rounded-md shadow-sm">
                Tooling
             </span>
             <div className="h-px bg-slate-200/60 flex-1"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Card 1: Smart Quote */}
            <a 
              href="/smart_quote"
              className="group block bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-blue-400 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="h-9 w-9 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                    <LiveDot />
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">Ready</span>
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Smart Quote</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Build quotes and benefits.
              </p>
            </a>

            {/* Card 2: Patient Intake */}
            <a 
              href="/patient_intake" 
              className="group block bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-indigo-400 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="h-9 w-9 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                    <LiveDot />
                    <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-tight">4 Waiting</span>
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Patient Intake</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Manage digital check-ins.
              </p>
            </a>

          </div>
        </div>

        {/* ROW 2: LOGISTICS */}
        <div>
          <div className="flex items-center gap-3 mb-6">
             <span className="bg-slate-100 border border-slate-200 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] px-2.5 py-1 rounded-md shadow-sm">
                Logistics
             </span>
             <div className="h-px bg-slate-200/60 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
             
             {/* Card 3: Revenue */}
             <a 
              href="/revenue"
              className="group block bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-purple-400 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="h-9 w-9 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                    <LiveDot />
                    <span className="text-[10px] font-bold text-emerald-600 tracking-tight">$12,120</span>
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Revenue</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Track sales and performance.
              </p>
            </a>

             {/* Card 4: Team Management */}
             <a 
              href="/team"
              className="group block bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-emerald-400 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="h-9 w-9 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                    <LiveDot />
                    <span className="text-[10px] font-bold text-emerald-600 tracking-tight">Troy</span>
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Team</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Control roles and permissions.
              </p>
            </a>

            {/* Card 5: Supplies */}
            <a 
              href="/supplies"
              className="group block bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-orange-400 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="h-9 w-9 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                    <LiveDot />
                    <span className="text-[10px] font-bold text-orange-600 tracking-tight">Low Stock</span>
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Supplies</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Manage stock and vendors.
              </p>
            </a>

          </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
}