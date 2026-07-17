import { ExternalLink } from 'lucide-react';

export function Link(props) {
  const { link, label, showIcon } = props;
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="hover:text-indigo-400 transition-colors flex items-center space-x-1"
    >
      <span>{label}</span>
      {showIcon ? <ExternalLink className="w-3.5 h-3.5" /> : null}
    </a>
  );
}
