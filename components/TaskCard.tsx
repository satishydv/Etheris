import React from 'react';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';
import { Task } from '../types';

interface TaskCardProps {
  task: Task;
  delay?: number;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>, id: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, delay = 0, onDragStart }) => {
  return (
    <div 
      className={clsx(
        "group relative p-[1px] rounded-2xl overflow-hidden transition-all duration-300 animate-fadeIn opacity-0 fill-mode-forwards",
        "hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]",
        onDragStart && "cursor-grab active:cursor-grabbing hover:-translate-y-1"
      )}
      style={{ animationDelay: `${delay}ms` }}
      draggable={!!onDragStart}
      onDragStart={(e) => onDragStart && onDragStart(e, task.id)}
    >
      {/* Border Gradient Background */}
      <div className={clsx(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        task.isGlowing ? "opacity-100 bg-gradient-to-br from-blue-500 via-transparent to-orange-500" : "bg-gradient-to-br from-gray-500/20 to-transparent"
      )} />
      
      {/* Content Container */}
      <div className="relative bg-etheris-card rounded-2xl h-full p-5 flex flex-col justify-between z-10 border border-etheris-border group-hover:border-transparent transition-colors">
        
        {/* Glowing effect for the specific card */}
        {task.isGlowing && (
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />
        )}

        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            {task.tags.map((tag, i) => (
              <span 
                key={i} 
                className={clsx(
                  "text-[10px] uppercase tracking-wide font-bold px-2 py-1 rounded-full border",
                  i === 0 ? "text-blue-500 bg-blue-500/10 border-blue-500/20" : "text-etheris-muted bg-etheris-active border-etheris-border"
                )}
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h4 className="text-etheris-primary font-semibold text-lg mb-2 leading-tight group-hover:text-blue-500 transition-colors">
            {task.title}
          </h4>
          
          <p className="text-etheris-muted text-xs leading-relaxed mb-4 line-clamp-2">
            {task.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-2 pt-4 border-t border-etheris-border">
          <div className="flex -space-x-2">
            {task.assignees.map((url, i) => (
              <img 
                key={i} 
                src={url} 
                alt="Assignee" 
                className="w-6 h-6 rounded-full border border-etheris-card object-cover" 
              />
            ))}
          </div>
          
          <button className="flex items-center text-[10px] text-etheris-muted font-medium group-hover:text-etheris-primary transition-colors">
            More Details <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};