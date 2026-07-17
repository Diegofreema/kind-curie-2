import { Globe, Layers, Zap } from 'lucide-react';
import { FeatureCard } from './feature-card';

const cards = [
  {
    title: 'Lightning Fast Compiles',
    description:
      'Utilizes Rust-powered optimizations and high performance build pipeline that builds style graphs incrementally, reducing initial compile and HMR times to mere milliseconds.',
    icon: <Zap className="w-5 h-5 text-indigo-400" />,
  },
  {
    title: 'Simplified Toolchain',
    description:
      'Tailwind CSS v4 is a complete replacement for Tailwind CSS v3, removing unnecessary features and simplifying the toolchain.',
    icon: <Globe className="w-5 h-5 text-indigo-400" />,
  },
  {
    title: 'Native @layer CSS Isolation',
    description:
      'Tailwind CSS v4 provides native @layer CSS isolation, preventing unexpected specificity issues and making customization clean.',
    icon: <Layers className="w-5 h-5 text-indigo-400" />,
  },
];

export function FeatureOverview() {
  return (
    <div className="mb-8">
      <h2 className="font-display font-extrabold text-2xl text-white text-center mb-10">
        Why Tailwind CSS v4 is a Game Changer
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((item, index) => (
          <FeatureCard card={item} key={index} />
        ))}
      </div>
    </div>
  );
}
