import React, { useState } from 'react';
import { Linkedin, Instagram, FileText } from 'lucide-react';
import homepgImage from '../imgs/home-images/homepg.png';
import flatirons from '../imgs/home-images/flatirons.png';
import { Link } from 'react-router-dom';

function HomePage() {
  const [suggestion, setSuggestion] = useState(''); // State for the suggestion input
  const [submitted, setSubmitted] = useState(false); // State for showing success message
  const [error, setError] = useState(false); // State for showing error message

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    setSubmitted(false); // Reset submitted state
    setError(false); // Reset error state

    try {
      const response = await fetch(
        'http://ai-club-backend-env.eba-uti6erfh.us-west-1.elasticbeanstalk.com/submit-suggestion',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ suggestion }),
        }
      );

      if (response.ok) {
        setSubmitted(true); // Show success message
        setSuggestion(''); // Clear the input field
      } else {
        const data = await response.json();
        console.error('Error submitting suggestion:', data.error);
        setError(true); // Show error message
      }
    } catch (err) {
      console.error('Error submitting suggestion:', err);
      setError(true); // Show error message
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${flatirons})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="font-mono text-7xl font-bold mb-6">AI CLUB</h1>
            <span className="font-mono">[at the University of Colorado]</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-mono font-bold text-gray-900">
              [Our Mission]
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At the CU AI Club, our mission is twofold: to educate and empower
              our student members with cutting-edge knowledge in artificial
              intelligence, and to provide them with hands-on experience working
              with real-world businesses. We aim to create opportunities for our
              students to apply their skills, solve real challenges, and gain
              practical insights with transformative potential of AI.
            </p>
            <Link
              to="/about"
              className="inline-block px-6 py-3 bg-white text-black border-2 border-black rounded-lg hover:bg-gray-100 transition"
            >
              Learn More
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src={homepgImage}
              alt="AI Workshop"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Suggestion Form Section */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h2 className="text-3xl font-mono font-bold text-gray-900 text-center mb-6">
          Submit Your Suggestions
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto"
        >
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="Write your suggestion here..."
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
          {submitted && (
            <p className="mt-4 text-green-600 text-center">
              Your suggestion has been submitted successfully!
            </p>
          )}
          {error && (
            <p className="mt-4 text-red-600 text-center">
              There was an error submitting your suggestion. Please try again.
            </p>
          )}
        </form>
      </div>

      {/* Connect With Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold text-center mb-12">
            [Connect With Us!]
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            <a
              href="https://www.linkedin.com/company/cuaiclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition"
            >
              <Linkedin className="h-8 w-8 text-blue-600 mb-3" />
              <span className="text-gray-800 font-semibold">LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/aiclubcu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition"
            >
              <Instagram className="h-8 w-8 text-blue-600 mb-3" />
              <span className="text-gray-800 font-semibold">Instagram</span>
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfQmxYOv_Rd-oQ6cpvXiod9RAOOoveV6chn_oKluHYmXJSRkQ/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition"
            >
              <FileText className="h-8 w-8 text-blue-600 mb-3" />
              <span className="text-gray-800 font-semibold">Interest Form</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
