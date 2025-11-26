import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
}

export function Button({ 
  className = "", 
  variant = "primary", 
  size = "md", 
  ...props 
}: ButtonProps) {
  
  // UPDATED: Changed 'rounded-full' to 'rounded-lg' for the "rounded but more rectangle" look
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-bold transition-all duration-300 ease-out active:scale-90";
  
  const hoverEffects = "hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)]";

  const variants = {
    primary: "bg-slate-900 text-white border border-slate-900 hover:bg-slate-800 hover:border-slate-700",
    secondary: "bg-white text-slate-900 border border-white hover:bg-blue-50",
    outline: "bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900",
    gradient: "bg-gradient-to-r from-blue-800 to-purple-700 text-white border-none hover:brightness-125 shadow-lg shadow-purple-900/20",
  };

  const sizes = {
    sm: "h-9 px-4 text-xs",
    md: "h-11 px-6 text-sm", // Adjusted px slightly for rect shape
    lg: "h-14 px-8 text-base",
  };

  const combinedClassName = `
    ${baseStyles} 
    ${hoverEffects} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${className}
  `;

  return (
    <button className={combinedClassName.trim()} {...props} />
  );
}