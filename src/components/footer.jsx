import { Link } from './navigation/link';

const footerLinks = [
  {
    label: 'Vite',
    link: 'https://vitejs.dev',
  },
  {
    label: 'React',
    link: 'https://react.dev',
  },
  {
    label: 'Tailwind v4',
    link: 'https://tailwindcss.com',
  },
];

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
          {footerLinks.map((item, index) => (
            <Link
              label={item.label}
              link={item.link}
              key={index}
              showIcon={false}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
