import React from "react";

interface FormSectionProps {
  title: string;
  step: string | number;
  children: React.ReactNode;
  className?: string;
  runningCost?: number;
}

export function FormSection({ title, step, children, className = "", runningCost }: FormSectionProps) {
  
  // 1. Clamp negative numbers to 0
  const effectiveCost = runningCost !== undefined ? Math.max(0, runningCost) : undefined;

  // 2. Format as currency
  const formattedCost = effectiveCost !== undefined 
    ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(effectiveCost)
    : null;

  // 3. Color Logic:
  // - Positive (> 0) = Green
  // - Zero or Negative (Clamped to 0) = Gray
  const costColorClass = 
    effectiveCost !== undefined && effectiveCost > 0 
      ? "text-emerald-600" 
      : "text-slate-400";

  return (
    <section className={`bg-white border border-slate-200 rounded-2xl p-6 shadow-sm ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
            {step}
          </span>
          {title}
        </h2>

        {/* Running Cost Indicator */}
        {effectiveCost !== undefined && (
          <div className={`text-lg font-extrabold ${costColorClass}`}>
            {formattedCost}
          </div>
        )}
      </div>
      {children}
    </section>
  );
}