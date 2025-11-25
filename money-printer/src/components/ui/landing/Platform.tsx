import React from "react";

export function Platform() {
  return (
    // Added id="product-suite" here for the scroll anchor
    <section id="product-suite" className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 lg:mb-32">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">
            Product Suite
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            The unified operating system <br className="hidden md:block" />
            for modern eye care.
          </h2>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
             Replace your fragmented software stack with one seamless platform designed to capture revenue at every step.
          </p>
        </div>

        {/* UPDATED: Reduced gap from 50vh to 25vh (half of previous) */}
        <div className="flex flex-col gap-y-24 lg:gap-y-[25vh]">
            
            {/* ... (The rest of your features content remains exactly the same) ... */}
            {/* FEATURE 1: INTAKE */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="relative">
                    <div className="absolute -inset-4 bg-indigo-500/20 rounded-[2.5rem] -z-10 transform -rotate-2 blur-2xl"></div>
                    <div className="bg-linear-to-br from-slate-900 to-indigo-900 rounded-2rem p-8 md:p-12 border border-indigo-500/30 shadow-2xl shadow-indigo-900/40 aspect-4/3 flex flex-col justify-center items-center relative overflow-hidden group">
                         <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 p-6 transform transition-transform duration-500 group-hover:scale-105">
                            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                                <div className="font-bold text-white">Patient Intake</div>
                                <div className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full uppercase tracking-wide border border-emerald-500/30">Eligible</div>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <div className="h-2 w-1/3 bg-white/20 rounded"></div>
                                    <div className="h-10 w-full bg-white/5 border border-white/10 rounded-lg"></div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-1/4 bg-white/20 rounded"></div>
                                    <div className="h-10 w-full bg-white/5 border border-white/10 rounded-lg"></div>
                                </div>
                                <div className="pt-2">
                                    <div className="h-10 w-full bg-indigo-500 rounded-lg shadow-lg shadow-indigo-900/50"></div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>

                <div className="lg:pl-10">
                    <div className="h-12 w-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-6">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                        Capture details <br />
                        <span className="text-indigo-600">before they walk in.</span>
                    </h3>
                    <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        Stop chasing clipboards. Send secure digital intake forms to patients ahead of time. We automatically extract insurance data and verify eligibility instantly, so your front desk can focus on welcoming patients.
                    </p>
                    <a href="#" className="inline-flex items-center text-indigo-700 font-bold hover:text-indigo-800 transition-colors group">
                        Learn about Intake
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* FEATURE 2: QUOTING */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="order-2 lg:order-1 lg:pr-10">
                    <div className="h-12 w-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                        Transparent pricing <br />
                        <span className="text-blue-600">in seconds.</span>
                    </h3>
                    <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        Build complex lens and frame quotes that patients actually understand. Show them their insurance contribution, out-of-pocket costs, and savings in real-time. Close more sales with clarity.
                    </p>
                    <a href="#" className="inline-flex items-center text-blue-700 font-bold hover:text-blue-800 transition-colors group">
                        Explore Smart Quoting
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                <div className="order-1 lg:order-2 relative">
                     <div className="absolute -inset-4 bg-blue-500/20 rounded-[2.5rem] -z-10 transform rotate-2 blur-2xl"></div>
                    <div className="bg-linear-to-bl from-blue-900 to-slate-900 rounded-2rem p-8 md:p-12 border border-blue-500/30 shadow-2xl shadow-blue-900/40 aspect-4/3 flex flex-col justify-center items-center relative overflow-hidden group">
                         <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 p-6 transform transition-transform duration-500 group-hover:scale-105">
                            <div className="flex items-center justify-between mb-8">
                                <div className="font-bold text-white">Quote Summary</div>
                            </div>
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-300">Retail Total</span>
                                    <span className="font-semibold text-white line-through decoration-blue-400/50">$450.00</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-300">Insurance Benefit</span>
                                    <span className="font-semibold text-emerald-400">-$250.00</span>
                                </div>
                                <div className="h-px bg-white/10 my-2"></div>
                                <div className="flex justify-between text-lg font-bold">
                                    <span className="text-white">Patient Owes</span>
                                    <span className="text-blue-400">$200.00</span>
                                </div>
                            </div>
                            <div className="h-10 w-full bg-white text-slate-900 rounded-lg flex items-center justify-center font-bold text-sm shadow-lg">
                                Approve Quote
                            </div>
                         </div>
                    </div>
                </div>
            </div>

            {/* FEATURE 3: ANALYTICS */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="relative">
                    <div className="absolute -inset-4 bg-purple-500/20 rounded-[2.5rem] -z-10 transform -rotate-1 blur-2xl"></div>
                    <div className="bg-linear-to-br from-purple-900 to-slate-900 rounded-2rem p-8 md:p-12 border border-purple-500/30 shadow-2xl shadow-purple-900/40 aspect-4/3 flex flex-col justify-center items-center relative overflow-hidden group">
                         <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 p-6 transform transition-transform duration-500 group-hover:scale-105">
                            <div className="flex items-center justify-between mb-6">
                                <div className="font-bold text-white">Revenue Pulse</div>
                                <div className="text-xs font-bold text-purple-300 uppercase">Last 30 Days</div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                                    <div className="text-xs text-slate-300 mb-1">Net Revenue</div>
                                    <div className="text-xl font-bold text-white">$24,138</div>
                                </div>
                                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                                    <div className="text-xs text-slate-300 mb-1">Claims Paid</div>
                                    <div className="text-xl font-bold text-purple-400">98%</div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs font-bold text-slate-400">
                                    <span>Monthly Goal</span>
                                    <span>85%</span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-2">
                                    <div className="bg-purple-500 h-2 rounded-full w-[85%] shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>

                <div className="lg:pl-10">
                    <div className="h-12 w-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                        </svg>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                        Real-time insights <br />
                        <span className="text-purple-600">for your growth.</span>
                    </h3>
                    <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                         Visualize your practice's health with dashboards that actually make sense. Track exams sold, frame inventory, and claim status in real-time to make better business decisions.
                    </p>
                    <a href="#" className="inline-flex items-center text-purple-700 font-bold hover:text-purple-800 transition-colors group">
                        See Analytics features
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}