import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">Have questions? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-600">Engineering Center<br />1111 Engineering Drive<br />Boulder, CO 80309</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-600">cuaicollective@colorado.edu</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-600">(303) 492-1411</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;