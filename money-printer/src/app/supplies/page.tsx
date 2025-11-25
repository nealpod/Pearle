"use client";

import React, { useState } from "react";
import { AppHeader } from "@/components/ui/common/AppHeader";
import { Footer } from "@/components/ui/common/Footer";
import { PricingCategoryAccordion, PricingItem } from "@/components/ui/supplies/PricingCategoryAccordion";
import { AddSupplyModal } from "@/components/ui/supplies/AddSupplyModal";

// --- Mock Data Types ---
type CategoryData = {
  id: string;
  title: string;
  items: PricingItem[];
};

// --- Initial Data ---
const INITIAL_DATA: CategoryData[] = [
  {
    id: "addons",
    title: "Add-Ons",
    items: [
        { id: "1", name: "No Extras", price: 0.00, active: true },
        { id: "2", name: "Tech Shield Blue", price: 40.00, active: true },
        { id: "3", name: "Sun Sync", price: 80.00, active: false },
    ]
  },
  {
    id: "coatings",
    title: "Coatings",
    items: [
        { id: "101", name: "Standard AR", price: 59.00, active: true },
        { id: "102", name: "Premium AR", price: 89.00, active: true },
        { id: "103", name: "Ultra Scratch Resist", price: 35.00, active: true },
    ]
  },
  { id: "uv", title: "Backside UV", items: [] },
  { id: "blue", title: "Blue Light", items: [] },
  { id: "color", title: "Color", items: [] },
  { id: "materials", title: "Lens Material", items: [] },
];

export default function SuppliesPage() {
  const [categories, setCategories] = useState<CategoryData[]>(INITIAL_DATA);
  const [openCategoryId, setOpenCategoryId] = useState<string | null>("addons"); // Start with first open
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // --- Handlers ---

  const toggleCategory = (id: string) => {
    setOpenCategoryId(openCategoryId === id ? null : id);
  };

  const toggleItemActive = (categoryId: string, itemId: string) => {
    setCategories(prev => prev.map(cat => {
        if (cat.id !== categoryId) return cat;
        return {
            ...cat,
            items: cat.items.map(item => 
                item.id === itemId ? { ...item, active: !item.active } : item
            )
        };
    }));
  };

  const handleEditItem = (categoryId: string, itemId: string) => {
    alert(`Edit logic for item ${itemId} in category ${categoryId}`);
  };

  const handleAddItem = (data: { category: string; name: string; price: number }) => {
    setCategories(prev => prev.map(cat => {
        if (cat.title !== data.category) return cat;
        const newItem: PricingItem = {
            id: Date.now().toString(),
            name: data.name,
            price: data.price,
            active: true
        };
        return { ...cat, items: [...cat.items, newItem] };
    }));
    
    // Auto-open the category we just added to
    const targetId = categories.find(c => c.title === data.category)?.id;
    if (targetId) setOpenCategoryId(targetId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fffaf5] font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900">
      <AppHeader />

      <main className="flex-1 container mx-auto px-4 py-12 lg:py-16 max-w-5xl relative z-10">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
                    Component & Pricing Management
                </h1>
                <p className="text-slate-500 font-medium text-lg max-w-xl">
                    Manage your inventory catalog, retail pricing, and active stock lists.
                </p>
            </div>
            
            {/* Add Button (Orange) */}
            <button 
                onClick={() => setIsAddModalOpen(true)}
                className="group relative overflow-hidden rounded-full bg-orange-700 px-8 py-3 text-white shadow-xl shadow-orange-900/20 transition-all hover:bg-orange-800 hover:scale-105 active:scale-95 cursor-pointer"
            >
                <div className="relative z-10 flex items-center gap-2 font-bold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                    <span>Add New Item</span>
                </div>
            </button>
        </div>

        {/* Content Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col min-h-[400px]">
            
            {/* Toolbar */}
            <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row gap-6 justify-between items-center bg-white/40">
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="h-12 w-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 border border-orange-200">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">Inventory Catalog</h3>
                        <p className="text-xs font-bold text-orange-600 uppercase tracking-wide">
                            {categories.reduce((acc, cat) => acc + cat.items.length, 0)} Active Items
                        </p>
                    </div>
                </div>

                <div className="relative w-full md:w-80">
                    <input 
                        type="text" 
                        placeholder="Search items..." 
                        className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all shadow-sm hover:border-orange-200"
                    />
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                </div>
            </div>

            {/* Accordion List */}
            <div className="flex-1">
                {categories.map((category) => (
                    <PricingCategoryAccordion
                        key={category.id}
                        title={category.title}
                        items={category.items}
                        isOpen={openCategoryId === category.id}
                        onToggle={() => toggleCategory(category.id)}
                        onToggleActive={(itemId) => toggleItemActive(category.id, itemId)}
                        onEdit={(itemId) => handleEditItem(category.id, itemId)}
                    />
                ))}
            </div>

            {/* Footer */}
            <div className="bg-slate-50/50 p-4 flex justify-center border-t border-slate-100 mt-auto">
                <button className="text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors uppercase tracking-widest opacity-60 hover:opacity-100">
                    Manage Categories
                </button>
            </div>
        </div>

      </main>
      
      <Footer />

      {/* Add Modal */}
      <AddSupplyModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        categories={categories.map(c => c.title)}
        onAdd={handleAddItem}
      />

    </div>
  );
}