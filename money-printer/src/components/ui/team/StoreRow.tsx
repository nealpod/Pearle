import React from "react";

interface StoreRowProps {
  name: string;
  location: string;
  id: string;
  onEdit: () => void;
  onDelete: () => void;
}

export function StoreRow({ name, location, id, onEdit, onDelete }: StoreRowProps) {
  return (
    <div className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 border-b border-slate-100 hover:bg-purple-50/30 transition-colors last:border-0">
      
      {/* LEFT: Store Icon & Info */}
      <div className="flex items-center gap-4 mb-4 md:mb-0 min-w-[30%]">
        <div className="h-12 w-12 rounded-2xl bg-purple-100 text-purple-600 border border-purple-200 flex items-center justify-center shrink-0">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m8-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2m-4 0h3.332q.516.002.951.353M16.29 18.067a2.002 2.002 0 012.043 1.933M9 10h6m-6 4h6m-6-8h6m-6 4h6" /></svg>
        </div>
        <div>
            <h4 className="font-bold text-slate-900 text-base leading-tight mb-1">{name}</h4>
            <p className="text-sm text-slate-500 font-medium">{location}</p>
        </div>
      </div>

      {/* CENTER: ID Badge */}
      <div className="mb-4 md:mb-0 md:flex-1">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-wider border border-slate-200">
            Store ID: <span className="text-slate-900">{id}</span>
        </span>
      </div>

      {/* RIGHT: Actions */}
      <div className="flex items-center gap-3 w-full md:w-auto">
         <button onClick={onEdit} className="flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-bold text-slate-600 bg-white border border-slate-200 hover:border-purple-300 hover:text-purple-700 hover:shadow-sm transition-all">
            Edit Details
         </button>
         <button onClick={onDelete} className="flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-bold text-red-600 hover:bg-red-50 border border-transparent transition-colors">
            Delete
         </button>
      </div>

    </div>
  );
}