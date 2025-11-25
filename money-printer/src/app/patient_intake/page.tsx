import React from "react";
import { AppHeader } from "@/components/ui/common/AppHeader";
import { Footer } from "@/components/ui/common/Footer";

export default function PatientIntake() {
  return (
    // UPDATED: bg-[#f4f5fd] creates a true indigo/violet-tinted white
    <div className="min-h-screen flex flex-col bg-[#f4f5fd] font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <AppHeader />

      <main className="flex-1 container mx-auto px-4 py-12 lg:py-16 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
                    Patient Intake
                </h1>
                <p className="text-slate-500 font-medium text-lg max-w-xl">
                    Digital check-in and insurance verification queues.
                </p>
            </div>
            
            <button className="group relative overflow-hidden rounded-full bg-indigo-600 px-8 py-3 text-white shadow-xl shadow-indigo-900/20 transition-all hover:bg-indigo-700 hover:scale-105 active:scale-95 cursor-pointer">
                <div className="relative z-10 flex items-center gap-2 font-bold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                    <span>New Intake</span>
                </div>
            </button>
        </div>

        {/* Placeholder Content */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-12 text-center">
            <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No pending intakes</h3>
            <p className="text-slate-400 font-medium">Check back later for new patient submissions.</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}