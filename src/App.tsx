import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import SchedulePage from './pages/SchedulePage';
import CollaborationsPage from './pages/Collaborations';
import MembersPage from './pages/MembersPage';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 60);
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);

  const navLinks = [
    { to: '/',               label: 'Home' },
    { to: '/about',          label: 'About' },
    { to: '/team',           label: 'Team' },
    { to: '/schedule',       label: 'Schedule' },
    { to: '/collaborations', label: 'Collaborations' },
  ];

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          scrolled
            ? 'bg-slate-900/90 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-gradient-to-b from-black/60 to-transparent'
        }`}
      >
        <div className="w-full px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="cuaic-logo.png" alt="CU AI Club" className="h-12 md:h-14" />
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="block md:hidden text-white p-1 rounded-lg hover:bg-white/10 transition"
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive(to)
                      ? 'text-white bg-white/15'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-slate-900 shadow-2xl transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
            <img src="cuaic-logo.png" alt="CU AI Club" className="h-10" />
            <button onClick={() => setIsMenuOpen(false)} className="text-white/70 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col px-4 py-6 gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive(to)
                    ? 'text-white bg-indigo-600'
                    : 'text-white/75 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/members"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 px-4 py-3 rounded-xl text-base font-medium text-white/75 hover:text-white hover:bg-white/10 transition-all duration-200 border border-white/15"
            >
              Members Portal
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/"               element={<HomePage />} />
          <Route path="/about"          element={<AboutPage />} />
          <Route path="/team"           element={<TeamPage />} />
          <Route path="/schedule"       element={<SchedulePage />} />
          <Route path="/collaborations" element={<CollaborationsPage />} />
          <Route path="/members"        element={<MembersPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
