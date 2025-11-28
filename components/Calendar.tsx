import React from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock } from 'lucide-react';
import clsx from 'clsx';

export const Calendar: React.FC = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  // Mock calendar days generator
  const dates = Array.from({ length: 35 }, (_, i) => {
    const day = i - 2; // Offset to start month correctly visually
    return day > 0 && day <= 30 ? day : null;
  });

  return (
    <div className="flex-1 h-full overflow-y-auto bg-etheris-dark relative transition-colors duration-500 flex flex-col">
       <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute bottom-0 left-[10%] w-[600px] h-[400px] bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <header className="relative z-10 px-8 py-6 border-b border-etheris-border flex items-center justify-between animate-fadeIn shrink-0">
         <div className="flex items-center gap-4">
             <h1 className="text-2xl font-display font-bold text-etheris-primary">September 2025</h1>
             <div className="flex items-center gap-1 bg-etheris-card border border-etheris-border rounded-lg p-1">
                 <button className="p-1 text-etheris-muted hover:text-etheris-primary hover:bg-etheris-glass rounded"><ChevronLeft size={16} /></button>
                 <button className="p-1 text-etheris-muted hover:text-etheris-primary hover:bg-etheris-glass rounded"><ChevronRight size={16} /></button>
             </div>
         </div>
         <div className="flex gap-3">
             <button className="px-3 py-1.5 text-xs font-medium bg-etheris-card border border-etheris-border rounded-lg text-etheris-primary">Month</button>
             <button className="px-3 py-1.5 text-xs font-medium text-etheris-muted hover:text-etheris-primary">Week</button>
             <button className="px-3 py-1.5 text-xs font-medium text-etheris-muted hover:text-etheris-primary">Day</button>
         </div>
      </header>

      <div className="flex-1 p-8 overflow-hidden flex flex-col animate-fadeIn" style={{ animationDelay: '100ms' }}>
         <div className="grid grid-cols-7 mb-4">
             {days.map(day => (
                 <div key={day} className="text-center text-xs font-bold text-etheris-secondary uppercase tracking-wider">{day}</div>
             ))}
         </div>
         <div className="flex-1 grid grid-cols-7 grid-rows-5 gap-px bg-etheris-border rounded-xl overflow-hidden border border-etheris-border">
             {dates.map((date, i) => (
                 <div key={i} className={clsx("bg-etheris-dark p-3 relative group transition-colors hover:bg-etheris-card", !date && "bg-etheris-card/30")}>
                     {date && (
                         <>
                            <span className={clsx(
                                "text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full mb-2",
                                date === 14 ? "bg-blue-600 text-white shadow-lg shadow-blue-600/40" : "text-etheris-secondary"
                            )}>
                                {date}
                            </span>
                            
                            {/* Mock Events */}
                            {date === 8 && (
                                <div className="p-1.5 rounded-md bg-orange-500/10 border-l-2 border-orange-500 mb-1">
                                    <p className="text-[10px] font-bold text-orange-500 truncate">Sprint Review</p>
                                    <p className="text-[9px] text-etheris-muted flex items-center gap-1"><Clock size={8} /> 10:00 AM</p>
                                </div>
                            )}
                            {date === 14 && (
                                <div className="p-1.5 rounded-md bg-blue-500/10 border-l-2 border-blue-500 mb-1">
                                    <p className="text-[10px] font-bold text-blue-500 truncate">Product Launch</p>
                                    <p className="text-[9px] text-etheris-muted flex items-center gap-1"><Clock size={8} /> 2:00 PM</p>
                                </div>
                            )}
                             {date === 22 && (
                                <div className="p-1.5 rounded-md bg-emerald-500/10 border-l-2 border-emerald-500 mb-1">
                                    <p className="text-[10px] font-bold text-emerald-500 truncate">Team Retreat</p>
                                    <p className="text-[9px] text-etheris-muted flex items-center gap-1"><Clock size={8} /> All Day</p>
                                </div>
                            )}
                         </>
                     )}
                 </div>
             ))}
         </div>
      </div>
    </div>
  );
};