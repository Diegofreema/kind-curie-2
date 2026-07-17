export function FeatureCard(props) {
  const { card } = props;
  return (
    <div className="bg-slate-900/30 border border-slate-800/50 rounded-2xl p-6 hover:border-slate-800 transition-all hover:bg-slate-900/40">
      <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
        {card.icon}
      </div>
      <h3 className="font-bold text-slate-200 text-base mb-2">{card.title}</h3>
      <p className="text-xs text-slate-400 leading-relaxed">
        {card.description}
      </p>
    </div>
  );
}
