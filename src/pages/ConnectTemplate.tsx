import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { Lightbulb } from 'lucide-react';

const links = [
  {
    href: 'https://www.linkedin.com/company/cuaiclub/',
    icon: <Linkedin className="w-6 h-6" />,
    label: 'LinkedIn',
    sub: 'Follow our company page',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    href: 'https://www.instagram.com/aiclubcu/',
    icon: <Instagram className="w-6 h-6" />,
    label: 'Instagram',
    sub: 'See what we\'re up to',
    gradient: 'from-fuchsia-500 to-pink-600',
  },
  {
    href: 'https://aixu.tech/app',
    icon: <Lightbulb className="w-6 h-6" />,
    label: 'AIxU',
    sub: 'Join the platform',
    gradient: 'from-amber-400 to-orange-500',
  },
];

function ConnectTemplate() {
  return (
    <section className="relative bg-slate-900 py-20 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <span className="inline-block font-mono text-xs font-semibold tracking-[0.25em] uppercase text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full mb-4">
          Stay Connected
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Connect With Us</h2>
        <p className="text-gray-400 mb-12 text-lg">
          Stay up to date with events, announcements, and opportunities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {links.map(({ href, icon, label, sub, gradient }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {icon}
              </div>
              <div>
                <p className="font-semibold text-white text-base">{label}</p>
                <p className="text-gray-500 text-sm mt-0.5">{sub}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ConnectTemplate;
