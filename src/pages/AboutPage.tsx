import React from 'react';
import ConnectTemplate from './ConnectTemplate';
import { useScrollReveal } from '../utils/useScrollReveal';
import { Check } from 'lucide-react';

const membershipTiers = [
  {
    title: 'Prospective Member',
    accent: 'from-sky-400 to-blue-500',
    perks: [
      'Access to weekly meetings',
      'Workshop participation',
      'Guest speaker access',
      'Networking opportunities',
      'Basic project involvement',
    ],
  },
  {
    title: 'Active Member',
    accent: 'from-blue-500 to-indigo-500',
    perks: [
      'Includes all general benefits',
      'Exclusive project & externship opportunities',
      'Access to our connections list',
      'Access to the exclusive Members Page',
      'Eligibility to list CU AI Club on resume / LinkedIn',
    ],
  },
  {
    title: 'Analyst',
    accent: 'from-indigo-500 to-violet-500',
    perks: [
      'Professional building for AI (resume & LinkedIn)',
      'Personal passion project for the AI club',
      'Learn from executive board members',
      'Industry AI project experience',
      'Access to Workshop meetings',
      'Consideration for exec board positions',
    ],
  },
  {
    title: 'Consultant',
    accent: 'from-violet-500 to-purple-600',
    perks: [
      'Industry AI project experience',
      'Access to Workshop meetings',
      'Networking with professionals around Boulder',
    ],
  },
];

function AboutPage() {
  const topRef = useScrollReveal();
  const memberRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      {/* ── What We Do ───────────────────────────────────────── */}
      <div ref={topRef} className="max-w-6xl mx-auto pt-32 pb-20 px-6">
        <div className="reveal text-center mb-16">
          <span className="inline-block font-mono text-xs font-semibold tracking-[0.25em] uppercase text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full mb-4">
            What We Do
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">About the Club</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Images stacked */}
          <div className="space-y-6">
            <div className="reveal reveal-delay-1 relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500" />
              <img
                src="/about-page-imgs/abt_img3.webp"
                alt="Team Workshop"
                className="relative rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="reveal reveal-delay-2 relative group ml-8">
              <div className="absolute -inset-2 bg-gradient-to-br from-indigo-400/20 to-violet-400/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500" />
              <img
                src="/about-page-imgs/abt_img2.webp"
                alt="Collaboration"
                className="relative rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="space-y-10">
            <div className="reveal reveal-delay-1 p-7 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-lg font-bold mb-4">
                G
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">General Meetings</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Our bi-weekly general meetings feature a range of speakers, activities, and outside events. Guest speaker events feature industry leaders and AI experts with Q&amp;A and networking opportunities. We also collaborate with other clubs around CU and Boulder — past events include crypto talks with the Blockchain club, a tech talk with Red Bull athletes, and an entrepreneurship talk with a co-founder of BeReal. Open to all!
              </p>
            </div>

            <div className="reveal reveal-delay-2 p-7 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-lg font-bold mb-4">
                W
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Building Workshops</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Bi-weekly workshop meetings are an opportunity for Analysts and Consultants to work on AI consulting projects and gain technical and business skills in AI. Through guest speakers and our team, members learn principles of software and AI development through real projects for companies around Boulder as well as for the club itself.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Membership Tiers ─────────────────────────────────── */}
      <div ref={memberRef} className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-14">
            <span className="inline-block font-mono text-xs font-semibold tracking-[0.25em] uppercase text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full mb-4">
              Get Involved
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Membership Tiers</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipTiers.map((tier, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} group flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden`}
              >
                <div className={`h-2 w-full bg-gradient-to-r ${tier.accent}`} />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-4">{tier.title}</h3>
                  <ul className="space-y-2.5 flex-1">
                    {tier.perks.map((perk, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <span className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-br ${tier.accent} flex items-center justify-center`}>
                          <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                        </span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="reveal mt-10 text-center text-sm text-gray-500">
            * Prospective Members must attend at least 5 meetings to become an Active Member *
          </p>
        </div>
      </div>

      <ConnectTemplate />
    </div>
  );
}

export default AboutPage;
