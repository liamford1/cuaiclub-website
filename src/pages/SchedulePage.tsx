import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import upcomingEventsData from "../json_data/upcomingEvents.json";

const { events } = upcomingEventsData;

function SchedulePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url(/schedule-imgs/schedule-img.png)`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-6xl font-mono font-bold text-white mb-4">Upcoming Events</h1>
              <p className="text-xl font-mono text-gray-200">[We invite you to join us for our upcoming meetings!]</p>
            </div>
          </div>
        </div>
      </div>

      {/* Events section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-xl p-6 border-2 border-gray-200 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 text-sm font-semibold text-white bg-black rounded-full">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="h-5 w-5 mr-2 text-black" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="h-5 w-5 mr-2 text-black" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="h-5 w-5 mr-2 text-black" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfQmxYOv_Rd-oQ6cpvXiod9RAOOoveV6chn_oKluHYmXJSRkQ/viewform?usp=dialog" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-white text-black border-2 border-black rounded-lg hover:bg-gray-100 transition inline-block text-center"
                  >
                    RSVP
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SchedulePage;