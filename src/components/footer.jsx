export function Footer() {
  return (
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
  );
}
