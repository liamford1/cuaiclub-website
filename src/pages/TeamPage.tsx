import React from 'react';
import membersData from '../json_data/exec.json';
import ConnectTemplate from './ConnectTemplate';
import sponsersData from '../json_data/sponsers.json';
import { useScrollReveal } from '../utils/useScrollReveal';
import { ExternalLink } from 'lucide-react';

function TeamPage() {
  const { execs } = membersData;
  const { sponsers } = sponsersData;

  const headerRef = useScrollReveal();
  const execRef   = useScrollReveal();
  const sponsorRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      {/* ── Header / Group Photo ──────────────────────────────── */}
      <div ref={headerRef} className="relative pt-28 pb-16 px-6 bg-slate-900 overflow-hidden">
        {/* Ambient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[80px] orb-1 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-[60px] orb-2 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <div className="reveal text-center mb-10">
            <span className="inline-block font-mono text-xs font-semibold tracking-[0.25em] uppercase text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full mb-4">
              Executive Board
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Meet Our Team</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Our Executive Board is dedicated to building a community of learners and innovators passionate about artificial intelligence.
            </p>
          </div>

          <div className="reveal reveal-delay-2 relative group max-w-3xl mx-auto">
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <img
              src="/headshots/execpic.webp"
              alt="Group Team Photo"
              className="relative w-full rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* ── Exec Cards ───────────────────────────────────────── */}
      <div ref={execRef} className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Executive Board Members</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {execs.map((exec, index) => (
              <a
                key={index}
                href={exec.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal reveal-delay-${(index % 4) + 1} group block`}
              >
                <div className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <div className="w-full aspect-square overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                      <img
                        src={exec.image}
                        alt={exec.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-3.5 h-3.5 text-indigo-600" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-sm leading-tight mb-1">{exec.name}</h3>
                    <p className="text-indigo-600 text-xs font-medium mb-1">{exec.role}</p>
                    <p className="text-gray-400 text-xs">{exec.major}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Sponsor ──────────────────────────────────────────── */}
      {sponsers.length > 0 && (
        <div ref={sponsorRef} className="bg-slate-50 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="reveal text-center mb-12">
              <span className="inline-block font-mono text-xs font-semibold tracking-[0.25em] uppercase text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full mb-4">
                Faculty
              </span>
              <h2 className="text-3xl font-bold text-gray-900">Our Club Sponsor</h2>
            </div>

            <div className="flex justify-center gap-6 flex-wrap">
              {sponsers.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal group block w-56"
                >
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
                    <div className="w-full aspect-square overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                      <img
                        src={sponsor.image}
                        alt={sponsor.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">{sponsor.name}</h3>
                      <p className="text-indigo-600 text-xs font-medium mb-1">{sponsor.role}</p>
                      <p className="text-gray-400 text-xs">{sponsor.email}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <ConnectTemplate />
    </div>
  );
}

export default TeamPage;
