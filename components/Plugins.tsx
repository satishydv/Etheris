import React from 'react';
import { ToggleRight, ToggleLeft, Zap, Box, Command, Slack, Github, Figma, Trello } from 'lucide-react';

const PluginCard = ({ name, description, icon: Icon, connected, color }: { name: string, description: string, icon: any, connected: boolean, color: string }) => (
    <div className="bg-etheris-card border border-etheris-border rounded-2xl p-6 flex flex-col justify-between h-48 hover:border-gray-500/30 transition-all group animate-fadeIn">
        <div className="flex justify-between items-start">
             <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center text-white shadow-lg`}>
                 <Icon size={24} />
             </div>
             <button className={`transition-colors ${connected ? 'text-emerald-500' : 'text-gray-600 hover:text-gray-400'}`}>
                 {connected ? <ToggleRight size={32} /> : <ToggleLeft size={32} />}
             </button>
        </div>
        <div>
            <h3 className="font-bold text-lg text-etheris-primary mb-1">{name}</h3>
            <p className="text-xs text-etheris-muted leading-relaxed">{description}</p>
        </div>
    </div>
)

export const Plugins: React.FC = () => {
  return (
    <div className="flex-1 h-full overflow-y-auto bg-etheris-dark relative transition-colors duration-500">
       <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-pink-600/5 blur-[120px] rounded-full pointer-events-none" />
       </div>

      <main className="relative z-10 p-8 max-w-[1400px] mx-auto animate-fadeIn">
        <header className="mb-8 border-b border-etheris-border pb-8">
            <h1 className="text-3xl font-display font-bold text-etheris-primary mb-2">Plugins & Integrations</h1>
            <p className="text-etheris-muted">Supercharge your workflow by connecting your favorite tools.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <PluginCard name="Slack" description="Send notifications and updates directly to your team channels." icon={Slack} connected={true} color="bg-[#4A154B]" />
            <PluginCard name="GitHub" description="Link commits and pull requests to your tasks automatically." icon={Github} connected={true} color="bg-[#181717]" />
            <PluginCard name="Figma" description="Embed designs and prototypes directly into task descriptions." icon={Figma} connected={false} color="bg-[#F24E1E]" />
            <PluginCard name="Jira" description="Sync issues and sprints with bidirectional updates." icon={Box} connected={false} color="bg-[#0052CC]" />
            <PluginCard name="Notion" description="Connect your wikis and docs for seamless knowledge sharing." icon={Command} connected={true} color="bg-[#000000]" />
            <PluginCard name="Zapier" description="Automate workflows between apps with custom triggers." icon={Zap} connected={false} color="bg-[#FF4F00]" />
        </div>
      </main>
    </div>
  );
};