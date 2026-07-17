import { Globe, Layers, Zap } from 'lucide-react';

export function FeatureOverview() {
  return (
    <div className="mb-8">
      <h2 className="font-display font-extrabold text-2xl text-white text-center mb-10">
        Why Tailwind CSS v4 is a Game Changer
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900/30 border border-slate-800/50 rounded-2xl p-6 hover:border-slate-800 transition-all hover:bg-slate-900/40">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
            <Zap className="w-5 h-5 text-indigo-400" />
          </div>
          <h3 className="font-bold text-slate-200 text-base mb-2">
            Lightning Fast Compiles
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Utilizes Rust-powered optimizations and high performance build
            pipeline that builds style graphs incrementally, reducing initial
            compile and HMR times to mere milliseconds.
          </p>
        </div>

        <div className="bg-slate-900/30 border border-slate-800/50 rounded-2xl p-6 hover:border-slate-800 transition-all hover:bg-slate-900/40">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
            <Layers className="w-5 h-5 text-indigo-400" />
          </div>
          <h3 className="font-bold text-slate-200 text-base mb-2">
            Simplified Toolchain
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            No need for PostCSS, Autoprefixer, or complex tailwind configuration
            wrappers. Tailwind v4 handles imports, nesting, and autoprefixing
            natively under the hood.
          </p>
        </div>

        <div className="bg-slate-900/30 border border-slate-800/50 rounded-2xl p-6 hover:border-slate-800 transition-all hover:bg-slate-900/40">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
            <Globe className="w-5 h-5 text-indigo-400" />
          </div>
          <h3 className="font-bold text-slate-200 text-base mb-2">
            Future-Proof Standard Spec
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Adheres strictly to modern CSS specifications like CSS custom
            properties, cascade layers, container queries, and native nesting,
            making styling extremely clean.
          </p>
        </div>
      </div>
    </div>
  );
}
