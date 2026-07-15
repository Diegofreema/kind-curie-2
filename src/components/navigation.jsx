import { ExternalLink, Github, Sparkles } from 'lucide-react';

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-800/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <span className="font-display font-bold tracking-tight text-lg text-white">
              ViteReact
            </span>
            <span className="text-xs text-indigo-400 font-medium ml-1.5 px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/25">
              Tailwind v4
            </span>
          </div>
        </div>

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

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-slate-900/60 border border-slate-800 rounded-full px-3 py-1 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-500 absolute" />
            <span className="font-medium text-slate-300">pnpm Active</span>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 border border-transparent hover:border-slate-800 transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
