import React from 'react';
import { 
  Home, Users, Calendar, CheckSquare, Layers, Puzzle, 
  Settings, HelpCircle, BookOpen, UploadCloud, Search,
  Plus, MoreVertical, Moon, Sun, Briefcase, Zap, Activity, Heart,
  GripVertical, Gamepad2, GalleryVerticalEnd
} from 'lucide-react';
import clsx from 'clsx';
import { ViewState } from '../App';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  hasSubmenu?: boolean;
  iconColor?: string; // Class for the background of the icon container
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, active, hasSubmenu, iconColor, onClick }) => (
  <div 
    onClick={onClick}
    className={clsx(
      "flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 group mb-1",
      active 
        ? "bg-etheris-active text-etheris-primary shadow-lg backdrop-blur-sm border border-etheris-border" 
        : "text-etheris-muted hover:text-etheris-primary hover:bg-etheris-glass"
    )}
  >
    <div className="flex items-center gap-3 overflow-hidden">
      {iconColor ? (
        <div className={clsx(
            "w-6 h-6 rounded-md flex items-center justify-center text-white shadow-md",
            "transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:shadow-lg",
            iconColor
        )}>
           <Icon size={12} strokeWidth={3} />
        </div>
      ) : (
        <div className="relative flex items-center justify-center w-[18px] h-[18px]">
            <Icon 
                size={18} 
                className={clsx(
                    "transition-all duration-300 cubic-bezier(0.34, 1.56, 0.64, 1)", 
                    active ? "text-blue-400 scale-110" : "group-hover:text-blue-400 group-hover:scale-110 group-hover:-translate-y-[1px]"
                )} 
            />
        </div>
      )}
      <span className={clsx(
          "text-sm font-medium transition-all duration-300",
          !active && "group-hover:translate-x-1"
      )}>{label}</span>
    </div>
    {hasSubmenu && <MoreVertical size={14} className="opacity-0 group-hover:opacity-50 transition-opacity duration-300" />}
  </div>
);

const SectionHeader: React.FC<{ title: string; onAdd?: () => void }> = ({ title, onAdd }) => (
  <div className="flex items-center justify-between px-3 mt-6 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
    <span>{title}</span>
    {onAdd && (
      <button className="text-gray-500 hover:text-etheris-primary transition-colors hover:bg-etheris-glass rounded p-0.5">
        <Plus size={14} />
      </button>
    )}
  </div>
);

// Custom Brand Icons for the "Other Apps" section
const BrandIcon: React.FC<{ type: 'roblox' | 'slack' | 'discord' | 'linear' }> = ({ type }) => {
  return (
    <div className="w-9 h-9 rounded-full bg-etheris-glass border border-etheris-border flex items-center justify-center hover:bg-etheris-active hover:border-blue-500/30 transition-all cursor-pointer group relative overflow-hidden">
        {type === 'roblox' && (
            // Custom shape for Roblox-like icon
            <div className="relative w-4 h-4 bg-gray-700 dark:bg-gray-800 rounded-[2px] transform rotate-[15deg] group-hover:rotate-[25deg] transition-transform duration-300 overflow-hidden border border-blue-500/50">
                <div className="absolute inset-0 bg-blue-500 opacity-80" />
                <div className="absolute inset-0 m-auto w-1.5 h-1.5 bg-etheris-dark rounded-[1px]" />
            </div>
        )}
        {type === 'slack' && (
             // Custom SVG for Slack
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform">
                <path d="M5 15a2 2 0 1 0 2 2v-2H5zm3 0h2a2 2 0 0 0 2-2v-3H7v5z" fill="#E01E5A"/>
                <path d="M10 2a2 2 0 1 0-2 2h2V2zm0 3v2a2 2 0 0 0 2 2h3V7h-5z" fill="#36C5F0"/>
                <path d="M19 9a2 2 0 1 0-2-2v2h2zm-3 0h-2a2 2 0 0 0-2 2v3h5V9z" fill="#2EB67D"/>
                <path d="M14 22a2 2 0 1 0 2-2h-2v2zm0-3v-2a2 2 0 0 0-2-2H9v5h5z" fill="#ECB22E"/>
             </svg>
        )}
        {type === 'discord' && (
            <Gamepad2 size={18} className="text-[#5865F2] group-hover:scale-110 transition-transform duration-300" />
        )}
        {type === 'linear' && (
            <GalleryVerticalEnd size={16} className="text-[#5E6AD2] group-hover:scale-110 transition-transform duration-300" />
        )}
    </div>
  )
}

