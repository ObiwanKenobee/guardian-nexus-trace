
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Vote, ChevronDown, User, LogOut, Settings, BarChart2 } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuGroup, 
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

// Mock user state - would normally come from auth context
const useAuth = () => {
  // Mock - in real app would check JWT/localStorage/Auth provider
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  // Check localStorage on mount to simulate persistent auth
  useEffect(() => {
    const userData = localStorage.getItem('guardian-user');
    if (userData) {
      const user = JSON.parse(userData);
      setIsLoggedIn(true);
      setUserRole(user.role);
      setUserName(user.name);
    }
  }, []);

  const login = (role: string, name: string) => {
    setIsLoggedIn(true);
    setUserRole(role);
    setUserName(name);
    localStorage.setItem('guardian-user', JSON.stringify({ role, name }));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    setUserName(null);
    localStorage.removeItem('guardian-user');
  };

  return {
    isLoggedIn,
    userRole,
    userName,
    login,
    logout
  };
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const auth = useAuth();

  const defaultNavItems = [
    { name: "Home", path: "/" },
    { name: "Authentication", path: "/auth" },
    { name: "Demo", path: "/demo" },
  ];

  // Role-specific nav items
  const roleBasedNavItems = auth.isLoggedIn
    ? [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Traceability", path: "/traceability" },
        ...(auth.userRole === 'admin' ? [{ name: "Admin", path: "/admin" }] : []),
        { name: "Engagement", path: "/engagement" },
      ]
    : defaultNavItems;

  return (
    <nav className="fixed w-full z-50 bg-guardian-dark/90 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-guardian-teal flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-white font-bold text-xl">Guardian-IO Nexus™</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {roleBasedNavItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path} 
              className={`text-white/80 hover:text-white transition-colors px-2 ${
                location.pathname === item.path ? 'text-white font-medium' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/vote">
            <Button variant="outline" className="text-guardian-teal border-guardian-teal hover:bg-guardian-teal hover:text-white flex items-center gap-2">
              <Vote size={16} />
              Vote
            </Button>
          </Link>
          
          {auth.isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="ml-2 flex items-center gap-2">
                  <User size={16} />
                  <span>{auth.userName || 'User'}</span>
                  <ChevronDown size={14} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mt-1">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <BarChart2 className="mr-2 h-4 w-4" />
                    <span>Analytics</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => {
                  auth.logout();
                  window.location.href = '/';
                }}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/auth">
              <Button className="bg-guardian-teal hover:bg-guardian-teal/90 text-white">Sign In</Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-guardian-dark/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {roleBasedNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-white/80 hover:text-white transition-colors py-2 border-b border-white/10 ${
                  location.pathname === item.path ? 'text-white font-medium' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/vote" 
              className="flex items-center gap-2 text-guardian-teal py-2 border-b border-white/10"
              onClick={() => setIsOpen(false)}
            >
              <Vote size={16} />
              Vote on Features
            </Link>
            
            {auth.isLoggedIn ? (
              <>
                <div className="py-2 text-white font-medium flex items-center gap-2 border-b border-white/10">
                  <User size={16} />
                  {auth.userName || 'User'}
                </div>
                <button 
                  className="flex items-center gap-2 text-red-400 py-2"
                  onClick={() => {
                    auth.logout();
                    setIsOpen(false);
                    window.location.href = '/';
                  }}
                >
                  <LogOut size={16} />
                  Log out
                </button>
              </>
            ) : (
              <Link 
                to="/auth" 
                className="bg-guardian-teal text-white py-2 px-4 rounded text-center"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
