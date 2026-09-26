import type { Project } from '../types/portfolio';

export const projects: Project[] = [
  { id: 'threadlux', title: 'ThreadLux eCommerce', description: 'A full-stack commerce experience with customer and administrative workflows.', technologies: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Redux', 'Supabase'], features: ['Authentication', 'Product management', 'Shopping cart', 'Orders', 'Admin dashboard', 'Role-based admin functionality'], links: [{ id: 'client-app', label: 'Client App', url: 'https://threadlux-ecommerce-client.vercel.app/', type: 'live' }, { id: 'admin-app', label: 'Admin App', url: 'https://threadlux-ecommerce-admin-dashboard.vercel.app/', type: 'live' }], demoCredentials: [{ label: 'Admin demo', email: 'admin@example.com', password: 'Admin@123' }], featured: true },
  { id: 'crm-platform', title: 'CRM Platform', description: 'A responsive customer relationship platform designed around reusable interfaces and core business workflows.', technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL'], features: ['Dashboard', 'Leads', 'Companies', 'Deals', 'Tickets', 'Activities', 'Authentication', 'Reusable UI', 'Responsive design'], featured: true },
  {
    id: 'rentalpro',
    title: 'RentalPro',
    description: 'A property-management application with authenticated access for managing rental properties.',
    technologies: [],
    features: ['Authentication', 'Property management', 'Admin dashboard', 'Demo access'],
    links: [{ id: 'frontend-app', label: 'Live Website', url: 'https://rentalprofrontend.vercel.app/', type: 'live' }],
    demoCredentials: [{ label: 'Demo account', email: 'admin@example.com', password: 'password' }]
  }
];
