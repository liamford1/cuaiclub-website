import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import SchedulePage from './pages/SchedulePage';
import MembersPage from './pages/MembersPage';
import logo from './imgs/black_logo.png';

function Navbar() {
  const location = useLocation();
  
  // If on the home page, text is white; otherwise, it's black
  const textColor = location.pathname === "/" ? "text-white" : "text-black";

  return (
    <nav className="fixed w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center transition -ml-28">
            <img 
              src={logo} 
              alt="CU AI Club Logo" 
              className="h-36" 
            />
          </Link>
          <div className="flex space-x-8 -mr-28">
            <Link 
              to="/" 
              className={`flex items-center space-x-1 text-lg transition ${location.pathname === "/" ? "text-white" : "text-black"} hover:text-blue-200`}
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
