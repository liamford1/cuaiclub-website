import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import SchedulePage from './pages/SchedulePage';
import MembersPage from './pages/MembersPage';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Updated to include both home and schedule paths for white text
  const whiteTextPaths = ['/', '/schedule'];
  const textColor = whiteTextPaths.includes(location.pathname) ? "text-white" : "text-black";
  const iconColor = whiteTextPaths.includes(location.pathname) ? "text-white" : "text-black";

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-black/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center transition md:-ml-28 -ml-4"
          >
            <img
              src="cuaic-logo.png"
              alt="CU AI Club Logo"
              className="h-12 md:h-16"
            />
          </Link>

          {/* Hamburger Menu (Mobile Only) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`block md:hidden ${iconColor}`}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 -mr-28">
            <Link
              to="/"
              className={`flex items-center space-x-1 text-lg transition ${
                whiteTextPaths.includes(location.pathname) ? "text-white" : "text-black"
              } hover:text-blue-200`}
            >
              <span>Home</span>
            </Link>
            <Link
              to="/about"
              className={`flex items-center space-x-1 text-lg transition ${textColor} hover:text-blue-200`}
            >
              <span>About</span>
            </Link>
            <Link
              to="/team"
              className={`flex items-center space-x-1 text-lg transition ${textColor} hover:text-blue-200`}
            >
              <span>Team</span>
            </Link>
            <Link
              to="/schedule"
              className={`flex items-center space-x-1 text-lg transition ${textColor} hover:text-blue-200`}
            >
              <span>Schedule</span>
            </Link>
            <Link
              to="/members"
              className={`flex items-center space-x-1 text-lg transition ${textColor} hover:text-blue-200`}
            >
              <span>Member Page</span>
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/team"
              className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              to="/schedule"
              className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule
            </Link>
            <Link
              to="/members"
              className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Member Page
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/members" element={<MembersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;