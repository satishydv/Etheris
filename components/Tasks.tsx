import React, { useState } from 'react';
import { Plus, MoreHorizontal, LayoutTemplate, List, X, Tag, User, Check, ArrowRight } from 'lucide-react';
import { TaskCard } from './TaskCard';
import { TASKS, MEMBERS } from '../data';
import clsx from 'clsx';
import { Task } from '../types';

const ColumnHeader: React.FC<{ title: string; count: number; color: string }> = ({ title, count, color }) => (
  <div className="flex items-center justify-between mb-4 px-1">
    <div className="flex items-center gap-2">
      <span className={clsx("w-2 h-2 rounded-full", color)} />
      <h3 className="text-sm font-bold text-etheris-primary">{title}</h3>
      <span className="text-xs text-etheris-muted bg-etheris-card border border-etheris-border px-1.5 py-0.5 rounded-md">{count}</span>
    </div>
    <div className="flex gap-1">
        <button className="text-etheris-muted hover:text-etheris-primary p-1 hover:bg-etheris-glass rounded"><Plus size={14} /></button>
        <button className="text-etheris-muted hover:text-etheris-primary p-1 hover:bg-etheris-glass rounded"><MoreHorizontal size={14} /></button>
    </div>
  </div>
);

type TaskStatus = 'todo' | 'in-progress' | 'done';

const getStatusColor = (status: TaskStatus) => {
    switch (status) {
        case 'todo': return 'bg-gray-400';
        case 'in-progress': return 'bg-blue-500';
        case 'done': return 'bg-emerald-500';
        default: return 'bg-gray-400';
    }
};

const getStatusLabel = (status: TaskStatus) => {
    switch (status) {
        case 'todo': return 'To Do';
        case 'in-progress': return 'In Progress';
        case 'done': return 'Done';
        default: return status;
    }
};

