import React from 'react';
import { ExternalLink } from 'lucide-react';
import ConnectTemplate from './ConnectTemplate';
import { useScrollReveal } from '../utils/useScrollReveal';

interface Collaboration {
  name: string;
  logo: string;
  description: string;
  website: string;
}

const collaborations: Collaboration[] = [
  {
    name: 'StudyFetch',
    logo: '../../ai-tool-logos/studyfetch-logo.webp',
    description:
      'Study Fetch is an educational technology platform dedicated to transforming the traditional education experience with artificial intelligence.',
    website: 'https://www.studyfetch.com/',
  },
  {
    name: 'Pickaxe',
    logo: '../../ai-tool-logos/pickaxe-logo.webp',
    description:
      'Pickaxe is a platform that enables users to create AI-powered tools without coding. It simplifies the process of building custom AI applications.',
    website: 'https://www.pickaxeproject.com/',
  },
  {
    name: 'Coursewand',
    logo: '../../ai-tool-logos/coursewand-logo.webp',
    description:
      'Coursewand provides AI-driven course recommendations and personalized learning pathways to help students make informed academic decisions.',
    website: 'https://www.coursewand.com/',
  },
];

const CollaborationsPage: React.FC = () => {
  const pageRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      {/* ── Header ───────────────────────────────────────────── */}
      <div className="relative bg-slate-900 pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-indigo-600/10 rounded-full blur-[80px] orb-1 pointer-events-none" />
        <div className="text-center relative">
          <span className="hero-animate inline-block font-mono text-xs font-semibold tracking-[0.25em] uppercase text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full mb-4">
            Partners
          </span>
          <h1 className="hero-animate-delay text-5xl md:text-6xl font-bold text-white mb-4">
            Our Collaborations
          </h1>
          <p className="hero-animate-delay-2 text-gray-400 text-lg max-w-xl mx-auto">
            We partner with innovative companies to bring real-world AI tools and opportunities to our members.
          </p>
        </div>
      </div>

      {/* ── Cards ────────────────────────────────────────────── */}
      <div ref={pageRef} className="max-w-5xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {collaborations.map((collab, index) => (
            <div
              key={index}
              className={`reveal reveal-delay-${index + 1} group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden`}
            >
              {/* Logo */}
              <div className="h-44 bg-gray-50 flex items-center justify-center p-6 overflow-hidden">
                <img
                  src={collab.logo}
                  alt={`${collab.name} Logo`}
                  className="max-h-28 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-3">{collab.name}</h2>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{collab.description}</p>
                <a
                  href={collab.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg hover:opacity-95 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Visit Site <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ConnectTemplate />
    </div>
  );
};

export default CollaborationsPage;
