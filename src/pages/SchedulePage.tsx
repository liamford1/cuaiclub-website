import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    title: "Bi-Weekly Meeting",
    date: "Every Tuesday",
    time: "6:15 PM - 7:30 PM",
    location: "Koelbel 352",
    description: "Networking, AI News and discussion, Hands-on workshop covering various AI topics and practical implementations.",
    category: "Meeting"
  },
  {
    title: "Guest Speaker: CourseWand AI",
    date: "Feb 4, 2024",
    time: "6:15 PM - 7:30 PM",
    location: "Koelbel 352",
    description: "THIS WEEK! Join us for an insightful talk from the founders of CourseWand AI!",
    category: "Speaker"
  },
  {
    title: "Professional Building Workshop: Creating Websites with Bolt AI",
    date: "Feb 4, 2024",
    time: "6:15 PM - 7:30 PM",
    location: "Koelbel 352",
    description: "THIS WEEK! Learn how to make your own website in just minutes with AI!",
    category: "Professional Building"
  }
];

function SchedulePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-mono font-bold text-gray-900 mb-4">[Upcoming Events]</h1>
          <p className="text-xl font-mono text-gray-600">[We invite you to join us for our upcoming meetings!]</p>
        </div>

        <div className="grid gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl p-6 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="h-5 w-5 mr-2 text-blue-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQmxYOv_Rd-oQ6cpvXiod9RAOOoveV6chn_oKluHYmXJSRkQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer"className="px-6 py-2 bg-white text-black border-2 border-black rounded-lg hover:bg-gray-100 transition inline-block text-center">
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

export default SchedulePage