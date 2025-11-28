import React from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import clsx from 'clsx';
import { TeamMember } from '../types';

interface MemberCardProps {
  member: TeamMember;
  delay?: number;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member, delay = 0 }) => {
  return (
    <div 
      className="bg-etheris-card border border-etheris-border rounded-xl p-4 mb-3 hover:bg-etheris-cardHover hover:border-orange-500/30 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all cursor-pointer group animate-fadeIn opacity-0 fill-mode-forwards"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="relative">
          <img 
            src={member.avatar} 
            alt={member.name} 
            className="w-10 h-10 rounded-full object-cover border border-etheris-border transition-transform duration-300 group-hover:scale-110" 
          />
          {/* Status Indicator Dot on Avatar */}
          <div className={clsx(
            "absolute bottom-0 right-0 w-3 h-3 border-2 border-etheris-card rounded-full",
            member.status === 'Remote' && "bg-orange-500",
            member.status === 'Active' && "bg-emerald-500",
            member.status === 'Part-time' && "bg-blue-500"
          )}></div>
        </div>
        
        {/* Status Badge with Dot */}
        <span className={clsx(
          "flex items-center gap-1.5 text-[10px] font-bold px-2 py-0.5 rounded border transition-colors",
          member.status === 'Remote' && "text-orange-500 bg-orange-500/10 border-orange-500/20",
          member.status === 'Active' && "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
          member.status === 'Part-time' && "text-blue-500 bg-blue-500/10 border-blue-500/20",
        )}>
          <span className={clsx(
            "w-1.5 h-1.5 rounded-full",
            member.status === 'Remote' && "bg-orange-500",
            member.status === 'Active' && "bg-emerald-500",
            member.status === 'Part-time' && "bg-blue-500"
          )} />
          {member.status}
        </span>
      </div>
      
      <h4 className="text-etheris-primary font-medium text-sm mb-0.5">{member.name}</h4>
      <p className="text-etheris-muted text-xs mb-3">{member.role}</p>
      
      <div className="grid grid-cols-2 gap-2 mb-4 text-[10px]">
        <div>
            <p className="uppercase tracking-wider text-etheris-secondary mb-0.5">Department</p>
            <p className="text-etheris-primary">{member.department}</p>
        </div>
        <div>
            <p className="uppercase tracking-wider text-etheris-secondary mb-0.5">Joining</p>
            <p className="text-etheris-primary">{member.joined}</p>
        </div>
      </div>
      
      <div className="flex flex-col gap-1.5 pt-3 border-t border-etheris-border">
        <div className="flex items-center text-[10px] text-etheris-muted hover:text-blue-500 hover:font-semibold transition-all duration-300 cursor-pointer w-fit group/item">
            <Mail size={10} className="mr-2 text-etheris-muted group-hover/item:text-blue-500 transition-colors" /> {member.email}
        </div>
        <div className="flex items-center justify-between text-[10px] text-etheris-muted">
            <div className="flex items-center hover:text-blue-500 hover:font-semibold transition-all duration-300 cursor-pointer w-fit group/item">
                <Phone size={10} className="mr-2 text-etheris-muted group-hover/item:text-blue-500 transition-colors" /> {member.phone}
            </div>
            <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-blue-500" />
        </div>
      </div>
    </div>
  );
};