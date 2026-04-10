import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { User, Heart, Bookmark, FolderPlus, LogOut, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-[#191919] border-b border-gray-800 sticky top-0 z-50">       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Purple vertical bar */}
                <rect x="4" y="14" width="10" height="22" rx="3" fill="#8B5CF6" />
                {/* Orange vertical bar */}
                <rect x="24" y="10" width="11" height="17" rx="3" fill="#EA580C" />
                {/* Green horizontal bar */}
                <rect x="4" y="4" width="31" height="10" rx="3" fill="#10B981" />
                {/* Blue dot */}
                <circle cx="29" cy="32" r="3" fill="#60A5FA" />
                <circle cx="29" cy="32" r="4.5" stroke="#3B82F6" strokeWidth="1.5" />
              </svg>
              <div className="flex flex-col justify-center -space-y-0.5">
                <span className="text-white font-extrabold text-xl leading-tight tracking-tight">Template</span>
                <span className="text-[#8B5CF6] font-extrabold text-xl leading-tight tracking-tight">Hub</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-transparent text-white border border-white hover:bg-gray-800 transition-colors px-4 py-2 rounded-md text-sm font-medium">
              Browse
            </button>
            {isAuthenticated ? (
              <div className="flex items-center space-x-3 relative" ref={dropdownRef}>
                <Link to="/create" className="hidden md:flex items-center space-x-1 bg-[#10B981] hover:bg-[#059669] text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors mr-2">
                  <FolderPlus className="w-4 h-4" />
                  <span>Create Template</span>
                </Link>
                
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 px-3 py-1.5 rounded-full transition-all focus:ring-2 focus:ring-[#8B5CF6] focus:outline-none"
                >
                  <div className="bg-gradient-to-tr from-[#8B5CF6] to-[#EA580C] w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm">
                    {user?.email?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isProfileOpen && (
                  <div className="absolute top-12 right-0 mt-2 w-64 bg-[#2a2a2a] border border-gray-700/50 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-3 border-b border-gray-700/50 mb-1">
                      <p className="text-sm font-medium text-white truncate">{user?.email}</p>
                      <p className="text-xs text-gray-400 mt-0.5">Free Plan</p>
                    </div>
                    
                    <div className="px-2 py-1">
                      <Link to="/profile" onClick={() => setIsProfileOpen(false)} className="flex items-center space-x-3 w-full px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <User className="w-4 h-4 text-gray-400" />
                        <span>My Profile</span>
                      </Link>
                      <Link to="/wishlist" onClick={() => setIsProfileOpen(false)} className="flex items-center space-x-3 w-full px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <Heart className="w-4 h-4 text-[#F43F5E]" />
                        <span>Wishlist & Favorites</span>
                      </Link>
                      <Link to="/library" onClick={() => setIsProfileOpen(false)} className="flex items-center space-x-3 w-full px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <Bookmark className="w-4 h-4 text-[#10B981]" />
                        <span>My Library</span>
                      </Link>
                    </div>
                    
                    <div className="border-t border-gray-700/50 mt-1 pt-1 px-2">
                      <button 
                        onClick={() => {
                          setIsProfileOpen(false);
                          logout();
                        }}
                        className="flex items-center space-x-3 w-full px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="bg-white text-gray-900 px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors">
                Get started
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
