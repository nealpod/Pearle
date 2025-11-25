"use client";

import React, { useState } from "react";
import { AppHeader } from "@/components/ui/common/AppHeader";
import { Footer } from "@/components/ui/common/Footer";

// --- Mock Data ---
const METRICS = [
  { label: "Total Sales", value: "$12,120.65", subtext: null, color: "text-emerald-600" },
  { label: "Exams Sold", value: "$519.00", subtext: "47 units", color: "text-slate-700" },
  { label: "Frames Sold", value: "$2,079.00", subtext: "23 units", color: "text-slate-700" },
  { label: "Lens Pairs Sold", value: "$7,938.83", subtext: "42 units", color: "text-slate-700" },
  { label: "Contact Sales", value: "$1,583.82", subtext: "4 units", color: "text-slate-700" },
];

const PIE_DATA_VALUE = [
  { label: "Exams", value: 519, color: "#581c87" },   // purple-900
  { label: "Frames", value: 2079, color: "#7e22ce" }, // purple-700
  { label: "Lenses", value: 7938, color: "#c084fc" }, // purple-400
  { label: "Contacts", value: 1583, color: "#e2e8f0" }, // slate-200
];

const PIE_DATA_UNITS = [
  { label: "Exams", value: 47, color: "#581c87" },
  { label: "Frames", value: 23, color: "#7e22ce" },
  { label: "Lenses", value: 42, color: "#c084fc" },
  { label: "Contacts", value: 4, color: "#e2e8f0" },
];

const OPTICIAN_LEADERBOARD = [
  { name: "Jay Davis", store: "Clinton Township", sales: "$13,710.26", count: 49 },
  { name: "Tammie Sampey", store: "Troy", sales: "$10,174.32", count: 29 },
  { name: "Dharm Podhuturi", store: "Troy", sales: "$1,108.34", count: 2 },
  { name: "Kyrie Irving", store: "Detroit - Downtown", sales: "$4,200.00", count: 12 },
];

const DAILY_SALES = [
  { customer: "Juliana Nahas", optician: "Tammie Sampey", store: "Troy", amount: "$625.95" },
  { customer: "Julia Sickles", optician: "Tammie Sampey", store: "Troy", amount: "$228.00" },
  { customer: "Brad Pitt", optician: "Jay Davis", store: "Clinton Township", amount: "$1,200.50" },
  { customer: "Angelina Jolie", optician: "Dharm Podhuturi", store: "Troy", amount: "$850.00" },
];

