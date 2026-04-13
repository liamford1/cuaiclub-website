import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import upcomingEventsData from '../json_data/upcomingEvents.json';
import { useScrollReveal } from '../utils/useScrollReveal';

const { events } = upcomingEventsData;

const categoryColor: Record<string, string> = {
  'General Meeting':  'from-blue-500 to-indigo-500',
  'Workshop':         'from-indigo-500 to-violet-500',
  'Guest Speaker':    'from-sky-500 to-blue-500',
  'Collaboration':    'from-violet-500 to-purple-600',
};

function getGradient(category: string) {
  return categoryColor[category] ?? 'from-blue-500 to-indigo-500';
}

function SchedulePage() {
  const heroRef  = useScrollReveal();
  const listRef  = useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <div
        className="relative h-[460px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(/schedule-imgs/schedule-img.webp)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/80" />
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-blue-600/15 rounded-full blur-[70px] orb-1 pointer-events-none" />

        <div ref={heroRef} className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <div className="text-center">
            <div className="reveal">
              <span className="inline-block font-mono text-xs font-semibold tracking-[0.25em] uppercase text-blue-300 bg-blue-500/15 px-3 py-1 rounded-full mb-4">
                What's Coming Up
              </span>
            </div>
            <h1 className="reveal reveal-delay-1 text-5xl md:text-6xl font-mono font-bold text-white mb-4">
              Upcoming Events
            </h1>
            <p className="reveal reveal-delay-2 text-gray-300 text-lg max-w-xl mx-auto">
              We invite you to join us for our upcoming meetings and events!
            </p>
          </div>
        </div>
      </div>

      {/* ── Events List ──────────────────────────────────────── */}
      <div ref={listRef} className="max-w-4xl mx-auto px-6 py-20">
        {events.length === 0 ? (
          <div className="reveal text-center py-20">
            <p className="text-gray-400 text-lg">No upcoming events scheduled yet. Check back soon!</p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className={`reveal reveal-delay-${(index % 4) + 1} group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden`}
              >
                {/* Gradient top bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${getGradient(event.category)}`} />

                <div className="p-7">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      {/* Category badge */}
                      <span className={`inline-block text-xs font-semibold text-white px-3 py-1 rounded-full bg-gradient-to-r ${getGradient(event.category)} mb-4`}>
                        {event.category}
                      </span>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>

                      {event.news && (
                        <p className="text-gray-600 text-sm mb-2 leading-relaxed">{event.news}</p>
                      )}
                      {event.prof_building && (
                        <p className="text-gray-600 text-sm mb-2 leading-relaxed">{event.prof_building}</p>
                      )}
                      {event.guest_speaker && (
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{event.guest_speaker}</p>
                      )}

                      {/* Meta */}
                      <div className="flex flex-wrap gap-4 mt-4">
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Calendar className="w-4 h-4 text-indigo-500" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Clock className="w-4 h-4 text-indigo-500" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <MapPin className="w-4 h-4 text-indigo-500" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SchedulePage;
