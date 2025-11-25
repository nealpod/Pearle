"use client";

import React, { useState, useRef, useEffect } from "react";

// Mock Stores (In real app, fetch from Supabase 'stores' table)
const MY_STORES = [
  { id: "S-101", name: "Pearle Vision Troy", city: "Troy" },
  { id: "S-102", name: "Clinton Township", city: "Clinton Twp" },
  { id: "S-103", name: "Downtown Detroit", city: "Detroit" },
];

export function LocationSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStore, setActiveStore] = useState(MY_STORES[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-xs font-bold text-slate-300 bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:text-white px-3 py-1.5 rounded-full transition-all duration-200 group"
      >
        <span className="uppercase tracking-wider opacity-70 text-[10px]">Loc:</span>
        <span className="text-emerald-400">{activeStore.city}</span>
        <svg
          className={`w-3 h-3 text-slate-500 group-hover:text-white transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-[#0f172a] border border-white/10 rounded-xl shadow-2xl overflow-hidden ring-1 ring-black ring-opacity-5 animate-in fade-in zoom-in-95 duration-200 z-50">
          <div className="px-4 py-3 border-b border-white/5 bg-white/5">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Switch Location</div>
          </div>
          <div className="py-1">
            {MY_STORES.map((store) => (
              <button
                key={store.id}
                onClick={() => {
                  setActiveStore(store);
                  setIsOpen(false);
                  // In a real app, this would set a Cookie or React Context
                  console.log(`Switched to ${store.name} (${store.id})`);
                }}
                className={`w-full text-left px-4 py-3 text-sm font-medium flex items-center justify-between hover:bg-white/5 transition-colors ${
                  activeStore.id === store.id ? "text-emerald-400 bg-emerald-900/10" : "text-slate-300"
                }`}
              >
                <span>{store.name}</span>
                {activeStore.id === store.id && (
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                )}
              </button>
            ))}
          </div>
          {/* Footer Action */}
          <div className="bg-black/20 p-2 border-t border-white/5">
             <a href="/team" className="block text-center text-[10px] font-bold text-slate-500 hover:text-white py-1 transition-colors">
                + Manage Locations
             </a>
          </div>
        </div>
      )}
    </div>
  );
}