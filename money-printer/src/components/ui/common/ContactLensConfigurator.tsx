"use client";

import React, { useState } from "react";

export function ContactLensConfigurator() {
    const [wearerType, setWearerType] = useState<"new" | "current">("new");
    const [selectedSupply, setSelectedSupply] = useState<"3" | "6" | "12">("12");

    return (
        <div className="grid lg:grid-cols-12 gap-8 h-full">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-4 space-y-6 flex flex-col h-full">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">CL Brand & Type</label>
                    <div className="relative">
                        <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 appearance-none">
                            <option>Acuvue Oasys 1-Day</option>
                            <option>Dailies Total 1</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>
                </div>
                
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Lens Type</label>
                    <div className="px-4 py-3 bg-slate-100 rounded-lg text-slate-500 text-sm font-medium">Spherical / Daily</div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Vision Plan Benefit</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500" placeholder="$0.00" />
                </div>

                <div className="space-y-2">
                     <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Wearer Type</label>
                     <div className="flex rounded-lg overflow-hidden border border-slate-200">
                         <button onClick={() => setWearerType("new")} className={`flex-1 py-2 text-sm font-bold transition-colors ${wearerType === 'new' ? 'bg-emerald-600 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}>New Wearer</button>
                         <button onClick={() => setWearerType("current")} className={`flex-1 py-2 text-sm font-bold transition-colors ${wearerType === 'current' ? 'bg-emerald-600 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}>Current</button>
                     </div>
                </div>

                {/* Info Box */}
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mt-auto">
                    <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-blue-900 text-sm">Why Purchase From Us?</h4>
                        <span className="text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full font-bold">Info</span>
                    </div>
                    <p className="text-xs text-blue-800/80 leading-relaxed">
                        We handle all rebates and insurance claims automatically.
                    </p>
                </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-8 bg-slate-50 border border-slate-200 rounded-xl overflow-hidden flex flex-col h-full shadow-sm">
                {/* Table Header */}
                <div className="grid grid-cols-4 text-center text-xs font-bold text-slate-500 border-b border-slate-200 bg-white shrink-0">
                    <div className="p-4 text-left">Item</div>
                    <div className="p-4">3 MONTH</div>
                    <div className="p-4">6 MONTH</div>
                    <div className="p-4 bg-emerald-50/50 text-emerald-700">ANNUAL</div>
                </div>
                
                {/* Table Body */}
                <div className="flex-1 flex flex-col">
                    {[
                        { label: "Select Supply", type: "radio" },
                        { label: "Total Cost", val1: "$170.00", val2: "$340.00", val3: "$680.00", bold: true },
                        { label: "Vision Plan Benefit", val1: "-$0.00", val2: "-$0.00", val3: "-$150.00", color: "text-emerald-600" },
                    ].map((row, idx) => (
                        <div key={idx} className={`grid grid-cols-4 text-center text-sm items-center border-b border-slate-100 last:border-0 ${row.bold ? 'font-bold bg-white' : ''}`}>
                            <div className="p-3 text-left text-slate-600 font-medium text-xs md:text-sm">{row.label}</div>
                            {row.type === 'radio' ? (
                                <>
                                    <div className="p-3"><input type="radio" name="supply" checked={selectedSupply === '3'} onChange={() => setSelectedSupply('3')} className="accent-blue-600 h-4 w-4" /></div>
                                    <div className="p-3"><input type="radio" name="supply" checked={selectedSupply === '6'} onChange={() => setSelectedSupply('6')} className="accent-blue-600 h-4 w-4" /></div>
                                    <div className="p-3 bg-emerald-50/30"><input type="radio" name="supply" checked={selectedSupply === '12'} onChange={() => setSelectedSupply('12')} className="accent-emerald-600 h-4 w-4" /></div>
                                </>
                            ) : (
                                <>
                                    <div className={`p-3 ${row.color || 'text-slate-900'}`}>{row.val1}</div>
                                    <div className={`p-3 ${row.color || 'text-slate-900'}`}>{row.val2}</div>
                                    <div className={`p-3 bg-emerald-50/30 ${row.color || 'text-slate-900'}`}>{row.val3}</div>
                                </>
                            )}
                        </div>
                    ))}
                    <div className="flex-1 bg-slate-50/50 min-h-5"></div>
                </div>

                {/* Totals Footer */}
                <div className="grid grid-cols-4 text-center border-t border-slate-200 bg-slate-100 shrink-0 mt-auto">
                    <div className="p-5 text-left font-bold text-slate-700 flex items-center">Today's Total</div>
                    <div className="p-5 font-bold text-slate-900 flex items-center justify-center text-lg">$180.20</div>
                    <div className="p-5 font-bold text-slate-900 flex items-center justify-center text-lg">$360.40</div>
                    <div className="p-5 font-bold text-emerald-700 text-xl bg-emerald-100/50 flex items-center justify-center">$486.80</div>
                </div>
            </div>
        </div>
    );
}