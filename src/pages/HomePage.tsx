import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Briefcase, ChevronDown } from 'lucide-react';
import ConnectTemplate from './ConnectTemplate';
import { useScrollReveal } from '../utils/useScrollReveal';

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Cutting-Edge AI',
    desc: 'Stay at the forefront of AI through workshops, expert talks, and hands-on projects with real impact.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Vibrant Community',
    desc: 'Join a thriving network of students, researchers, and industry professionals passionate about AI.',
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Real-World Experience',
    desc: 'Work on live AI consulting projects for businesses around Boulder and build your professional portfolio.',
  },
];

function HomePage() {
  const missionRef = useScrollReveal();

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <div
        className="relative h-screen min-h-[640px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('home-images/flatirons.webp')` }}
      >
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/75 via-slate-900/50 to-slate-900/80" />

        {/* Decorative ambient orbs */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[100px] orb-1 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[80px] orb-2 pointer-events-none" />

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-4xl w-full">
            <p className="hero-animate font-mono text-blue-300 text-sm md:text-base tracking-[0.3em] uppercase mb-6">
              University of Colorado Boulder
            </p>
            <h1 className="hero-animate-delay font-mono text-6xl md:text-8xl font-bold mb-6 gradient-text drop-shadow-2xl leading-tight">
              CU AI CLUB
            </h1>
            <p className="hero-animate-delay-2 text-gray-300 text-lg md:text-xl mb-10 font-light tracking-wide">
              Educating · Empowering · Innovating
            </p>
            <div className="hero-animate-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold text-sm shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 hover:opacity-95 transition-all duration-300"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/schedule"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white border border-white/25 rounded-full font-semibold text-sm hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                Upcoming Events
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-animate-delay-3 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
          <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 bounce-y" />
        </div>
      </div>

      {/* ── Mission Section ───────────────────────────────────── */}
      <div ref={missionRef} className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="space-y-6">
              <div className="reveal">
                <span className="inline-block font-mono text-xs font-semibold tracking-[0.25em] uppercase text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full mb-3">
                  Who We Are
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Our Mission
                </h2>
              </div>
              <p className="reveal reveal-delay-1 text-lg text-gray-600 leading-relaxed">
                At the CU AI Club, our mission is twofold: to educate and empower our student members with cutting-edge knowledge in artificial intelligence, and to provide them with hands-on experience working with real-world businesses.
              </p>
              <p className="reveal reveal-delay-2 text-lg text-gray-600 leading-relaxed">
                We aim to create opportunities for our students to apply their skills, solve real challenges, and gain practical insights with the transformative potential of AI.
              </p>
              <div className="reveal reveal-delay-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:opacity-95 transition-all duration-300"
                >
                  About the Club <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="reveal reveal-delay-2">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <img
                  src="/home-images/homepg.webp"
                  alt="AI Workshop"
                  className="relative rounded-2xl shadow-2xl w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* ── Feature Cards ───────────────────────────────── */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((item, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} group p-8 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mb-5 group-hover:scale-110 pulse-glow transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ConnectTemplate />
    </div>
  );
}

export default HomePage;
