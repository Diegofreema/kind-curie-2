import { Sparkles } from 'lucide-react';

export function Brand() {
  return (
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
  );
}
