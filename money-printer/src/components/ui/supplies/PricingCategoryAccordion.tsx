"use client";

import React from "react";

export interface PricingItem {
  id: string;
  name: string;
  price: number;
  active: boolean;
}

interface PricingCategoryAccordionProps {
  title: string;
  items: PricingItem[];
  isOpen: boolean;
  onToggle: () => void;
  onToggleActive: (itemId: string) => void; // Handler for checkbox
  onEdit: (itemId: string) => void;
}

export function PricingCategoryAccordion({ 
  title, 
  items, 
  isOpen, 
  onToggle,
  onToggleActive,
  onEdit
}: PricingCategoryAccordionProps) {
  
  return (
    <div className="border-b border-slate-100 last:border-0">
      
      {/* Accordion Header */}
      <button 
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-6 transition-all duration-200 group ${
            isOpen ? 'bg-orange-50/50' : 'hover:bg-slate-50'
        }`}
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-orange-800' : 'text-slate-700'}`}>
            {title}
        </span>
        
        <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {items.length} Items
            </span>
            {/* Chevron Icon */}
            <div className={`h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isOpen ? 'bg-orange-200 text-orange-700 rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-orange-100 group-hover:text-orange-500'
            }`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
            </div>
        </div>
      </button>

      {/* Accordion Content (The List) */}
      {isOpen && (
        <div className="bg-orange-50/30 animate-in slide-in-from-top-2 duration-200">
            
            {/* Table Header */}
            <div className="grid grid-cols-12 px-6 py-3 border-y border-orange-100 text-xs font-bold text-orange-800/60 uppercase tracking-wider">
                <div className="col-span-5">Item Name</div>
                <div className="col-span-3">Retail Price</div>
                <div className="col-span-2 text-center">Active</div>
                <div className="col-span-2 text-right">Actions</div>
            </div>

            {/* Items */}
            <div className="divide-y divide-orange-100/50">
                {items.map((item) => (
                    <div key={item.id} className="grid grid-cols-12 px-6 py-4 items-center hover:bg-white/60 transition-colors">
                        
                        {/* Name */}
                        <div className="col-span-5 font-bold text-slate-900">
                            {item.name}
                        </div>

                        {/* Price */}
                        <div className="col-span-3 font-medium text-slate-600">
                            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.price)}
                        </div>

                        {/* Active Checkbox */}
                        <div className="col-span-2 flex justify-center">
                            <input 
                                type="checkbox" 
                                checked={item.active}
                                onChange={() => onToggleActive(item.id)}
                                className="h-5 w-5 rounded border-slate-300 text-orange-600 focus:ring-orange-500 cursor-pointer accent-orange-600" 
                            />
                        </div>

                        {/* Edit Action */}
                        <div className="col-span-2 flex justify-end">
                            <button 
                                onClick={(e) => { e.stopPropagation(); onEdit(item.id); }}
                                className="text-sm font-bold text-orange-600 hover:text-orange-700 hover:underline decoration-2 underline-offset-4"
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                ))}
                
                {/* Empty State for Category */}
                {items.length === 0 && (
                    <div className="p-8 text-center text-slate-400 italic text-sm">
                        No items in this category yet.
                    </div>
                )}
            </div>
        </div>
      )}
    </div>
  );
}