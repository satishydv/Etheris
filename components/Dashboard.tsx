import React from 'react';
import { Plus, Layout, ArrowRight } from 'lucide-react';
import { StatCard } from './StatCard';
import { TaskCard } from './TaskCard';
import { MemberCard } from './MemberCard';
import { TASKS, MEMBERS } from '../data';

export const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 h-full overflow-y-auto overflow-x-hidden bg-etheris-dark relative transition-colors duration-500">
        
        {/* Ambient Glows (Subtle, without the sharp rays) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
             {/* Left Ambient Glow */}
            <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Right Ambient Glow */}
            <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
        </div>

        <main className="relative z-10 p-8 max-w-[1600px] mx-auto">
            {/* Header */}
            <header className="flex items-end justify-between mb-10 animate-fadeIn">
                <div>
                    <div className="flex items-center text-etheris-muted text-xs font-medium mb-2 gap-2">
                        <span>Overview</span>
                        <span className="w-1 h-1 bg-gray-600 rounded-full" />
                        <span className="text-etheris-secondary">Dashboard</span>
                    </div>
                    <h1 className="text-4xl font-display font-bold text-etheris-primary mb-2 transition-colors duration-300">Hello, Satish</h1>
                    <p className="text-etheris-muted">Good Morning. Let's get things done!</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-etheris-border text-etheris-secondary hover:text-etheris-primary hover:border-gray-500 bg-etheris-card transition-all text-sm font-medium">
                        <Layout size={16} /> New Project
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-etheris-primary text-etheris-dark hover:opacity-90 transition-all text-sm font-bold shadow-lg shadow-blue-500/10">
                        <Plus size={16} /> New Task
                    </button>
                </div>
            </header>

            {/* Layout Grid */}
            <div className="grid grid-cols-12 gap-8">
                
                {/* Left Column (Stats + Tasks) - Spans 8 cols */}
                <div className="col-span-12 xl:col-span-9 flex flex-col gap-8">
                    {/* Stats Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StatCard 
                            title="Tasks Completed" 
                            value="76%" 
                            change="+12%" 
                            type="line" 
                            delay={100} 
                        />
                        <StatCard 
                            title="Streak Score" 
                            value="5 Days" 
                            change="+4%" 
                            type="streak" 
                            delay={200} 
                        />
                        <StatCard 
                            title="Weekly Goals Achieved" 
                            value="38%" 
                            change="+8%" 
                            type="radial" 
                            delay={300} 
                        />
                    </div>

                    {/* Ongoing Tasks Section */}
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-medium text-etheris-primary">Ongoing Tasks</h2>
                            <button className="text-xs text-etheris-muted hover:text-etheris-primary transition-colors">View All</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {TASKS.map((task, idx) => (
                                <TaskCard key={task.id} task={task} delay={400 + (idx * 50)} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column (Members) - Spans 4 cols */}
                <div className="col-span-12 xl:col-span-3">
                    <div className="sticky top-8">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-medium text-etheris-primary">Members</h2>
                            <button className="text-xs text-etheris-muted hover:text-etheris-primary transition-colors">
                                <ArrowRight size={14} />
                            </button>
                        </div>
                        <div className="flex flex-col gap-2">
                            {MEMBERS.map((member, idx) => (
                                <MemberCard key={member.id} member={member} delay={600 + (idx * 100)} />
                            ))}
                        </div>
                        
                        {/* Example of an invite card */}
                        <div className="mt-6 border border-dashed border-etheris-border rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-gray-500 transition-colors cursor-pointer group">
                            <div className="w-10 h-10 rounded-full bg-etheris-card border border-etheris-border flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
                                <Plus size={20} className="text-etheris-muted" />
                            </div>
                            <h4 className="text-sm font-medium text-etheris-primary mb-1">Invite Member</h4>
                            <p className="text-xs text-etheris-muted">Add new people to your team</p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    </div>
  );
};