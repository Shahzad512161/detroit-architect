
import { TeamMember, PortfolioItem, Service } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Beau Wynn', role: 'Principal Architect', image: 'https://picsum.photos/seed/beau/600/800' },
  { name: 'Jacob Root', role: 'Design Director', image: 'https://picsum.photos/seed/jacob/600/800' },
  { name: 'Trevor Gavan', role: 'Senior Project Manager', image: 'https://picsum.photos/seed/trevor/600/800' },
  { name: 'Christina Smith', role: 'Interior Design Lead', image: 'https://picsum.photos/seed/christina/600/800' },
  { name: 'Richard Opra', role: 'Technical Director', image: 'https://picsum.photos/seed/richard/600/800' },
  { name: 'Rebecca Kritzman', role: 'Project Architect', image: 'https://picsum.photos/seed/rebecca/600/800' },
  { name: 'Brandon Kritzman', role: 'Architectural Designer', image: 'https://picsum.photos/seed/brandon/600/800' },
  { name: 'Mai Vue', role: 'Designer', image: 'https://picsum.photos/seed/mai/600/800' },
  { name: 'Lindsay Korzeniewski', role: 'Operations Manager', image: 'https://picsum.photos/seed/lindsay/600/800' },
];

export const SERVICES: string[] = [
  'Programming',
  'Feasibility Studies',
  'Space & Master Planning',
  'Code & Ordinance Review',
  'Site Planning & Approvals',
  'Architectural Design',
  'Construction Documents',
  'Construction Administration',
  'Interior Design',
  'Renderings & Animations',
  'Value Engineering',
  'Life-Cycle Cost Analysis',
  'Energy Calculations'
];

export const PORTFOLIO_CATEGORIES = [
  'All',
  'Industrial',
  'Warehouse',
  'Workplace',
  'Residential',
  'Retail',
  'Hospitality',
  'Experiential',
  'Municipal',
  'Healthcare',
  'Religious',
  'Universities / Schools'
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: '1', title: 'Detroit Tech Center', category: 'Workplace', location: 'Detroit, MI', image: 'https://picsum.photos/seed/arch1/1200/800' },
  { id: '2', title: 'Grand River Lofts', category: 'Residential', location: 'Detroit, MI', image: 'https://picsum.photos/seed/arch2/1200/800' },
  { id: '3', title: 'Motor City Logistics', category: 'Industrial', location: 'Romulus, MI', image: 'https://picsum.photos/seed/arch3/1200/800' },
  { id: '4', title: 'Riverfront Plaza', category: 'Hospitality', location: 'Detroit, MI', image: 'https://picsum.photos/seed/arch4/1200/800' },
  { id: '5', title: 'Wayne State Annex', category: 'Universities / Schools', location: 'Detroit, MI', image: 'https://picsum.photos/seed/arch5/1200/800' },
  { id: '6', title: 'Midtown Retail Hub', category: 'Retail', location: 'Detroit, MI', image: 'https://picsum.photos/seed/arch6/1200/800' },
  { id: '7', title: 'St. Mary’s Sanctuary', category: 'Religious', location: 'Wyandotte, MI', image: 'https://picsum.photos/seed/arch7/1200/800' },
  { id: '8', title: 'City Hall Modernization', category: 'Municipal', location: 'Dearborn, MI', image: 'https://picsum.photos/seed/arch8/1200/800' },
  { id: '9', title: 'Beacon Health Center', category: 'Healthcare', location: 'Troy, MI', image: 'https://picsum.photos/seed/arch9/1200/800' },
  { id: '10', title: 'Warehouse 1644', category: 'Warehouse', location: 'Wyandotte, MI', image: 'https://picsum.photos/seed/arch10/1200/800' },
  { id: '11', title: 'Immersive Gallery', category: 'Experiential', location: 'Detroit, MI', image: 'https://picsum.photos/seed/arch11/1200/800' },
];

export const CORE_PRINCIPLES = [
  { title: 'Knowledge', description: 'Credible expertise built on decades of industry experience and continuous learning.' },
  { title: 'Creativity', description: 'Valued design solutions that push boundaries while remaining functional and feasible.' },
  { title: 'Integrity', description: 'Transparent partnerships rooted in trust, reliability, and professional excellence.' },
];
