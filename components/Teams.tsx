import React, { useState } from 'react';
import { Search, Filter, Plus, UserPlus, MoreHorizontal, X, Mail, Phone, Briefcase, User, MapPin } from 'lucide-react';
import { MemberCard } from './MemberCard';
import { MEMBERS } from '../data';
import { TeamMember } from '../types';
import clsx from 'clsx';

export const Teams: React.FC = () => {
  // Initialize state with duplicated members for demo purposes
  const [members, setMembers] = useState<TeamMember[]>([...MEMBERS, ...MEMBERS, ...MEMBERS]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMember, setNewMember] = useState<{
    name: string;
    role: string;
    department: string;
    email: string;
    phone: string;
    status: 'Remote' | 'Active' | 'Part-time';
  }>({
    name: '',
    role: '',
    department: '',
    email: '',
    phone: '',
    status: 'Active'
  });

  const handleAddMember = () => {
    if (!newMember.name || !newMember.email) return;

    const member: TeamMember = {
        id: Math.random().toString(36).substr(2, 9),
        name: newMember.name,
        role: newMember.role || 'Team Member',
        department: newMember.department || 'General',
        email: newMember.email,
        phone: newMember.phone || '+1 555 000 0000',
        status: newMember.status,
        joined: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        avatar: `https://picsum.photos/seed/${Math.random()}/200` // Random avatar
    };

    setMembers(prev => [member, ...prev]);
    setIsModalOpen(false);
    // Reset form
    setNewMember({
        name: '',
        role: '',
        department: '',
        email: '',
        phone: '',
        status: 'Active'
    });
  };

  return (
    <div className="flex-1 h-full overflow-y-auto overflow-x-hidden bg-etheris-dark relative transition-colors duration-500 flex flex-col">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <main className="relative z-10 p-8 w-full animate-fadeIn flex-1">
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-display font-bold text-etheris-primary mb-2">Teams</h1>
            <p className="text-etheris-muted text-sm">Manage your team members and permissions.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="Search members..." 
                className="bg-etheris-card border border-etheris-border rounded-xl py-2 pl-9 pr-4 text-sm text-etheris-primary focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all w-64"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-etheris-border text-etheris-secondary hover:text-etheris-primary hover:bg-etheris-card transition-all text-sm font-medium">
              <Filter size={16} /> Filter
            </button>
            <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-etheris-primary text-etheris-dark hover:opacity-90 transition-all text-sm font-bold shadow-lg shadow-blue-500/10"
            >
              <UserPlus size={16} /> Add Member
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 pb-8">
          {members.map((member, idx) => (
            <div key={`${member.id}-${idx}`} className="relative">
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-etheris-muted hover:text-etheris-primary"><MoreHorizontal size={16} /></button>
                </div>
                <MemberCard member={member} delay={idx * 50} />
            </div>
          ))}
          
          {/* Add New Card Placeholder */}
          <div 
            onClick={() => setIsModalOpen(true)}
            className="border border-dashed border-etheris-border rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-pointer group min-h-[180px] animate-fadeIn" 
            style={{ animationDelay: '400ms' }}
          >
            <div className="w-12 h-12 rounded-full bg-etheris-card border border-etheris-border flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm group-hover:border-blue-500/30">
              <Plus size={24} className="text-etheris-muted group-hover:text-blue-500" />
            </div>
            <h4 className="text-sm font-medium text-etheris-primary mb-1">Add Team Member</h4>
            <p className="text-xs text-etheris-muted">Invite via email</p>
          </div>
        </div>
      </main>

      {/* Add Member Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
            <div className="relative w-full max-w-lg bg-etheris-card border border-etheris-border rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
                {/* Header */}
                <div className="px-6 py-4 border-b border-etheris-border flex items-center justify-between">
                    <h2 className="text-lg font-bold text-etheris-primary">Add Team Member</h2>
                    <button onClick={() => setIsModalOpen(false)} className="text-etheris-muted hover:text-etheris-primary transition-colors">
                        <X size={20} />
                    </button>
                </div>
                
                {/* Body */}
                <div className="p-6 space-y-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-etheris-secondary uppercase tracking-wider flex items-center gap-2">
                            <User size={12} /> Full Name
                        </label>
                        <input 
                            type="text" 
                            value={newMember.name}
                            onChange={e => setNewMember({...newMember, name: e.target.value})}
                            placeholder="e.g., Sarah Connor" 
                            className="w-full bg-etheris-dark border border-etheris-border rounded-xl px-4 py-2.5 text-sm text-etheris-primary focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-gray-600"
                            autoFocus 
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Role */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-etheris-secondary uppercase tracking-wider flex items-center gap-2">
                                <Briefcase size={12} /> Role
                            </label>
                            <input 
                                type="text" 
                                value={newMember.role}
                                onChange={e => setNewMember({...newMember, role: e.target.value})}
                                placeholder="e.g., UX Designer" 
                                className="w-full bg-etheris-dark border border-etheris-border rounded-xl px-4 py-2.5 text-sm text-etheris-primary focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-gray-600"
                            />
                        </div>
                        {/* Department */}
                         <div className="space-y-1.5">
                            <label className="text-xs font-bold text-etheris-secondary uppercase tracking-wider flex items-center gap-2">
                                <Briefcase size={12} /> Department
                            </label>
                            <input 
                                type="text" 
                                value={newMember.department}
                                onChange={e => setNewMember({...newMember, department: e.target.value})}
                                placeholder="e.g., Product" 
                                className="w-full bg-etheris-dark border border-etheris-border rounded-xl px-4 py-2.5 text-sm text-etheris-primary focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-gray-600"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-etheris-secondary uppercase tracking-wider flex items-center gap-2">
                            <Mail size={12} /> Email Address
                        </label>
                        <input 
                            type="email" 
                            value={newMember.email}
                            onChange={e => setNewMember({...newMember, email: e.target.value})}
                            placeholder="e.g., sarah@etherisapp.com" 
                            className="w-full bg-etheris-dark border border-etheris-border rounded-xl px-4 py-2.5 text-sm text-etheris-primary focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-gray-600"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Phone */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-etheris-secondary uppercase tracking-wider flex items-center gap-2">
                                <Phone size={12} /> Phone
                            </label>
                            <input 
                                type="text" 
                                value={newMember.phone}
                                onChange={e => setNewMember({...newMember, phone: e.target.value})}
                                placeholder="+1 555..." 
                                className="w-full bg-etheris-dark border border-etheris-border rounded-xl px-4 py-2.5 text-sm text-etheris-primary focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-gray-600"
                            />
                        </div>

                        {/* Status */}
                        <div className="space-y-1.5">
                             <label className="text-xs font-bold text-etheris-secondary uppercase tracking-wider flex items-center gap-2">
                                <MapPin size={12} /> Status
                            </label>
                            <select 
                                value={newMember.status}
                                onChange={e => setNewMember({...newMember, status: e.target.value as any})}
                                className="w-full bg-etheris-dark border border-etheris-border rounded-xl px-4 py-2.5 text-sm text-etheris-primary focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all appearance-none cursor-pointer"
                            >
                                <option value="Active">Active</option>
                                <option value="Remote">Remote</option>
                                <option value="Part-time">Part-time</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-etheris-border bg-etheris-dark/50 flex justify-end gap-3">
                    <button 
                        onClick={() => setIsModalOpen(false)}
                        className="px-4 py-2 rounded-xl text-sm font-medium text-etheris-muted hover:text-etheris-primary transition-colors"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={handleAddMember}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-600/20 transition-all"
                    >
                        Add Member
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};