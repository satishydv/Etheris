import React from 'react';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  department: string;
  joined: string;
  email: string;
  phone: string;
  status: 'Remote' | 'Active' | 'Part-time';
}

export interface Task {
  id: string;
  title: string;
  description: string;
  tags: string[];
  assignees: string[];
  isGlowing?: boolean;
  status: 'todo' | 'in-progress' | 'done';
}

export interface Project {
  id: string;
  name: string;
  icon?: React.ReactNode;
}