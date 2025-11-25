import React, { useRef, useEffect } from "react";

interface TeamMemberRowProps {
  id: string; 
  name: string;
  email: string;
  role: string;
  initials: string;
  isOwner?: boolean;
  
  // Actions
  onRemove?: () => void; // Added this prop

  // Drag Props
  isDraggable?: boolean;
  onMouseDown: (e: React.MouseEvent) => void;
  onMouseUp: () => void;
  onDragStart: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  // Visual State
  isHolding: boolean; 
}

export function TeamMemberRow({ 
  id,
  name, 
  email, 
  role, 
  initials, 
  isOwner = false,
  onRemove, // Destructure new prop
  isDraggable,
  onMouseDown,
  onMouseUp,
  onDragStart,
  onDragOver,
  onDrop,
  isHolding
}: TeamMemberRowProps) {
  
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHolding && progressRef.current) {
        progressRef.current.style.transition = 'width 1s linear';
        progressRef.current.style.width = '100%';
    } else if (!isHolding && progressRef.current) {
        progressRef.current.style.transition = 'none';
        progressRef.current.style.width = '0%';
    }
  }, [isHolding]);

  return (
    <div 
        draggable={isDraggable}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp} 
        className={`relative group flex flex-col md:flex-row items-start md:items-center justify-between p-6 border-b border-slate-100 transition-all duration-200 select-none
            ${isDraggable ? 'cursor-move bg-slate-50 border-2 border-dashed border-slate-300 z-50 scale-[1.02] shadow-xl' : 'hover:bg-emerald-50/30 border-transparent'}
            ${isHolding && !isDraggable ? 'bg-slate-50' : ''}
        `}
    >
      {/* Background Progress Bar */}
      <div 
         ref={progressRef}
         className="absolute bottom-0 left-0 h-1 bg-emerald-500/50 pointer-events-none z-0" 
         style={{ width: '0%' }}
      />
      
      {/* LEFT: Avatar & Identity */}
      <div className="flex items-center gap-4 mb-4 md:mb-0 min-w-[30%] relative z-10 pointer-events-none">
        <div className={`h-12 w-12 rounded-2xl flex items-center justify-center text-sm font-bold shadow-sm border transition-transform duration-200 ${
            isOwner 
            ? "bg-slate-900 text-white border-slate-700" 
            : "bg-emerald-100 text-emerald-700 border-emerald-200"
        } ${isHolding ? 'scale-90' : 'scale-100'}`}>
            {initials}
        </div>
        
        <div>
            <h4 className="font-bold text-slate-900 text-base leading-tight mb-1">{name}</h4>
            <p className="text-sm text-slate-500 font-medium">{email}</p>
        </div>
      </div>

      {/* CENTER: Role Badge */}
      <div className="mb-4 md:mb-0 md:flex-1 relative z-10 pointer-events-none">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
            isOwner
            ? "bg-slate-100 text-slate-700 border-slate-200"
            : "bg-emerald-50 text-emerald-700 border-emerald-100"
        }`}>
            {role}
        </span>
      </div>

      {/* RIGHT: Actions */}
      <div className="flex items-center gap-3 w-full md:w-auto relative z-10" onMouseDown={(e) => e.stopPropagation()}>
         <button className="flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-bold text-slate-600 bg-white border border-slate-200 hover:border-emerald-300 hover:text-emerald-700 hover:shadow-sm transition-all shadow-[0_2px_5px_rgba(0,0,0,0.02)]">
            Manage Stores
         </button>
         
         <button 
            onClick={onRemove}
            className="flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-bold text-red-600 hover:bg-red-50 border border-transparent transition-colors"
         >
            Remove
         </button>
      </div>

      {/* Drag Hint */}
      {isDraggable && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 opacity-20 pointer-events-none">
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </div>
      )}

    </div>
  );
}