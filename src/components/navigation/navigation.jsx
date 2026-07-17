import { Brand } from './brand';
import { GitHub } from './github';
import { Links } from './links';

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-800/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Brand />
        <Links />
        <GitHub />
      </div>
    </header>
  );
}
