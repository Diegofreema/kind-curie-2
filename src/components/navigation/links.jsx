import { ExternalLink } from 'lucide-react';

export function Links() {
  return (
    <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
      <a
        href="https://tailwindcss.com"
        target="_blank"
        rel="noreferrer"
        className="hover:text-indigo-400 transition-colors flex items-center space-x-1"
      >
        <span>Tailwind CSS</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
      <a
        href="https://vite.dev"
        target="_blank"
        rel="noreferrer"
        className="hover:text-indigo-400 transition-colors flex items-center space-x-1"
      >
        <span>Vite Docs</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
      <a
        href="https://react.dev"
        target="_blank"
        rel="noreferrer"
        className="hover:text-indigo-400 transition-colors flex items-center space-x-1"
      >
        <span>React Docs</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}
