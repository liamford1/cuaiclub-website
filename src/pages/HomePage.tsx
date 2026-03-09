import React from 'react';
import { Link } from 'react-router-dom';
import ConnectTemplate from './ConnectTemplate';

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url('home-images/flatirons.webp')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="font-mono text-7xl font-bold mb-6">
              AI CLUB
            </h1>
            <span className="font-mono">[at the University of Colorado]</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-mono font-bold text-gray-900">[Our Mission]</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            At the CU AI Club, our mission is twofold: to educate and empower our student members with cutting-edge knowledge in artificial intelligence, and to provide them with hands-on experience working with real-world businesses. We aim to create opportunities for our students to apply their skills, solve real challenges, and gain practical insights with transformative potential of AI.
            </p>
            <Link to="/about" className="inline-block px-6 py-3 bg-white text-black border-2 border-black rounded-lg hover:bg-gray-100 transition">
              Learn More
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/home-images/homepg.webp"
              alt="AI Workshop"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>

      <ConnectTemplate />
    </div>
  );
}

export default HomePage;