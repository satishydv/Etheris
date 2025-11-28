import { TeamMember, Task } from './types';

export const MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Arin Malhotra',
    role: 'Lead Frontend Engineer',
    avatar: 'https://picsum.photos/seed/arin/200',
    department: 'Product',
    joined: 'February 28, 2025',
    email: 'arin.malhotra@etherisapp.com',
    phone: '+1 312 740 9824',
    status: 'Remote'
  },
  {
    id: '2',
    name: 'Jace Rowan',
    role: 'Product Strategy Manager',
    avatar: 'https://picsum.photos/seed/jace/200',
    department: 'Branding',
    joined: 'December 2, 2018',
    email: 'jace.rowan@etherisapp.com',
    phone: '+44 7394 112785',
    status: 'Active'
  },
  {
    id: '3',
    name: 'Elara Vance',
    role: 'Project Lead',
    avatar: 'https://picsum.photos/seed/elara/200',
    department: 'Development',
    joined: 'January 15, 2024',
    email: 'elara.vance@etherisapp.com',
    phone: '+1 202 555 0192',
    status: 'Part-time'
  }
];

export const TASKS: Task[] = [
  {
    id: '1',
    title: 'Dashboard Widget Cleanup',
    description: 'Simplifying widget layout for faster scanning and better clarity.',
    tags: ['UI Design', 'Product'],
    assignees: ['https://picsum.photos/seed/u1/100', 'https://picsum.photos/seed/u2/100', 'https://picsum.photos/seed/u3/100'],
    isGlowing: true,
    status: 'todo'
  },
  {
    id: '2',
    title: 'Real Time Sync Setup',
    description: 'Connecting live analytics with the new data pipeline.',
    tags: ['Development', 'Integrations'],
    assignees: ['https://picsum.photos/seed/u4/100', 'https://picsum.photos/seed/u5/100'],
    status: 'todo'
  },
  {
    id: '3',
    title: 'Dashboard Dark Mode Fix',
    description: 'Fixing contrast levels, adjusting shadows, and improving glow effects to make the dark theme pop.',
    tags: ['UI Design', 'Development'],
    assignees: ['https://picsum.photos/seed/u6/100', 'https://picsum.photos/seed/u7/100'],
    status: 'todo'
  },
  {
    id: '4',
    title: 'Workflow Path Mapping',
    description: 'Analyzing user journeys to simplify step flow, reduce friction points, and make complex tasks feel more intuitive.',
    tags: ['Product', 'UX Strategy'],
    assignees: ['https://picsum.photos/seed/u8/100', 'https://picsum.photos/seed/u9/100', 'https://picsum.photos/seed/u10/100'],
    status: 'in-progress'
  },
  {
    id: '5',
    title: 'Crash Issue Debug',
    description: 'Investigating random freeze events reported by users and identifying the root cause in event listeners.',
    tags: ['Development', 'QA'],
    assignees: ['https://picsum.photos/seed/u11/100', 'https://picsum.photos/seed/u12/100'],
    status: 'in-progress'
  },
  {
    id: '6',
    title: 'Updated Icon Library',
    description: 'Designing and standardizing a unified icon set to match the new visual direction.',
    tags: ['Branding', 'UI Design', 'Product'],
    assignees: ['https://picsum.photos/seed/u13/100', 'https://picsum.photos/seed/u14/100'],
    status: 'done'
  },
  {
    id: '7',
    title: 'OAuth Fix',
    description: 'Updating the authentication flow to remove deprecated dependencies.',
    tags: ['Development', 'Security'],
    assignees: ['https://picsum.photos/seed/u15/100', 'https://picsum.photos/seed/u16/100'],
    status: 'done'
  },
  {
    id: '8',
    title: 'Microcopy Refresh',
    description: 'Improving labels, tooltips, and helper texts so users instantly understand actions.',
    tags: ['Content', 'UX Writing'],
    assignees: ['https://picsum.photos/seed/u17/100', 'https://picsum.photos/seed/u18/100'],
    status: 'done'
  }
];