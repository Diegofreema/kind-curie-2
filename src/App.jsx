import { useState } from 'react';
import {
  Zap,
  Layers,
  Settings,
  CheckCircle2,
  Cpu,
  Globe,
  Github,
  Sparkles,
  Plus,
  Minus,
  RefreshCw,
  ExternalLink,
} from 'lucide-react';

function App() {
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
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans relative overflow-hidden selection:bg-indigo-500 selection:text-white">
      {/* Background glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />

      {/* Navigation */}
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

      {/* Main Hero & Console Container */}
      <main className="grow max-w-7xl w-full mx-auto px-6 py-12 md:py-20 flex flex-col justify-center relative z-10">
        {/* Hero Title */}
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
            This clean starting template features optimized configurations,
            native Vite compilation, and customizable design systems powered by
            the next generation of CSS styling.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left panel: Interactive control center */}
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
                Test React 19 State Hook and Tailwind v4 micro-interactions by
                scaling elements dynamically.
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
                    <strong className="text-slate-300 not-italic">
                      Pro tip:{' '}
                    </strong>
                    {tailwindV4Features[activeTab].tip}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: Ecosystem status & setup */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="glass-card rounded-3xl p-8 flex flex-col justify-between h-full shadow-xl">
              <div>
                <h2 className="text-xl font-display font-bold text-white mb-6">
                  Project Metadata
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
                    <span className="text-sm text-slate-400">
                      Package Manager
                    </span>
                    <span className="text-sm font-bold text-indigo-400">
                      pnpm 10.x
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
                    <span className="text-sm text-slate-400">Vite Version</span>
                    <span className="text-sm font-bold text-slate-200">
                      v8.1.x
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
                    <span className="text-sm text-slate-400">React Core</span>
                    <span className="text-sm font-bold text-slate-200">
                      v19.2.x
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
                    <span className="text-sm text-slate-400">
                      Tailwind Engine
                    </span>
                    <span className="text-sm font-bold text-indigo-400">
                      v4.3.x
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
                    <span className="text-sm text-slate-400">
                      Typography Setup
                    </span>
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
        </div>

        {/* Feature Overview Grid */}
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
                pipeline that builds style graphs incrementally, reducing
                initial compile and HMR times to mere milliseconds.
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
                No need for PostCSS, Autoprefixer, or complex tailwind
                configuration wrappers. Tailwind v4 handles imports, nesting,
                and autoprefixing natively under the hood.
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
                properties, cascade layers, container queries, and native
                nesting, making styling extremely clean.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-800/60 bg-slate-950/40 py-8 relative z-10 text-center text-xs text-slate-500 font-medium">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span>
              © {new Date().getFullYear()} React + Vite + Tailwind v4 Project
              template.
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://vite.dev"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-400 transition-colors"
            >
              Vite
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-400 transition-colors"
            >
              React
            </a>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-400 transition-colors"
            >
              Tailwind CSS
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
