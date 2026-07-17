export function RightPanel() {
  return (
    <div className="lg:col-span-5 flex flex-col space-y-8">
      <div className="glass-card rounded-3xl p-8 flex flex-col justify-between h-full shadow-xl">
        <div>
          <h2 className="text-xl font-display font-bold text-white mb-6">
            Project Metadata
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
              <span className="text-sm text-slate-400">Package Manager</span>
              <span className="text-sm font-bold text-indigo-400">
                pnpm 10.x
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
              <span className="text-sm text-slate-400">Vite Version</span>
              <span className="text-sm font-bold text-slate-200">v8.1.x</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
              <span className="text-sm text-slate-400">React Core</span>
              <span className="text-sm font-bold text-slate-200">v19.2.x</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
              <span className="text-sm text-slate-400">Tailwind Engine</span>
              <span className="text-sm font-bold text-indigo-400">v4.3.x</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
              <span className="text-sm text-slate-400">Typography Setup</span>
              <span className="text-sm font-bold text-emerald-400">
                Outfit & Plus Jakarta
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">Environment</span>
              <span className="text-sm font-bold text-emerald-400 flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Development</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/60">
          <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-3">
            Quick Execution Info
          </div>
          <div className="bg-slate-950/60 rounded-xl p-4 font-mono text-xs text-slate-300 border border-slate-800/65 flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-indigo-400">$</span>
              <span>pnpm run dev</span>
            </div>
            <div className="text-[10px] text-slate-500 italic pl-3">
              // starts local Vite development server
            </div>
            <div className="flex items-center space-x-2 pt-1.5">
              <span className="text-indigo-400">$</span>
              <span>pnpm run build</span>
            </div>
            <div className="text-[10px] text-slate-500 italic pl-3">
              // compiles assets for deployment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
