import { Zap } from 'lucide-react';

export function Title() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className="inline-flex items-center space-x-2 bg-slate-900/80 border border-slate-800 rounded-full px-4.5 py-1.5 mb-6 text-sm font-medium hover:border-indigo-500/30 transition-colors">
        <Zap className="w-4 h-4 text-indigo-400" />
        <span className="text-indigo-200">
          Modern Frontend Stack Scaffolded Successfully
        </span>
      </div>

      <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-6 leading-tight">
        Vite + React 19 + <br className="hidden sm:inline" />
        <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
          Tailwind CSS v4
        </span>
      </h1>

      <p className="text-lg text-slate-400 font-normal leading-relaxed">
        This clean starting template features optimized configurations, native
        Vite compilation, and customizable design systems powered by the next
        generation of CSS styling.
      </p>
    </div>
  );
}
