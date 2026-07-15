import { GithubIcon } from 'lucide-react';

export function GitHub() {
  return (
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
        <GithubIcon className="w-5 h-5" />
      </a>
    </div>
  );
}
