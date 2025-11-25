"use client";

import React, { useState } from "react";
import { AppHeader } from "@/components/ui/common/AppHeader";
import { Footer } from "@/components/ui/common/Footer";
import { FormSection } from "@/components/ui/common/FormSection";

import { GLASSES_STEPS, CONTACTS_STEPS, EXAM_CONFIG, LENS_CONFIG, ADDON_OPTIONS } from "./constants";
import { QuoteItemCard } from "@/components/ui/common/QuoteItemCard";
import { ContactLensConfigurator } from "@/components/ui/common/ContactLensConfigurator"; 

export default function SmartQuotePage() {
  const [quoteType, setQuoteType] = useState<"glasses" | "contacts" | null>(null);
  const currentSteps = (quoteType === 'contacts') ? CONTACTS_STEPS : GLASSES_STEPS;
  
  const [currentStep, setCurrentStep] = useState(1);
  const [addOns, setAddOns] = useState([{ id: Date.now() }]);

  const setStep = (step: number) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddAddOn = () => setAddOns([...addOns, { id: Date.now() }]);
  const handleRemoveAddOn = (id: number) => {
    if (addOns.length === 1) return;
    setAddOns(addOns.filter(addon => addon.id !== id));
  };

  const mockRunningCost = 
    currentStep === 1 ? 0 :
    currentStep === 3 ? (quoteType === 'glasses' ? 350 : 486.80) :
    200.00; 

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900 bg-[#f0f7ff] relative">
      <AppHeader />

      <main className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-12">
        
        {/* NEW: Page Header & Location Badge */}
        <div className="w-full max-w-5xl px-4 mb-8 flex items-center justify-between">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Smart Quote</h1>
                <p className="text-slate-500">Generate accurate patient estimates.</p>
            </div>
            
            {/* ACTIVE LOCATION BADGE */}
            <div className="hidden md:flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-sm">
                <div className="h-8 w-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Attributing to</div>
                    <div className="text-sm font-bold text-slate-900">Pearle Vision Troy</div>
                </div>
            </div>
        </div>

        <div className="w-full max-w-5xl px-4 relative z-10">
          
          {/* PROGRESS BAR */}
          {currentStep > 1 && (
            <div className="mb-12 relative animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="grid mb-4" style={{ gridTemplateColumns: `repeat(${currentSteps.length}, minmax(0, 1fr))` }}>
                    {currentSteps.map((label, idx) => {
                    const stepNum = idx + 1;
                    const isActive = currentStep >= stepNum;
                    const isCurrent = currentStep === stepNum;
                    return (
                        <div key={label} className={`text-xs md:text-sm font-bold text-center transition-colors duration-300 ${isCurrent ? 'text-blue-600' : isActive ? 'text-slate-900' : 'text-slate-300'}`}>
                            {label}
                        </div>
                    )
                    })}
                </div>
                <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden relative mx-4">
                    <div 
                    className="h-full bg-blue-600 transition-all duration-500 ease-out rounded-full"
                    style={{ width: `${((currentStep - 1) / (currentSteps.length - 1)) * 100}%` }}
                    ></div>
                </div>
            </div>
          )}

          {/* CARD CONTAINER */}
          <div className="space-y-6 min-h-[400px]">
              
            {/* STEP 1: CUSTOMER */}
            {currentStep === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
                <FormSection title="Customer Information" step="1" runningCost={mockRunningCost}>
                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Customer Name</label>
                            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 transition-all" placeholder="e.g. Jane Doe" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Insurance Provider</label>
                            <div className="relative">
                                <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 appearance-none">
                                    <option>VSP Choice</option>
                                    <option>EyeMed</option>
                                    <option>Spectera</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-100 pt-8">
                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4">What are we quoting today?</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <button onClick={() => setQuoteType("glasses")} className={`group relative overflow-hidden rounded-xl border-2 p-6 transition-all duration-300 ${quoteType === "glasses" ? "border-blue-600 bg-blue-50/50" : "border-slate-100 bg-white hover:border-blue-300 hover:shadow-md"}`}>
                                <div className={`mb-2 text-lg font-bold ${quoteType === "glasses" ? "text-blue-700" : "text-slate-700"}`}>Glasses</div>
                                {quoteType === "glasses" && <div className="absolute top-3 right-3 text-blue-600"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></div>}
                            </button>

                            <button onClick={() => setQuoteType("contacts")} className={`group relative overflow-hidden rounded-xl border-2 p-6 transition-all duration-300 ${quoteType === "contacts" ? "border-blue-600 bg-blue-50/50" : "border-slate-100 bg-white hover:border-blue-300 hover:shadow-md"}`}>
                                <div className={`mb-2 text-lg font-bold ${quoteType === "contacts" ? "text-blue-700" : "text-slate-700"}`}>Contacts</div>
                                {quoteType === "contacts" && <div className="absolute top-3 right-3 text-blue-600"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></div>}
                            </button>
                        </div>
                    </div>
                </FormSection>
                
                <div className="mt-8 flex justify-end">
                    <button onClick={() => setStep(2)} disabled={!quoteType} className={`group rounded-full w-16 h-16 flex items-center justify-center text-white shadow-xl shadow-blue-900/20 transition-all duration-300 ease-out ${quoteType ? "bg-slate-900 hover:bg-slate-800 hover:scale-105 active:scale-95 cursor-pointer" : "bg-slate-300 cursor-not-allowed opacity-50"}`}>
                        <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                </div>
            </div>
            )}

            {/* STEP 2: EXAMS */}
            {currentStep === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
                <FormSection title="Exams" step="2" runningCost={mockRunningCost}>
                    <div className="grid md:grid-cols-2 gap-6">
                    {EXAM_CONFIG
                        .filter((item) => {
                            if (quoteType === "glasses" && item.id === "contacts-exam") return false;
                            return true;
                        })
                        .map((item) => (
                           <QuoteItemCard key={item.id} {...item} />
                    ))}
                    </div>
                </FormSection>

                <div className="mt-8 flex justify-between items-center">
                    <button onClick={() => setStep(1)} className="group rounded-full w-16 h-16 flex items-center justify-center bg-slate-900 text-white shadow-xl shadow-blue-900/20 hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 ease-out cursor-pointer">
                        <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    </button>
                    <button onClick={() => setStep(3)} className="group rounded-full w-16 h-16 flex items-center justify-center bg-slate-900 text-white shadow-xl shadow-blue-900/20 hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 ease-out cursor-pointer">
                        <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                </div>
            </div>
            )}

            {/* STEP 3A: FRAMES (GLASSES) */}
            {currentStep === 3 && quoteType === 'glasses' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
                <FormSection title="Frame Selection" step="3" runningCost={mockRunningCost}>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase">Retail Price</label>
                                <input placeholder="$0.00" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase">Allowance</label>
                                <input placeholder="$0.00" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase">Discount (%)</label>
                                <input placeholder="0%" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none" />
                            </div>
                        </div>
                    </div>
                </FormSection>
                <div className="mt-8 flex justify-between items-center">
                    <button onClick={() => setStep(2)} className="group rounded-full w-16 h-16 flex items-center justify-center bg-slate-900 text-white shadow-xl shadow-blue-900/20 hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 ease-out cursor-pointer">
                        <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    </button>
                    <button onClick={() => setStep(4)} className="group rounded-full w-16 h-16 flex items-center justify-center bg-slate-900 text-white shadow-xl shadow-blue-900/20 hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 ease-out cursor-pointer">
                        <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                </div>
            </div>
            )}

            {/* STEP 3B: CONFIG (CONTACTS) */}
            {currentStep === 3 && quoteType === 'contacts' && (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full">
                <FormSection title="Contact Lens Savings Plan" step="3" runningCost={mockRunningCost}>
                    <ContactLensConfigurator />
                </FormSection>
                <div className="mt-8 flex justify-between items-center">
                    <button onClick={() => setStep(2)} className="group rounded-full w-16 h-16 flex items-center justify-center bg-slate-900 text-white shadow-xl shadow-blue-900/20 hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 ease-out cursor-pointer">
                        <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    </button>
                    <button onClick={() => setStep(4)} className="group rounded-full w-16 h-16 flex items-center justify-center bg-slate-900 text-white shadow-xl shadow-blue-900/20 hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 ease-out cursor-pointer">
                        <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                </div>
             </div>
            )}

            {/* STEP 4: LENSES (GLASSES) */}
            {currentStep === 4 && quoteType === 'glasses' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
                <FormSection title="Lens Configuration" step="4" runningCost={mockRunningCost}>
                    <div className="grid md:grid-cols-2 gap-6">
                    {LENS_CONFIG.map((item) => (
                        <QuoteItemCard key={item.id} {...item} />
                    ))}
                    </div>
                </FormSection>
                <div className="mt-8 flex justify-between items-center">
                    <button onClick={() => setStep(3)} className="group rounded-full w-16 h-16 flex items-center justify-center bg-slate-900 text-white shadow-xl shadow-blue-900/20 hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 ease-out cursor-pointer">
                        <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    </button>
                    <button onClick={() => setStep(5)} className="group rounded-full w-16 h-16 flex items-center justify-center bg-slate-900 text-white shadow-xl shadow-blue-900/20 hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 ease-out cursor-pointer">
                        <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                </div>
            </div>
            )}

            {/* STEP 5: ADD-ONS (GLASSES) */}
            {currentStep === 5 && quoteType === 'glasses' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
                <FormSection title="Extras & Add-Ons" step="5" runningCost={mockRunningCost}>
                    <div className="space-y-4">
                        {addOns.map((addon) => (
                            <div key={addon.id} className="bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-5 hover:border-blue-300 transition-all animate-in zoom-in-95 duration-300">
                                <div className="relative mb-4">
                                    <select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-blue-500 appearance-none shadow-sm">
                                        {ADDON_OPTIONS.map((opt) => <option key={opt}>{opt}</option>)}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-stretch">
                                    <div className="grid grid-cols-3 gap-3 flex-1">
                                        <input placeholder="Allowance" className="w-full bg-white border border-slate-200 rounded-lg px-3 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none shadow-sm text-center" />
                                        <input placeholder="Discount" className="w-full bg-white border border-slate-200 rounded-lg px-3 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none shadow-sm text-center" />
                                        <input placeholder="CoPay" className="w-full bg-white border border-slate-200 rounded-lg px-3 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none shadow-sm text-center" />
                                    </div>
                                    <button onClick={() => handleRemoveAddOn(addon.id)} className="bg-red-50 hover:bg-red-100 text-red-500 border border-red-100 rounded-lg px-4 flex items-center justify-center transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6">
                        <button onClick={handleAddAddOn} className="inline-flex items-center justify-center rounded-lg font-bold transition-all duration-300 ease-out active:scale-95 hover:scale-[1.02] bg-emerald-700 text-white hover:bg-emerald-800 px-6 py-3 shadow-lg shadow-emerald-900/20 text-sm">
                            + Add Add-On
                        </button>
                    </div>
                </FormSection>
                <div className="mt-8 flex justify-between items-center">
                    <button onClick={() => setStep(4)} className="group rounded-full w-16 h-16 flex items-center justify-center bg-slate-900 text-white shadow-xl shadow-blue-900/20 hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 ease-out cursor-pointer">
                        <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    </button>
                    <button onClick={() => setStep(6)} className="group rounded-full w-16 h-16 flex items-center justify-center bg-slate-900 text-white shadow-xl shadow-blue-900/20 hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 ease-out cursor-pointer">
                        <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                </div>
            </div>
            )}

            {/* FINAL STEP: REVIEW (SHARED) */}
            {((quoteType === 'glasses' && currentStep === 6) || (quoteType === 'contacts' && currentStep === 4)) && (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
                 <div className="bg-linear-to-br from-blue-800/90 to-slate-950 rounded-2xl p-8 shadow-2xl border border-blue-500/30 text-white relative overflow-hidden backdrop-blur-xl">
                    <div className="relative z-10">
                        <h2 className="text-xl font-bold text-white mb-6">Quote Summary</h2>
                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-sm md:text-base text-slate-200">
                                <span>Retail Total</span>
                                <span className="font-medium">$450.00</span>
                            </div>
                            <div className="flex justify-between text-sm md:text-base text-slate-200">
                                <span>Insurance Benefit</span>
                                <span className="text-emerald-400 font-medium">-$250.00</span>
                            </div>
                        </div>
                        <div className="h-px bg-white/10 my-6"></div>
                        <div className="flex justify-between items-center mb-8">
                             <span className="text-2xl font-bold text-white">Patient Owes</span>
                             <span className="text-2xl font-bold text-blue-400">$200.00</span>
                        </div>
                        <button className="w-full h-12 rounded-xl bg-white text-slate-900 font-bold text-base hover:bg-slate-100 transition-colors shadow-lg shadow-white/10">
                            Approve Quote
                        </button>
                    </div>
                </div>
                <div className="mt-8 flex justify-start">
                    <button onClick={() => setStep(currentStep - 1)} className="group rounded-full w-16 h-16 flex items-center justify-center bg-slate-900 text-white shadow-xl shadow-blue-900/20 hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 ease-out cursor-pointer">
                        <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    </button>
                </div>
             </div>
            )}

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}