// --- Helper: Simple SVG Pie Chart ---
function SimplePieChart({ data }: { data: { value: number; color: string }[] }) {
  const total = data.reduce((acc, item) => acc + item.value, 0);
  let cumulativePercent = 0;

  function getCoordinatesForPercent(percent: number) {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  }

  return (
    <div className="relative aspect-square max-w-[260px] mx-auto my-6">
      <svg viewBox="-1 -1 2 2" className="transform -rotate-90 w-full h-full overflow-visible">
        {data.map((slice, index) => {
          const startPercent = cumulativePercent;
          const slicePercent = slice.value / total;
          cumulativePercent += slicePercent;
          const endPercent = cumulativePercent;

          // Draw full circle if 1 item
          if (slicePercent === 1) return <circle key={index} cx="0" cy="0" r="1" fill={slice.color} />;

          const [startX, startY] = getCoordinatesForPercent(startPercent);
          const [endX, endY] = getCoordinatesForPercent(endPercent);
          const largeArcFlag = slicePercent > 0.5 ? 1 : 0;

          const pathData = [
            `M 0 0`,
            `L ${startX} ${startY}`,
            `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
            `L 0 0`,
          ].join(" ");

          return (
            <path 
                key={index} 
                d={pathData} 
                fill={slice.color} 
                stroke="white" 
                strokeWidth="0.02" 
                className="hover:opacity-90 transition-opacity cursor-pointer"
            />
          );
        })}
      </svg>
    </div>
  );
}

// --- Components ---

function FilterBar() {
    return (
        <div className="bg-white/60 backdrop-blur-md rounded-2xl border border-white/60 p-4 shadow-sm mb-8 flex flex-col md:flex-row gap-6 items-center transition-all hover:bg-white/80">
            <div className="flex-1 w-full space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 pl-1">Date Range</label>
                <div className="relative">
                    <select className="w-full bg-white border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none hover:border-purple-200 transition-all hover:shadow-lg hover:-translate-y-0.5">
                        <option>Last 30 Days</option>
                        <option>Last 90 Days</option>
                        <option>Year to Date</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                </div>
            </div>
            <div className="flex-1 w-full space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 pl-1">Store</label>
                <div className="relative">
                    <select className="w-full bg-white border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none hover:border-purple-200 transition-all hover:shadow-lg hover:-translate-y-0.5">
                        <option>Clinton Township</option>
                        <option>Detroit - Downtown</option>
                        <option>Ann Arbor</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

function RevenuePulseCard() {
    return (
        <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8 transition-all hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)]">
            
            {/* Card Header */}
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                    <h3 className="text-xl font-extrabold text-slate-800 tracking-tight">Revenue Pulse</h3>
                    <span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">Real-time</span>
                </div>
                <div className="h-10 w-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform text-slate-400 hover:text-slate-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                {METRICS.map((m, idx) => (
                    <div key={m.label} className={`flex flex-col justify-center text-center ${idx > 0 ? 'pt-4 sm:pt-0 sm:pl-4' : 'pb-4 sm:pb-0'}`}>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{m.label}</div>
                        <div className={`text-2xl lg:text-3xl font-black tracking-tight mb-1 ${idx === 0 ? 'text-emerald-600' : 'text-slate-800'}`}>
                            {m.value}
                        </div>
                        {m.subtext && (
                            <div className="text-xs font-bold text-slate-400">
                                {m.subtext}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

// --- Optician Leaderboard Card ---
function OpticianLeaderboardCard() {
    return (
      <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all h-full flex flex-col">
        <h3 className="text-xl font-extrabold text-slate-800 mb-6">Optician Leaderboard</h3>
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="pb-4 font-bold pl-2">Name</th>
                <th className="pb-4 font-bold">Store</th>
                <th className="pb-4 font-bold text-right">Total Sales</th>
                <th className="pb-4 font-bold text-right pr-2"># of Sales</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {OPTICIAN_LEADERBOARD.map((item, idx) => (
                <tr key={idx} className="group hover:bg-purple-50/30 transition-colors">
                  <td className="py-4 pl-2 font-bold text-slate-900">{item.name}</td>
                  <td className="py-4 text-slate-600">{item.store}</td>
                  <td className="py-4 text-right font-bold text-slate-900">{item.sales}</td>
                  <td className="py-4 text-right text-slate-600 pr-2">{item.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
}
  
// --- Daily Sales Card ---
function DailySalesCard() {
    return (
      <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all h-full flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-extrabold text-slate-800">Daily Sales</h3>
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-sm text-sm font-bold text-slate-600 cursor-pointer hover:border-purple-300 transition-colors">
             <span>11/22/2025</span>
             <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>
        </div>
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="pb-4 font-bold pl-2">Customer</th>
                <th className="pb-4 font-bold">Optician</th>
                <th className="pb-4 font-bold">Store</th>
                <th className="pb-4 font-bold text-right pr-2">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {DAILY_SALES.map((item, idx) => (
                <tr key={idx} className="group hover:bg-purple-50/30 transition-colors">
                  <td className="py-4 pl-2 font-bold text-slate-900">{item.customer}</td>
                  <td className="py-4 text-slate-600">{item.optician}</td>
                  <td className="py-4 text-slate-600">{item.store}</td>
                  <td className="py-4 text-right font-bold text-slate-900 pr-2">{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
}

// --- Main Dashboard Layout ---
export default function DashboardPage() {
  return (
    // UPDATED: Using bg-[#f5f3ff] for a DISTINCT purple tint (Tailwind Violet-50)
    <div className="min-h-screen flex flex-col bg-[#f3f1fe] font-sans text-slate-900 selection:bg-purple-100 selection:text-purple-900 overflow-x-hidden">
      
      <AppHeader />

      <main className="flex-1 relative z-10">
        <div className="container mx-auto px-4 py-12 lg:py-16 max-w-[1600px]">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
                <div>
                    <h1 className="text-4xl lg:text-5xl font-medium text-slate-900 mb-3 tracking-tight">
                        Welcome in, <span className="font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-900 to-slate-900">Manager</span>
                    </h1>
                    <p className="text-slate-500 font-medium text-lg">Here's what's happening with your practice today.</p>
                </div>
            </div>

            <FilterBar />

            <RevenuePulseCard />

            {/* Pie Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                
                {/* Chart 1 */}
                <div className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-shadow">
                    <h3 className="text-lg font-bold text-slate-900 mb-6">Sales by $ Value</h3>
                    <div className="flex flex-wrap gap-4 justify-center mb-4">
                        {PIE_DATA_VALUE.map((item) => (
                            <div key={item.label} className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: item.color }}></div>
                                <span className="text-xs font-bold text-slate-500 uppercase">{item.label}</span>
                            </div>
                        ))}
                    </div>
                    <SimplePieChart data={PIE_DATA_VALUE} />
                </div>

                {/* Chart 2 */}
                <div className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-shadow">
                    <h3 className="text-lg font-bold text-slate-900 mb-6">Sales by # Units</h3>
                    <div className="flex flex-wrap gap-4 justify-center mb-4">
                        {PIE_DATA_UNITS.map((item) => (
                            <div key={item.label} className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: item.color }}></div>
                                <span className="text-xs font-bold text-slate-500 uppercase">{item.label}</span>
                            </div>
                        ))}
                    </div>
                    <SimplePieChart data={PIE_DATA_UNITS} />
                </div>

            </div>

            {/* New Row: Leaderboard & Daily Sales */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <OpticianLeaderboardCard />
                <DailySalesCard />
            </div>

        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}