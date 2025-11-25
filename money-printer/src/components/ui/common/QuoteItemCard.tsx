import React from "react";

interface QuoteItemCardProps {
  id: string;
  title: string;
  type: "select" | "checkbox";
  options?: readonly string[];
}

export function QuoteItemCard({ title, type, options, id }: QuoteItemCardProps) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-blue-300 transition-colors flex flex-col h-full animate-in fade-in zoom-in-95 duration-500">
      <div className="mb-4">
        {type === "select" ? (
          <>
            <label htmlFor={id} className="block text-sm font-bold text-slate-900 mb-2">{title}</label>
            <div className="relative">
              <select id={id} className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-500 appearance-none">
                {options?.map((opt: string) => <option key={opt}>{opt}</option>)}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-3 h-[42px]">
            <input type="checkbox" id={id} className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
            <label htmlFor={id} className="font-bold text-slate-900 cursor-pointer select-none">{title}</label>
          </div>
        )}
      </div>
      <div className="grid grid-cols-3 gap-2 mt-auto">
        {["Allow", "Disc", "CoPay"].map((placeholder) => (
          <input key={placeholder} placeholder={placeholder} className="bg-white text-xs px-1 text-slate-900 border border-slate-200 rounded py-2 focus:border-blue-500 focus:outline-none placeholder:text-slate-400 text-center" />
        ))}
      </div>
    </div>
  );
}