import {
  CheckCircle2,
  Cpu,
  Layers,
  Minus,
  Plus,
  RefreshCw,
  Settings,
} from 'lucide-react';
import { useState } from 'react';

export function LeftPanel() {
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState('css-first');
  // const [glowingEffect, setGlowingEffect] = useState(true);

  const tailwindV4Features = {
    'css-first': {
      title: 'CSS-First Configuration',
      desc: 'Configure theme parameters, fonts, utility mappings, and plugins directly in index.css using standard CSS variables and directives without requiring a separate tailwind.config.js file.',
      tip: 'Try customizing colors using standard HSL values in the @theme directive inside src/index.css!',
    },
    'vite-plugin': {
      title: 'High-Performance Vite Plugin',
      desc: 'Out-of-the-box support for Tailwind CSS v4 via @tailwindcss/vite. It parses your source files, injects classes directly, and provides ultra-fast Hot Module Replacement (HMR).',
      tip: 'The build engine is written from scratch, running up to 10x faster than previous versions!',
    },
    'native-layers': {
      title: 'Native @layer CSS Isolation',
      desc: 'Utilities, base styles, components, and animations are properly partitioned into standard CSS cascade layers, preventing unexpected specificity issues and making customization clean.',
      tip: 'Use @utility and @layer base to define custom global CSS rules and utility abbreviations.',
    },
  };
  return (
    <div className="lg:col-span-7 flex flex-col space-y-8">
      <div className="glass-card rounded-3xl p-8 relative overflow-hidden group shadow-xl">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Cpu className="w-36 h-36 text-indigo-500" />
        </div>

        <h2 className="text-xl font-display font-bold text-white mb-2 flex items-center space-x-2">
          <Settings className="w-5 h-5 text-indigo-400" />
          <span>Interactive Component State</span>
        </h2>
        <p className="text-sm text-slate-400 mb-6">
          Test React 19 State Hook and Tailwind v4 micro-interactions by scaling
          elements dynamically.
        </p>

        <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-4">
          <div className="text-center md:text-left">
            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">
              State Counter
            </div>
            <div className="text-4xl font-display font-black text-white">
              {count}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setCount((prev) => Math.max(0, prev - 1))}
              disabled={count === 0}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer"
              title="Decrement"
            >
              <Minus className="w-5 h-5" />
            </button>

            <button
              onClick={() => setCount(0)}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 active:scale-95 transition-all cursor-pointer"
              title="Reset Counter"
            >
              <RefreshCw className="w-5 h-5" />
            </button>

            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="p-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 active:scale-95 transition-all cursor-pointer"
              title="Increment"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progress bar visual indicator */}
        <div className="w-full bg-slate-950/40 rounded-full h-1.5 overflow-hidden border border-slate-800/40">
          <div
            className="bg-linear-to-r from-indigo-500 to-violet-500 h-full transition-all duration-300"
            style={{ width: `${Math.min(100, count * 10)}%` }}
          />
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-[10px] text-slate-500 font-semibold tracking-wide uppercase">
            Interactive Fill Level
          </span>
          <span className="text-[10px] text-indigo-400 font-bold">
            {Math.min(100, count * 10)}%
          </span>
        </div>
      </div>

      {/* Interactive Feature Documentation tabs */}
      <div className="glass-card rounded-3xl p-8 shadow-xl">
        <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center space-x-2">
          <Layers className="w-5 h-5 text-indigo-400" />
          <span>Tailwind CSS v4 Blueprint</span>
        </h2>

        {/* Tab Selector */}
        <div className="flex border-b border-slate-800/60 mb-6">
          {Object.keys(tailwindV4Features).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`pb-3.5 px-4 text-sm font-semibold tracking-wide transition-all border-b-2 -mb-0.5 cursor-pointer ${
                activeTab === key
                  ? 'border-indigo-500 text-indigo-400 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {tailwindV4Features[key].title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-35 flex flex-col justify-between">
          <div>
            <h3 className="text-md font-bold text-slate-200 mb-2">
              {tailwindV4Features[activeTab].title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {tailwindV4Features[activeTab].desc}
            </p>
          </div>

          <div className="mt-4 p-3.5 rounded-xl bg-slate-950/30 border border-slate-800/50 flex items-start space-x-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span className="text-xs text-slate-400 italic">
              <strong className="text-slate-300 not-italic">Pro tip: </strong>
              {tailwindV4Features[activeTab].tip}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
