import { ExternalLink } from 'lucide-react';
import { Link } from './link';

const links = [
  {
    link: 'https://tailwindcss.com',
    label: 'Tailwind CSS',
  },
  {
    link: 'https://vite.dev',
    label: 'Vite Docs',
  },
  {
    link: 'https://react.dev ',
    label: 'React Docs',
  },
];
export function Links() {
  return (
    <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
      {links.map((item, index) => (
        <Link label={item.label} link={item.link} key={index} showIcon />
      ))}
    </div>
  );
}
