import React from 'react';
import { ArrowRight, GitCommit, CheckCircle2, CircleDashed, Clock } from 'lucide-react';

const PipelineItem = ({ title, stage, progress, color }: { title: string, stage: string, progress: number, color: string }) => (
    <div className="bg-etheris-card border border-etheris-border rounded-xl p-5 mb-4 hover:border-gray-500/50 transition-all group animate-fadeIn">
        <div className="flex justify-between items-start mb-4">
            <div>
                <h3 className="font-bold text-etheris-primary mb-1">{title}</h3>
                <p className="text-xs text-etheris-muted flex items-center gap-1">
                    <Clock size={12} /> Last updated 2 hours ago
                </p>
            </div>
            <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${color}`}>
                {stage}
            </span>
        </div>
        
        {/* Progress Bar */}
        <div className="space-y-2">
            <div className="flex justify-between text-xs font-medium">
                <span className="text-etheris-secondary">Progress</span>
                <span className="text-etheris-primary">{progress}%</span>
            </div>
            <div className="h-2 bg-etheris-glass rounded-full overflow-hidden">
                <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${progress}%` }} 
                />
            </div>
        </div>

        {/* Stages Visualization */}
        <div className="flex items-center justify-between mt-6 relative">
             <div className="absolute top-1/2 left-0 w-full h-0.5 bg-etheris-border -z-0" />
             {['Discovery', 'Design', 'Dev', 'QA', 'Deploy'].map((s, i) => {
                 const isActive = i < 3; 
                 const isCurrent = i === 2;
                 return (
                    <div key={s} className="relative z-10 flex flex-col items-center gap-2 bg-etheris-card px-2">
                        <div className={`w-3 h-3 rounded-full border-2 ${isActive ? 'bg-blue-500 border-blue-500' : 'bg-etheris-dark border-gray-600'}`} />
                        <span className={`text-[10px] font-bold ${isActive ? 'text-blue-500' : 'text-gray-600'}`}>{s}</span>
                    </div>
                 )
             })}
        </div>
    </div>
)

export const Pipelines: React.FC = () => {
  return (
    <div className="flex-1 h-full overflow-y-auto bg-etheris-dark relative transition-colors duration-500">
       <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <main className="relative z-10 p-8 max-w-[1000px] mx-auto animate-fadeIn">
        <header className="mb-8">
            <h1 className="text-3xl font-display font-bold text-etheris-primary mb-2">Pipelines</h1>
            <p className="text-etheris-muted">Visualize and manage your continuous delivery workflows.</p>
        </header>

        <div className="space-y-2">
            <PipelineItem title="Etheris Mobile App v2.0" stage="Development" progress={65} color="text-blue-500 bg-blue-500/10" />
            <PipelineItem title="Marketing Website Redesign" stage="Design" progress={40} color="text-orange-500 bg-orange-500/10" />
            <PipelineItem title="API Migration" stage="QA Testing" progress={90} color="text-emerald-500 bg-emerald-500/10" />
        </div>
      </main>
    </div>
  );
};