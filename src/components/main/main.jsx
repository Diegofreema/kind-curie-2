import {
  CheckCircle2,
  Cpu,
  Globe,
  Layers,
  Minus,
  Plus,
  RefreshCw,
  Settings,
  Zap,
} from 'lucide-react';
import { useState } from 'react';
import { Title } from './title';
import { RightPanel } from './right-panel';
import { LeftPanel } from './left-panel';
import { FeatureOverview } from './feature-overview';

export function Main() {
  return (
    <main className="grow max-w-7xl w-full mx-auto px-6 py-12 md:py-20 flex flex-col justify-center relative z-10">
      {/* Hero Title */}
      <Title />

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Left panel: Interactive control center */}
        <LeftPanel />

        {/* Right panel: Ecosystem status & setup */}
        <RightPanel />
      </div>

      {/* Feature Overview Grid */}
      <FeatureOverview />
    </main>
  );
}