interface SidebarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ theme, toggleTheme, currentView, onChangeView }) => {
  return (
    <div className="w-64 h-full bg-etheris-dark border-r border-etheris-border flex flex-col flex-shrink-0 z-20 transition-colors duration-500">
      {/* Header */}
      <div className="p-5 pb-0">
        <div 
          className="flex items-center gap-3 mb-6 group cursor-pointer"
          onClick={() => onChangeView('dashboard')}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20 transition-transform duration-500 group-hover:rotate-180">
            <Layers size={18} className="text-white" />
          </div>
          <div>
            <h1 className="text-base font-bold text-etheris-primary leading-none font-display tracking-tight group-hover:text-blue-400 transition-colors">Etheris</h1>
            <span className="text-[10px] text-etheris-muted font-medium">Professional Plus</span>
          </div>
          <button className="ml-auto text-etheris-muted hover:text-etheris-primary transition-transform hover:rotate-90 duration-200">
            <MoreVertical size={16} />
          </button>
        </div>

        <div className="relative mb-6 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={16} />
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full bg-etheris-card border border-etheris-border rounded-xl py-2 pl-9 pr-3 text-sm text-etheris-secondary placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Scrollable Nav */}
      <div className="flex-1 overflow-y-auto px-3 pb-4 scrollbar-hide">
        <SectionHeader title="Essentials" />
        <SidebarItem icon={Home} label="Home" active={currentView === 'dashboard'} onClick={() => onChangeView('dashboard')} />
        <SidebarItem icon={Users} label="Teams" active={currentView === 'teams'} onClick={() => onChangeView('teams')} />
        <SidebarItem icon={CheckSquare} label="Tasks" active={currentView === 'tasks'} onClick={() => onChangeView('tasks')} />
        <SidebarItem icon={Calendar} label="Calendar" active={currentView === 'calendar'} onClick={() => onChangeView('calendar')} />
        <SidebarItem icon={Layers} label="Pipelines" active={currentView === 'pipelines'} onClick={() => onChangeView('pipelines')} />
        <SidebarItem icon={Puzzle} label="Plugins" active={currentView === 'plugins'} onClick={() => onChangeView('plugins')} />

        <SectionHeader title="Projects" onAdd={() => {}} />
        <SidebarItem icon={Briefcase} label="Project Plus" iconColor="bg-gradient-to-br from-red-500 to-rose-600" />
        <SidebarItem icon={Zap} label="Nimbus" iconColor="bg-gradient-to-br from-orange-500 to-amber-600" />
        <SidebarItem icon={Activity} label="TaskWave" iconColor="bg-gradient-to-br from-blue-500 to-cyan-600" />
        <SidebarItem icon={Heart} label="Taskly" iconColor="bg-gradient-to-br from-pink-500 to-purple-600" />

        <SectionHeader title="Support" onAdd={() => {}} />
        <SidebarItem icon={Settings} label="Settings" active={currentView === 'settings'} onClick={() => onChangeView('settings')} />
        <SidebarItem icon={UploadCloud} label="Releases" />
        <SidebarItem icon={BookOpen} label="Tutorials" />
        <SidebarItem icon={HelpCircle} label="Help" />
      </div>

      {/* Footer / Other Apps */}
      <div className="p-4 border-t border-etheris-border bg-etheris-dark transition-colors duration-500">
        <SectionHeader title="Other Apps" />
        <div className="flex items-center gap-2 mt-3 mb-6 px-1">
          <BrandIcon type="roblox" />
          <BrandIcon type="slack" />
          <BrandIcon type="discord" />
          <BrandIcon type="linear" />
          
          <div className="h-5 w-px bg-etheris-border mx-1" />
          
          <button className="text-etheris-muted hover:text-etheris-primary transition-colors p-1.5 hover:bg-etheris-glass rounded-md">
            <Plus size={16} />
          </button>
          <button className="text-etheris-muted hover:text-etheris-primary transition-colors cursor-grab p-1.5 hover:bg-etheris-glass rounded-md">
            <GripVertical size={16} />
          </button>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-etheris-muted font-medium ml-1">Appearances</span>
          <div className="flex bg-etheris-card border border-etheris-border rounded-full p-1 shadow-inner items-center relative transition-colors duration-300">
            {/* Sliding background could go here for extra polish, but simple active states work well */}
            <button 
                onClick={() => theme === 'light' && toggleTheme()}
                className={clsx(
                    "p-1 rounded-full transition-all duration-300",
                    theme === 'dark' ? "text-blue-400 bg-etheris-active shadow-sm" : "text-etheris-muted hover:text-etheris-primary"
                )}
            >
              <Moon size={14} />
            </button>
            <button 
                onClick={() => theme === 'dark' && toggleTheme()}
                className={clsx(
                    "p-1 rounded-full transition-all duration-300",
                    theme === 'light' ? "text-yellow-500 bg-white shadow-sm ring-1 ring-black/5" : "text-etheris-muted hover:text-etheris-primary"
                )}
            >
              <Sun size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};