export const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(TASKS);
  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);
  const [dragOverColumn, setDragOverColumn] = useState<TaskStatus | null>(null);
  const [viewMode, setViewMode] = useState<'board' | 'list'>('board');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState<{
    title: string;
    description: string;
    tags: string[];
    assignees: string[];
  }>({
    title: '',
    description: '',
    tags: [],
    assignees: []
  });

  const availableTags = ['UI Design', 'Development', 'Product', 'Marketing', 'Branding', 'QA'];

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    setDraggedTaskId(id);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, status: TaskStatus) => {
    e.preventDefault(); 
    if (dragOverColumn !== status) {
        setDragOverColumn(status);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: TaskStatus) => {
    e.preventDefault();
    setDragOverColumn(null);
    
    if (!draggedTaskId) return;

    setTasks(prevTasks => prevTasks.map(task => 
        task.id === draggedTaskId ? { ...task, status } : task
    ));
    setDraggedTaskId(null);
  };

  const handleAddTask = () => {
    if (!newTask.title.trim()) return;

    const task: Task = {
      id: Math.random().toString(36).substr(2, 9),
      title: newTask.title,
      description: newTask.description,
      tags: newTask.tags,
      assignees: newTask.assignees,
      status: 'todo',
      isGlowing: false // Default for new tasks
    };

    setTasks(prev => [...prev, task]);
    setIsModalOpen(false);
    // Reset form
    setNewTask({ title: '', description: '', tags: [], assignees: [] });
  };

  const toggleTag = (tag: string) => {
    setNewTask(prev => ({
        ...prev,
        tags: prev.tags.includes(tag) 
            ? prev.tags.filter(t => t !== tag) 
            : [...prev.tags, tag]
    }));
  };

  const toggleAssignee = (avatar: string) => {
    setNewTask(prev => ({
        ...prev,
        assignees: prev.assignees.includes(avatar)
            ? prev.assignees.filter(a => a !== avatar)
            : [...prev.assignees, avatar]
    }));
  };

  const todoTasks = tasks.filter(t => t.status === 'todo');
  const inProgressTasks = tasks.filter(t => t.status === 'in-progress');
  const doneTasks = tasks.filter(t => t.status === 'done');

  return (
    <div className="flex-1 h-full overflow-hidden bg-etheris-dark relative transition-colors duration-500 flex flex-col">
       {/* Ambient Background */}
       <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-100px] right-[20%] w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <header className="relative z-10 px-8 py-6 border-b border-etheris-border flex items-center justify-between animate-fadeIn shrink-0">
         <div>
            <h1 className="text-2xl font-display font-bold text-etheris-primary mb-1">Tasks Board</h1>
            <p className="text-etheris-muted text-xs">Track project deliverables.</p>
         </div>
         <div className="flex gap-3">
             <button 
                onClick={() => setViewMode(prev => prev === 'board' ? 'list' : 'board')}
                className="p-2 text-etheris-muted hover:text-etheris-primary bg-etheris-card border border-etheris-border rounded-lg transition-colors group"
                title={viewMode === 'board' ? "Switch to List View" : "Switch to Board View"}
             >
                 {viewMode === 'board' ? <List size={18} className="group-hover:scale-110 transition-transform" /> : <LayoutTemplate size={18} className="group-hover:scale-110 transition-transform" />}
             </button>
             <button 
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-lg shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2"
             >
                 <Plus size={16} /> New Task
             </button>
         </div>
      </header>

      <div className="flex-1 overflow-hidden p-8">
        {viewMode === 'board' ? (
            <div className="flex gap-6 h-full min-w-[1000px] overflow-x-auto pb-4">
                {/* To Do Column */}
                <div 
                    className={clsx(
                        "flex-1 flex flex-col min-w-[300px] rounded-2xl transition-colors duration-300 p-2 -m-2",
                        dragOverColumn === 'todo' ? "bg-etheris-card/30 border border-dashed border-blue-500/30" : "border border-transparent"
                    )}
                    onDragOver={(e) => handleDragOver(e, 'todo')}
                    onDrop={(e) => handleDrop(e, 'todo')}
                >
                    <div className="px-2 pt-2">
                        <ColumnHeader title="To Do" count={todoTasks.length} color="bg-gray-400" />
                    </div>
                    <div className="flex-1 overflow-y-auto pr-2 px-2 space-y-4 scrollbar-hide pb-4">
                        {todoTasks.map((task, i) => (
                            <TaskCard 
                                key={task.id} 
                                task={task} 
                                delay={0}
                                onDragStart={handleDragStart}
                            />
                        ))}
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="w-full py-3 border border-dashed border-etheris-border rounded-xl text-etheris-muted text-xs font-medium hover:border-gray-500 hover:text-etheris-primary transition-colors"
                        >
                            + Add Task
                        </button>
                    </div>
                </div>

                {/* In Progress Column */}
                <div 
                    className={clsx(
                        "flex-1 flex flex-col min-w-[300px] rounded-2xl transition-colors duration-300 p-2 -m-2",
                        dragOverColumn === 'in-progress' ? "bg-etheris-card/30 border border-dashed border-blue-500/30" : "border border-transparent"
                    )}
                    onDragOver={(e) => handleDragOver(e, 'in-progress')}
                    onDrop={(e) => handleDrop(e, 'in-progress')}
                >
                    <div className="px-2 pt-2">
                        <ColumnHeader title="In Progress" count={inProgressTasks.length} color="bg-blue-500" />
                    </div>
                    <div className="flex-1 overflow-y-auto pr-2 px-2 space-y-4 scrollbar-hide pb-4">
                        {inProgressTasks.map((task, i) => (
                            <TaskCard 
                                key={task.id} 
                                task={task} 
                                delay={0}
                                onDragStart={handleDragStart}
                            />
                        ))}
                    </div>
                </div>

                {/* Done Column */}
                <div 
                    className={clsx(
                        "flex-1 flex flex-col min-w-[300px] rounded-2xl transition-colors duration-300 p-2 -m-2",
                        dragOverColumn === 'done' ? "bg-etheris-card/30 border border-dashed border-blue-500/30" : "border border-transparent"
                    )}
                    onDragOver={(e) => handleDragOver(e, 'done')}
                    onDrop={(e) => handleDrop(e, 'done')}
                >
                    <div className="px-2 pt-2">
                        <ColumnHeader title="Done" count={doneTasks.length} color="bg-emerald-500" />
                    </div>
                    <div className="flex-1 overflow-y-auto pr-2 px-2 space-y-4 scrollbar-hide pb-4">
                        {doneTasks.map((task, i) => (
                            <TaskCard 
                                key={task.id} 
                                task={task} 
                                delay={0} 
                                onDragStart={handleDragStart}
                            />
                        ))}
                    </div>
                </div>
            </div>
        ) : (
            <div className="flex flex-col h-full overflow-hidden animate-fadeIn">
                <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-etheris-border text-xs font-bold text-etheris-secondary uppercase tracking-wider bg-etheris-card/30 rounded-t-xl mr-2">
                    <div className="col-span-5">Task Details</div>
                    <div className="col-span-2">Status</div>
                    <div className="col-span-3">Tags</div>
                    <div className="col-span-2 text-right">Assignees</div>
                </div>
                <div className="flex-1 overflow-y-auto pr-2 space-y-2 mt-2 pb-4">
                    {tasks.map((task, idx) => (
                        <div 
                            key={task.id} 
                            className="grid grid-cols-12 gap-4 p-4 bg-etheris-card border border-etheris-border rounded-xl items-center hover:bg-etheris-cardHover hover:border-blue-500/30 transition-all group animate-fadeIn"
                            style={{ animationDelay: `${idx * 50}ms` }}
                        >
                            <div className="col-span-5">
                                <h4 className="text-sm font-bold text-etheris-primary mb-1 group-hover:text-blue-500 transition-colors">{task.title}</h4>
                                <p className="text-xs text-etheris-muted line-clamp-1">{task.description}</p>
                            </div>
                            <div className="col-span-2">
                                <span className={clsx(
                                    "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold border",
                                    task.status === 'todo' && "bg-gray-500/10 text-gray-400 border-gray-500/20",
                                    task.status === 'in-progress' && "bg-blue-500/10 text-blue-500 border-blue-500/20",
                                    task.status === 'done' && "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
                                )}>
                                    <span className={clsx("w-1.5 h-1.5 rounded-full", getStatusColor(task.status))} />
                                    {getStatusLabel(task.status)}
                                </span>
                            </div>
                            <div className="col-span-3 flex flex-wrap gap-1.5">
                                {task.tags.slice(0, 2).map((tag, i) => (
                                    <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded border border-etheris-border bg-etheris-active text-etheris-secondary">
                                        {tag}
                                    </span>
                                ))}
                                {task.tags.length > 2 && (
                                    <span className="text-[10px] font-medium px-2 py-0.5 rounded border border-etheris-border bg-etheris-active text-etheris-muted">
                                        +{task.tags.length - 2}
                                    </span>
                                )}
                            </div>
                            <div className="col-span-2 flex justify-end">
                                <div className="flex -space-x-2">
                                    {task.assignees.map((url, i) => (
                                        <img 
                                            key={i} 
                                            src={url} 
                                            alt="Assignee" 
                                            className="w-8 h-8 rounded-full border-2 border-etheris-card object-cover" 
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="w-full py-3 border border-dashed border-etheris-border rounded-xl text-etheris-muted text-xs font-medium hover:border-gray-500 hover:text-etheris-primary transition-colors flex items-center justify-center gap-2"
                    >
                        <Plus size={14} /> Add New Task
                    </button>
                </div>
            </div>
        )}
      </div>

      {/* New Task Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
            <div className="relative w-full max-w-lg bg-etheris-card border border-etheris-border rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
            {/* Header */}
            <div className="px-6 py-4 border-b border-etheris-border flex items-center justify-between">
                <h2 className="text-lg font-bold text-etheris-primary">Create New Task</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-etheris-muted hover:text-etheris-primary transition-colors">
                <X size={20} />
                </button>
            </div>
            
            {/* Body */}
            <div className="p-6 space-y-5">
                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-etheris-secondary uppercase tracking-wider">Title</label>
                    <input 
                        type="text" 
                        value={newTask.title}
                        onChange={e => setNewTask({...newTask, title: e.target.value})}
                        placeholder="e.g., Redesign Homepage" 
                        className="w-full bg-etheris-dark border border-etheris-border rounded-xl px-4 py-2.5 text-sm text-etheris-primary focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-gray-600"
                        autoFocus 
                    />
                </div>

                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-etheris-secondary uppercase tracking-wider">Description</label>
                    <textarea 
                        value={newTask.description}
                        onChange={e => setNewTask({...newTask, description: e.target.value})}
                        placeholder="Add details regarding the task..." 
                        rows={3}
                        className="w-full bg-etheris-dark border border-etheris-border rounded-xl px-4 py-2.5 text-sm text-etheris-primary focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-gray-600 resize-none"
                    />
                </div>

                {/* Tags */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-etheris-secondary uppercase tracking-wider flex items-center gap-2"><Tag size={12}/> Tags</label>
                    <div className="flex flex-wrap gap-2">
                        {availableTags.map(tag => {
                            const isSelected = newTask.tags.includes(tag);
                            return (
                                <button
                                    key={tag}
                                    onClick={() => toggleTag(tag)}
                                    className={clsx(
                                        "text-[10px] uppercase font-bold px-3 py-1.5 rounded-lg border transition-all",
                                        isSelected 
                                            ? "bg-blue-500/20 border-blue-500/50 text-blue-500" 
                                            : "bg-etheris-dark border-etheris-border text-etheris-muted hover:border-gray-500"
                                    )}
                                >
                                    {tag}
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Assignees */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-etheris-secondary uppercase tracking-wider flex items-center gap-2"><User size={12}/> Assignees</label>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {MEMBERS.map(member => {
                            const isSelected = newTask.assignees.includes(member.avatar);
                            return (
                                <button
                                    key={member.id}
                                    onClick={() => toggleAssignee(member.avatar)}
                                    className={clsx(
                                        "relative w-10 h-10 rounded-full border-2 transition-all shrink-0 group",
                                        isSelected ? "border-blue-500" : "border-transparent opacity-60 hover:opacity-100"
                                    )}
                                    title={member.name}
                                >
                                    <img src={member.avatar} alt={member.name} className="w-full h-full rounded-full object-cover" />
                                    {isSelected && (
                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center border border-white dark:border-gray-800">
                                            <Check size={8} className="text-white" />
                                        </div>
                                    )}
                                </button>
                            )
                        })}
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
                    onClick={handleAddTask}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-600/20 transition-all"
                >
                    Create Task
                </button>
            </div>
            </div>
        </div>
      )}
    </div>
  );
};