import React, { useState } from 'react';
import { Save, Lock, User, Bell, Shield, Mail, Camera, ChevronRight, KeyRound, Globe, Smartphone, LogOut, HelpCircle, Moon } from 'lucide-react';
import clsx from 'clsx';

type Tab = 'profile' | 'security' | 'notifications' | 'preferences';

export const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="bg-etheris-card border border-etheris-border rounded-2xl p-8 shadow-lg animate-fadeIn">
            <div className="flex items-center justify-between mb-8 border-b border-etheris-border pb-6">
              <div>
                <h2 className="text-xl font-bold text-etheris-primary mb-1 flex items-center gap-2 font-display">
                  Profile
                </h2>
                <p className="text-xs text-etheris-muted">Manage your public profile information.</p>
              </div>
              <button className="px-4 py-2 bg-etheris-card border border-etheris-border hover:bg-etheris-cardHover text-etheris-primary rounded-lg text-xs font-bold transition-all shadow-sm">
                 View Public Profile
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {/* Avatar Section */}
              <div className="flex items-center gap-6">
                <div className="relative group cursor-pointer shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-etheris-border group-hover:border-blue-500 transition-colors shadow-md">
                    <img src="https://picsum.photos/seed/arin/200" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[1px]">
                    <Camera size={20} className="text-white" />
                  </div>
                </div>
                <div>
                   <h3 className="text-etheris-primary font-bold text-lg">Alexander Munoz</h3>
                   <p className="text-etheris-muted text-sm mb-3">alexander.munoz@example.com</p>
                   <button className="text-xs border border-etheris-border bg-etheris-glass px-3 py-1.5 rounded-md text-etheris-primary hover:bg-etheris-cardHover transition-colors">
                      Change Photo
                   </button>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-6 max-w-2xl">
                <div className="border-t border-etheris-border pt-6">
                   <h3 className="text-sm font-bold text-etheris-primary mb-1 flex items-center gap-2">
                       <User size={14} /> Personal Information
                   </h3>
                   <p className="text-[10px] text-etheris-muted mb-5">Manage your basic profile information</p>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-etheris-secondary uppercase tracking-wider">First Name</label>
                        <input type="text" defaultValue="Alexander" className="w-full bg-etheris-dark border border-etheris-border rounded-xl px-4 py-2.5 text-sm text-etheris-primary focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all shadow-sm" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-etheris-secondary uppercase tracking-wider">Last Name</label>
                        <input type="text" defaultValue="Munoz" className="w-full bg-etheris-dark border border-etheris-border rounded-xl px-4 py-2.5 text-sm text-etheris-primary focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all shadow-sm" />
                      </div>
                    </div>
                    
                    <div className="space-y-5">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-etheris-secondary uppercase tracking-wider">Email Address</label>
                         <input type="email" defaultValue="alexander.munoz@example.com" className="w-full bg-etheris-dark border border-etheris-border rounded-xl px-4 py-2.5 text-sm text-etheris-primary focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all shadow-sm" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-etheris-secondary uppercase tracking-wider">Phone</label>
                        <div className="flex gap-3">
                           <div className="w-24 bg-etheris-dark border border-etheris-border rounded-xl px-3 py-2.5 text-sm text-etheris-primary flex items-center justify-between">
                              <span className="flex items-center gap-1">🇺🇸 +1</span>
                              <ChevronRight size={12} className="rotate-90 opacity-50"/>
                           </div>
                           <input type="text" placeholder="Enter your phone number" className="flex-1 bg-etheris-dark border border-etheris-border rounded-xl px-4 py-2.5 text-sm text-etheris-primary focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all shadow-sm" />
                        </div>
                      </div>
                    </div>
                </div>

                 <div className="border-t border-etheris-border pt-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                         <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-etheris-secondary uppercase tracking-wider">Country</label>
                            <div className="relative group">
                                <input type="text" defaultValue="United States" className="w-full bg-etheris-dark border border-etheris-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-etheris-primary focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all shadow-sm cursor-pointer" readOnly />
                                <ChevronRight size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-etheris-muted rotate-90" />
                                <span className="absolute left-4 top-1/2 -translate-y-1/2">🇺🇸</span>
                            </div>
                        </div>
                        <div className="space-y-1.5">
                             <label className="text-[10px] font-bold text-etheris-secondary uppercase tracking-wider">Date of Birth</label>
                             <input type="date" className="w-full bg-etheris-dark border border-etheris-border rounded-xl px-4 py-2.5 text-sm text-etheris-primary focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all shadow-sm [color-scheme:dark]" />
                        </div>
                     </div>
                 </div>

                <div className="pt-4 flex justify-end">
                    <button className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0">
                      <Save size={16} /> Save Changes
                    </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'security':
        return (
          <div className="bg-etheris-card border border-etheris-border rounded-2xl p-8 shadow-lg animate-fadeIn">
            <div className="mb-8 border-b border-etheris-border pb-6">
              <h2 className="text-xl font-bold text-etheris-primary mb-1 flex items-center gap-2 font-display">
                Security
              </h2>
              <p className="text-xs text-etheris-muted">Manage your password and security preferences.</p>
            </div>

            <div className="space-y-8 max-w-2xl">
               {/* Password Change */}
               <div className="space-y-5">
                   <h3 className="text-sm font-bold text-etheris-primary flex items-center gap-2">
                       <KeyRound size={16} className="text-orange-500" /> Change Password
                   </h3>
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-etheris-secondary uppercase tracking-wider">Current Password</label>
                        <div className="relative group">
                            <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-etheris-muted group-focus-within:text-orange-500 transition-colors" />
                            <input type="password" placeholder="••••••••" className="w-full bg-etheris-dark border border-etheris-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-etheris-primary focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all shadow-sm" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-etheris-secondary uppercase tracking-wider">New Password</label>
                            <div className="relative group">
                                <KeyRound size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-etheris-muted group-focus-within:text-orange-500 transition-colors" />
                                <input type="password" className="w-full bg-etheris-dark border border-etheris-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-etheris-primary focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all shadow-sm" />
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-etheris-secondary uppercase tracking-wider">Confirm Password</label>
                                <div className="relative group">
                                <KeyRound size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-etheris-muted group-focus-within:text-orange-500 transition-colors" />
                                <input type="password" className="w-full bg-etheris-dark border border-etheris-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-etheris-primary focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all shadow-sm" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                        <button className="text-xs text-blue-500 hover:text-blue-400 font-medium transition-colors hover:underline">
                            I forgot my password
                        </button>
                            <button className="px-5 py-2.5 border border-etheris-border bg-etheris-glass hover:bg-etheris-cardHover text-etheris-primary rounded-xl text-sm font-bold transition-all hover:border-orange-500/30">
                            Update Password
                        </button>
                    </div>
               </div>

               {/* 2FA Section - Moved from Sidebar */}
               <div className="pt-8 border-t border-etheris-border">
                  <div className="flex items-center justify-between group">
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                              <Shield size={20} />
                          </div>
                          <div>
                              <p className="text-base font-bold text-etheris-primary">Two-Factor Authentication</p>
                              <p className="text-xs text-etheris-muted">Add an extra layer of security to your account.</p>
                          </div>
                      </div>
                      <div className="relative inline-flex h-6 w-11 cursor-pointer rounded-full bg-gray-700 hover:bg-gray-600 transition-colors shadow-inner">
                          <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out mt-1 ml-1" />
                      </div>
                  </div>
               </div>
            </div>
          </div>
        );
      case 'notifications':
        return (
          <div className="bg-etheris-card border border-etheris-border rounded-2xl p-8 shadow-lg animate-fadeIn">
             <div className="mb-8 border-b border-etheris-border pb-6">
              <h2 className="text-xl font-bold text-etheris-primary mb-1 flex items-center gap-2 font-display">
                Notifications
              </h2>
              <p className="text-xs text-etheris-muted">Control how you receive updates and alerts.</p>
            </div>

            <div className="space-y-6 max-w-2xl">
                <div className="flex items-center justify-between group p-4 border border-etheris-border rounded-xl bg-etheris-glass hover:bg-etheris-cardHover transition-colors">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                            <Bell size={18} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-etheris-primary">Push Notifications</p>
                            <p className="text-[10px] text-etheris-muted">Receive notifications on your desktop</p>
                        </div>
                    </div>
                    <div className="relative inline-flex h-5 w-9 cursor-pointer rounded-full bg-blue-600 transition-colors shadow-inner">
                        <span className="translate-x-4 inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out mt-1 ml-1" />
                    </div>
                </div>

                <div className="flex items-center justify-between group p-4 border border-etheris-border rounded-xl bg-etheris-glass hover:bg-etheris-cardHover transition-colors">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                            <Mail size={18} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-etheris-primary">Email Digests</p>
                            <p className="text-[10px] text-etheris-muted">Weekly summary of your tasks and projects</p>
                        </div>
                    </div>
                     <div className="relative inline-flex h-5 w-9 cursor-pointer rounded-full bg-blue-600 transition-colors shadow-inner">
                        <span className="translate-x-4 inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out mt-1 ml-1" />
                    </div>
                </div>

                <div className="flex items-center justify-between group p-4 border border-etheris-border rounded-xl bg-etheris-glass hover:bg-etheris-cardHover transition-colors">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                            <Smartphone size={18} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-etheris-primary">SMS Alerts</p>
                            <p className="text-[10px] text-etheris-muted">Get critical alerts via text message</p>
                        </div>
                    </div>
                     <div className="relative inline-flex h-5 w-9 cursor-pointer rounded-full bg-gray-700 transition-colors shadow-inner">
                        <span className="translate-x-1 inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out mt-1 ml-1" />
                    </div>
                </div>
            </div>
          </div>
        );
      case 'preferences':
          return (
            <div className="bg-etheris-card border border-etheris-border rounded-2xl p-8 shadow-lg animate-fadeIn">
                <div className="mb-8 border-b border-etheris-border pb-6">
                <h2 className="text-xl font-bold text-etheris-primary mb-1 flex items-center gap-2 font-display">
                    Preferences
                </h2>
                <p className="text-xs text-etheris-muted">Customize your Etheris experience.</p>
                </div>

                <div className="space-y-6 max-w-2xl">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-etheris-secondary uppercase tracking-wider">Language</label>
                            <div className="relative">
                                <Globe size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-etheris-muted" />
                                <select className="w-full bg-etheris-dark border border-etheris-border rounded-xl pl-10 pr-8 py-2.5 text-sm text-etheris-primary focus:outline-none focus:border-blue-500/50 appearance-none cursor-pointer">
                                    <option>English (US)</option>
                                    <option>Spanish</option>
                                    <option>French</option>
                                </select>
                                <ChevronRight size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-etheris-muted rotate-90" />
                            </div>
                        </div>
                         <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-etheris-secondary uppercase tracking-wider">Timezone</label>
                             <div className="relative">
                                <select className="w-full bg-etheris-dark border border-etheris-border rounded-xl px-4 pr-8 py-2.5 text-sm text-etheris-primary focus:outline-none focus:border-blue-500/50 appearance-none cursor-pointer">
                                    <option>(GMT-06:00) Central Time (US & Canada)</option>
                                    <option>(GMT-08:00) Pacific Time (US & Canada)</option>
                                    <option>(GMT+00:00) London</option>
                                </select>
                                <ChevronRight size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-etheris-muted rotate-90" />
                            </div>
                        </div>
                     </div>
                     
                     <div className="pt-4 border-t border-etheris-border">
                        <label className="text-[10px] font-bold text-etheris-secondary uppercase tracking-wider mb-3 block">Theme Preference</label>
                        <div className="flex gap-4">
                            <button className="flex-1 p-4 bg-etheris-glass border border-blue-500/50 rounded-xl flex flex-col items-center gap-2 text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all">
                                <Moon size={24} />
                                <span className="text-xs font-bold">System Default</span>
                            </button>
                             <button className="flex-1 p-4 bg-etheris-dark border border-etheris-border rounded-xl flex flex-col items-center gap-2 text-etheris-muted hover:border-etheris-secondary transition-all">
                                <div className="w-6 h-6 rounded-full border-2 border-etheris-muted" />
                                <span className="text-xs font-medium">Light</span>
                            </button>
                             <button className="flex-1 p-4 bg-black border border-etheris-border rounded-xl flex flex-col items-center gap-2 text-etheris-muted hover:border-etheris-secondary transition-all">
                                <div className="w-6 h-6 rounded-full bg-gray-800 border-2 border-gray-700" />
                                <span className="text-xs font-medium">Dark</span>
                            </button>
                        </div>
                     </div>
                </div>
            </div>
          );
      default:
        return null;
    }
  };

  const NavItem = ({ id, label }: { id: Tab, label: string }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={clsx(
        "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 mb-1 flex items-center justify-between group",
        activeTab === id 
          ? "bg-orange-500/10 text-orange-500 shadow-sm border-l-2 border-orange-500" 
          : "text-etheris-muted hover:text-etheris-primary hover:bg-etheris-glass"
      )}
    >
      {label}
      {activeTab === id && <ChevronRight size={14} className="opacity-100" />}
    </button>
  );

  return (
    <div className="flex-1 h-full overflow-y-auto overflow-x-hidden bg-etheris-dark relative transition-colors duration-500">
        {/* Background Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        </div>

        <main className="relative z-10 p-8 max-w-[1400px] mx-auto animate-fadeIn h-full flex flex-col">
            <header className="mb-8">
                <div className="flex items-center text-etheris-muted text-xs font-medium mb-2 gap-2">
                    <span>Account</span>
                    <ChevronRight size={10} />
                    <span className="text-etheris-secondary">Settings</span>
                </div>
                <h1 className="text-3xl font-display font-bold text-etheris-primary">Settings</h1>
            </header>

            <div className="flex flex-col lg:flex-row gap-8 flex-1">
                {/* Left Sidebar Navigation */}
                <div className="w-full lg:w-64 flex-shrink-0">
                   <div className="bg-etheris-card border border-etheris-border rounded-2xl p-4 shadow-lg sticky top-8">
                      <div className="space-y-1">
                          <NavItem id="profile" label="Profile" />
                          <NavItem id="security" label="Security" />
                          <NavItem id="notifications" label="Notifications" />
                          <NavItem id="preferences" label="Preferences" />
                      </div>
                      
                      <div className="my-4 border-t border-etheris-border" />
                      
                      <div className="space-y-1">
                         <button className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-etheris-muted hover:text-etheris-primary hover:bg-etheris-glass transition-all duration-200 flex items-center gap-3">
                             <HelpCircle size={16} /> Help & Support
                         </button>
                         <button className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:text-red-500 hover:bg-red-500/10 transition-all duration-200 flex items-center gap-3">
                             <LogOut size={16} /> Sign Out
                         </button>
                      </div>
                   </div>
                </div>

                {/* Right Content Area */}
                <div className="flex-1">
                   {renderContent()}
                </div>
            </div>
        </main>
    </div>
  );
};