import React from "react";
import { AppHeader } from "@/components/ui/common/AppHeader";
import { Footer } from "@/components/ui/common/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fcfaff] flex flex-col font-sans text-slate-900">
      <AppHeader />

      <main className="flex-1 container mx-auto px-4 py-12 lg:py-16 max-w-6xl">
        
        {/* Welcome Section */}
        <div className="mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Welcome back, Justin
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            Select a workspace below to manage your practice.
          </p>
        </div>

        {/* ROW 1: TOOLING */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
             <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tooling</h2>
             <div className="h-px bg-slate-200 flex-1"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Smart Quote */}
            <a 
              href="/smart_quote"
              className="group block bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Smart Quote</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Build complex lens and frame quotes for patients. Calculate insurance benefits instantly.
              </p>
            </a>

            {/* Card 2: Patient Intake (Updated Link) */}
            <a 
              href="/patient_intake" 
              className="group block bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-indigo-300 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Indigo Styling to match Platform marketing */}
              <div className="h-12 w-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Patient Intake</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Manage patient check-ins and insurance verification forms digitally.
              </p>
            </a>

          </div>
        </div>

        {/* ROW 2: LOGISTICS */}
        <div>
          <div className="flex items-center gap-4 mb-6">
             <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Logistics</h2>
             <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             
             {/* Card 3: Revenue */}
             <a 
              href="/revenue"
              className="group block bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-purple-300 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-12 w-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Revenue</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                View real-time revenue pulse, optician leaderboards, and daily sales performance.
              </p>
            </a>

             {/* Card 4: Team Management */}
             <a 
              href="/team"
              className="group block bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-12 w-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Team</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Manage staff permissions, roles, and view individual performance reports.
              </p>
            </a>

            {/* Card 5: Supplies */}
            <a 
              href="/supplies"
              className="group block bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-orange-300 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-12 w-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Supplies</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Track frame inventory, order lab supplies, and manage vendor relationships.
              </p>
            </a>

          </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
}