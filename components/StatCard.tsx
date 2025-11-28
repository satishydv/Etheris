import React from 'react';
import { ResponsiveContainer, LineChart, Line, RadialBarChart, RadialBar } from 'recharts';
import { ArrowUpRight, CheckCircle2, Circle } from 'lucide-react';
import clsx from 'clsx';

const LINE_DATA = [
  { val: 30 }, { val: 45 }, { val: 35 }, { val: 60 }, { val: 55 }, { val: 80 }, { val: 76 }
];

const RADIAL_DATA = [
  { name: 'L1', value: 100, fill: 'var(--bg-card-hover)' }, // Track
  { name: 'L2', value: 38, fill: '#3b82f6' }   // Value
];

interface StatCardProps {
  title: string;
  value: string;
  type: 'line' | 'streak' | 'radial';
  change: string;
  delay?: number;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, type, change, delay = 0 }) => {
  return (
    <div 
      className="bg-etheris-card border border-etheris-border rounded-2xl p-5 relative overflow-hidden group hover:border-gray-500/50 transition-all duration-300 flex flex-col justify-between h-48 animate-fadeIn opacity-0 fill-mode-forwards shadow-lg hover:shadow-xl"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background Gradients & Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        
        {/* Card 1: Blue Glow */}
        {type === 'line' && (
            <>
               <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#3b82f6]/10 via-[#3b82f6]/5 to-transparent" />
               <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent opacity-50" />
               {/* Ticks Pattern */}
               <div className="absolute bottom-0 left-0 right-0 h-3 bg-[repeating-linear-gradient(90deg,rgba(59,130,246,0.3)_0px,rgba(59,130,246,0.3)_1px,transparent_1px,transparent_10px)] opacity-60 mask-image-gradient-b" />
               {/* Center highlight */}
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#3b82f6] blur-[2px] opacity-40" />
            </>
        )}

        {/* Card 2: Orange Glow */}
        {type === 'streak' && (
            <>
               <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#f97316]/10 via-[#f97316]/5 to-transparent" />
               <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#f97316] to-transparent opacity-50" />
               {/* Ticks Pattern */}
               <div className="absolute bottom-0 left-0 right-0 h-3 bg-[repeating-linear-gradient(90deg,rgba(249,115,22,0.3)_0px,rgba(249,115,22,0.3)_1px,transparent_1px,transparent_10px)] opacity-60" />
               {/* Center highlight */}
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#f97316] blur-[2px] opacity-40" />
            </>
        )}

        {/* Card 3: Blue/Cyan Glow */}
        {type === 'radial' && (
            <>
               <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0ea5e9]/10 via-[#0ea5e9]/5 to-transparent" />
               <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0ea5e9] to-transparent opacity-50" />
               {/* Ticks Pattern */}
               <div className="absolute bottom-0 left-0 right-0 h-3 bg-[repeating-linear-gradient(90deg,rgba(14,165,233,0.3)_0px,rgba(14,165,233,0.3)_1px,transparent_1px,transparent_10px)] opacity-60" />
               {/* Center highlight */}
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#0ea5e9] blur-[2px] opacity-40" />
            </>
        )}
      </div>

      {/* Header */}
      <div className="flex justify-between items-start z-10 relative">
        <div>
          <h3 className="text-etheris-muted text-sm font-medium mb-1">{title}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-etheris-primary font-display">{value}</span>
            <div className={clsx(
                "flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-bold border backdrop-blur-sm",
                type === 'line' ? "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" : "",
                type === 'streak' ? "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" : "",
                type === 'radial' ? "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" : ""
            )}>
              <ArrowUpRight size={10} className="mr-0.5" />
              {change}
            </div>
          </div>
        </div>
        <button className="text-xs text-etheris-muted hover:text-etheris-primary border border-etheris-border hover:border-gray-500/50 bg-etheris-glass backdrop-blur-md px-2 py-1 rounded-lg transition-all shadow-sm">
          View Details
        </button>
      </div>

      {/* Visual Content */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {type === 'line' && (
          <div className="w-full h-full pt-16 px-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={LINE_DATA}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Line 
                  type="monotone" 
                  dataKey="val" 
                  stroke="#3b82f6" 
                  strokeWidth={2} 
                  dot={{ r: 0 }}
                  activeDot={{ r: 4, fill: '#60a5fa', stroke: '#fff', strokeWidth: 2 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
        
        {type === 'streak' && (
          <div className="absolute bottom-6 left-5 right-5">
             <div className="flex justify-between text-[10px] text-etheris-muted mb-2 font-mono uppercase tracking-wider">
               <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
             </div>
             <div className="flex justify-between">
                {[1, 1, 1, 1, 1, 0, 0].map((active, i) => (
                  <div key={i} className={clsx(
                    "w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-500 relative z-10",
                    active 
                      ? "bg-gradient-to-br from-orange-500 to-amber-600 border-transparent shadow-[0_0_10px_rgba(249,115,22,0.4)]" 
                      : "bg-transparent border-etheris-border text-etheris-muted"
                  )}>
                    {active ? <CheckCircle2 size={12} className="text-white" /> : <Circle size={12} />}
                  </div>
                ))}
             </div>
          </div>
        )}

        {type === 'radial' && (
          <div className="absolute right-[-10px] bottom-[-20px] w-32 h-32">
             <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart 
                cx="50%" 
                cy="50%" 
                innerRadius="60%" 
                outerRadius="100%" 
                barSize={10} 
                data={RADIAL_DATA}
                startAngle={90}
                endAngle={-270}
              >
                <RadialBar
                  background
                  dataKey="value"
                  cornerRadius={10}
                />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_15px_2px_rgba(6,182,212,0.6)]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};