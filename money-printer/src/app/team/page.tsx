"use client";

import React, { useState, useRef } from "react";
import { AppHeader } from "@/components/ui/common/AppHeader";
import { Footer } from "@/components/ui/common/Footer";
import { TeamMemberRow } from "@/components/ui/team/TeamMemberRow";
import { AddUserModal } from "@/components/ui/team/AddUserModal";
import { ConfirmModal } from "@/components/ui/team/ConfirmModal";
import { StoreRow } from "@/components/ui/team/StoreRow";

// --- Types ---
interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: "Owner" | "Optician" | "Staff";
  initials: string;
}

interface Store {
  id: string;
  name: string;
  location: string;
}

const ROLE_PRIORITY: Record<string, number> = { "Owner": 0, "Optician": 1, "Staff": 2 };

export default function OrganizationPage() {
  const [activeTab, setActiveTab] = useState<"team" | "stores">("team");

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
     { id: '1', name: 'Justin Mason', email: 'justin@example.com', role: 'Owner', initials: 'JM'}
  ]);
  
  const [stores, setStores] = useState<Store[]>([
      { id: 'S-101', name: 'Pearle Vision Troy', location: 'Troy, MI' },
      { id: 'S-102', name: 'Clinton Township', location: 'Clinton Twp, MI' },
      { id: 'S-103', name: 'Downtown Detroit', location: 'Detroit, MI' },
  ]);

  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [userToRemove, setUserToRemove] = useState<string | null>(null);
  
  const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);
  const [draggableRowId, setDraggableRowId] = useState<string | null>(null); 
  const [holdingRowId, setHoldingRowId] = useState<string | null>(null);
  const holdTimerRef = useRef<NodeJS.Timeout | null>(null);

  const getInitials = (name: string) => name.split(' ').map(p => p[0]).join('').toUpperCase().slice(0, 2);
  const sortMembers = (members: TeamMember[]) => [...members].sort((a, b) => (ROLE_PRIORITY[a.role] ?? 99) - (ROLE_PRIORITY[b.role] ?? 99));

  const handleAddUser = (userData: { name: string; email: string; role: "Owner" | "Optician" | "Staff" }) => {
    const newUser: TeamMember = {
      id: Math.random().toString(36).substr(2, 9),
      name: userData.name,
      email: userData.email,
      role: userData.role,
      initials: getInitials(userData.name),
    };
    setTeamMembers((prev) => sortMembers([...prev, newUser]));
  };

  const initiateRemoveUser = (id: string) => {
    setUserToRemove(id);
    setIsConfirmOpen(true);
  };

  const confirmRemoveUser = () => {
    if (userToRemove) {
        setTeamMembers((prev) => prev.filter(m => m.id !== userToRemove));
    }
    setUserToRemove(null);
    setIsConfirmOpen(false);
  };

  const cancelRemoveUser = () => {
    setUserToRemove(null);
    setIsConfirmOpen(false);
  };

  const handleRowMouseDown = (id: string) => {
    setHoldingRowId(id);
    holdTimerRef.current = setTimeout(() => { setDraggableRowId(id); setHoldingRowId(null); if (navigator.vibrate) navigator.vibrate(50); }, 1000); 
  };

  const handleRowMouseUp = () => { if (holdTimerRef.current) clearTimeout(holdTimerRef.current); setHoldingRowId(null); };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedItemIndex(index);
    e.dataTransfer.effectAllowed = "move"; 
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault(); 
    if (draggedItemIndex === null || draggedItemIndex === index) return;

    const updatedList = [...teamMembers];
    const draggedItem = updatedList[draggedItemIndex];
    updatedList.splice(draggedItemIndex, 1);
    updatedList.splice(index, 0, draggedItem);

    setTeamMembers(updatedList);
    setDraggedItemIndex(index);
  };

  const handleDrop = () => {
    setDraggedItemIndex(null);
    setDraggableRowId(null); 
  };

  const handleAddStore = () => {
      const newStore = { id: `S-${Math.floor(Math.random()*1000)}`, name: 'New Location', location: 'Pending Address' };
      setStores([...stores, newStore]);
  };
  const handleDeleteStore = (id: string) => {
      setStores(stores.filter(s => s.id !== id));
  };

  return (
    // UPDATED: bg-[#effaf3] provides a visibly richer green tint
    <div className="min-h-screen flex flex-col bg-[#e5ffe7] font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <AppHeader />

      <main className="flex-1 container mx-auto px-4 py-12 lg:py-16 max-w-5xl relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
            <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
                    Organization Settings
                </h1>
                <p className="text-slate-500 font-medium text-lg max-w-xl">
                    Manage your team and store locations.
                </p>
                {activeTab === 'team' && (
                    <div className="mt-3">
                        <span className="inline-block text-emerald-600 text-[10px] font-bold uppercase tracking-wide bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100">
                                Tip: Hold 1s to reorder
                        </span>
                    </div>
                )}
            </div>
            
            <button 
                onClick={activeTab === 'team' ? () => setIsAddUserModalOpen(true) : handleAddStore}
                className={`group relative overflow-hidden rounded-full px-8 py-3 text-white shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer ${
                    activeTab === 'team' 
                    ? 'bg-emerald-700 shadow-emerald-900/20 hover:bg-emerald-800' 
                    : 'bg-purple-700 shadow-purple-900/20 hover:bg-purple-800'
                }`}
            >
                <div className="relative z-10 flex items-center gap-2 font-bold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                    <span>{activeTab === 'team' ? 'Add New User' : 'Add Location'}</span>
                </div>
            </button>
        </div>

        <div className="flex gap-1 bg-slate-100/50 p-1 rounded-xl w-fit mb-8 border border-slate-200">
            <button 
                onClick={() => setActiveTab('team')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                    activeTab === 'team' 
                    ? 'bg-white text-emerald-700 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                }`}
            >
                Team Members
            </button>
            <button 
                onClick={() => setActiveTab('stores')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                    activeTab === 'stores' 
                    ? 'bg-white text-purple-700 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                }`}
            >
                Store Locations
            </button>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col min-h-[400px]">
            
            <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row gap-6 justify-between items-center bg-white/40">
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 border ${
                        activeTab === 'team' ? 'bg-emerald-100 text-emerald-600 border-emerald-200' : 'bg-purple-100 text-purple-600 border-purple-200'
                    }`}>
                        {activeTab === 'team' ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m8-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2m-4 0h3.332q.516.002.951.353M16.29 18.067a2.002 2.002 0 012.043 1.933M9 10h6m-6 4h6m-6-8h6m-6 4h6" /></svg>
                        )}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">{activeTab === 'team' ? 'Team Members' : 'Active Locations'}</h3>
                        <p className={`text-xs font-bold uppercase tracking-wide ${activeTab === 'team' ? 'text-emerald-600' : 'text-purple-600'}`}>
                            {activeTab === 'team' ? `${teamMembers.length} Users` : `${stores.length} Stores Configured`}
                        </p>
                    </div>
                </div>

                <div className="relative w-full md:w-80">
                    <input 
                        type="text" 
                        placeholder={`Search ${activeTab === 'team' ? 'people' : 'locations'}...`}
                        className={`w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 transition-all shadow-sm ${
                            activeTab === 'team' ? 'focus:border-emerald-500 focus:ring-emerald-500/10' : 'focus:border-purple-500 focus:ring-purple-500/10'
                        }`}
                    />
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col min-h-[300px]">
                {activeTab === 'team' ? (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {teamMembers.map((member, index) => (
                            <TeamMemberRow 
                                key={member.id}
                                id={member.id}
                                name={member.name} 
                                email={member.email} 
                                role={member.role} 
                                initials={member.initials}
                                isOwner={member.role === 'Owner'}
                                isDraggable={draggableRowId === member.id}
                                isHolding={holdingRowId === member.id}
                                onMouseDown={() => handleRowMouseDown(member.id)}
                                onMouseUp={handleRowMouseUp}
                                onRemove={() => initiateRemoveUser(member.id)}
                                onDragStart={(e) => handleDragStart(e, index)}
                                onDragOver={(e) => handleDragOver(e, index)}
                                onDrop={handleDrop}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {stores.map((store) => (
                            <StoreRow 
                                key={store.id}
                                {...store}
                                onEdit={() => alert(`Edit ${store.name}`)}
                                onDelete={() => handleDeleteStore(store.id)}
                            />
                        ))}
                         {stores.length === 0 && <div className="p-12 text-center text-slate-500">No stores found.</div>}
                    </div>
                )}
            </div>

        </div>

      </main>
      <Footer />
      
      <AddUserModal isOpen={isAddUserModalOpen} onClose={() => setIsAddUserModalOpen(false)} onAdd={handleAddUser} />
      
      <ConfirmModal 
        isOpen={isConfirmOpen}
        title="Remove Team Member?"
        message="Are you sure you want to remove this user? They will lose access to all assigned stores immediately. This action cannot be undone."
        confirmText="Remove User"
        isDestructive={true}
        onConfirm={confirmRemoveUser}
        onCancel={cancelRemoveUser}
      />
      
    </div>
  );
}