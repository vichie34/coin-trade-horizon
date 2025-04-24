
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  User, 
  ChevronDown
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-crypto-bg-dark/95 backdrop-blur-sm border-b border-crypto-bg-light" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-crypto-blue to-crypto-purple flex items-center justify-center">
                <span className="text-white font-bold text-xl">CH</span>
              </div>
              <span className="text-xl font-bold">CoinTrade Horizon</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/markets" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
              Markets
            </Link>
            <Link to="/trade" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
              Trade
            </Link>
            <Link to="/earn" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
              Earn
            </Link>
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-muted-foreground hover:text-white transition-colors">
                More <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute right-0 mt-2 w-48 rounded-md hidden group-hover:block bg-crypto-bg-card border border-border shadow-md">
                <div className="py-1">
                  <Link to="/about" className="block px-4 py-2 text-sm text-muted-foreground hover:text-white hover:bg-crypto-bg-light">
                    About Us
                  </Link>
                  <Link to="/faq" className="block px-4 py-2 text-sm text-muted-foreground hover:text-white hover:bg-crypto-bg-light">
                    FAQ
                  </Link>
                  <Link to="/support" className="block px-4 py-2 text-sm text-muted-foreground hover:text-white hover:bg-crypto-bg-light">
                    Support
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" size="sm">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button variant="default" size="sm">Sign Up</Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center p-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-crypto-bg-dark border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/markets" 
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-white hover:bg-crypto-bg-light"
              onClick={() => setMobileMenuOpen(false)}
            >
              Markets
            </Link>
            <Link 
              to="/trade" 
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-white hover:bg-crypto-bg-light"
              onClick={() => setMobileMenuOpen(false)}
            >
              Trade
            </Link>
            <Link 
              to="/earn" 
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-white hover:bg-crypto-bg-light"
              onClick={() => setMobileMenuOpen(false)}
            >
              Earn
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-white hover:bg-crypto-bg-light"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/faq" 
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-white hover:bg-crypto-bg-light"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              to="/support" 
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-white hover:bg-crypto-bg-light"
              onClick={() => setMobileMenuOpen(false)}
            >
              Support
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-border">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <User className="h-8 w-8 rounded-full p-1 bg-crypto-bg-light" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium">Account</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Link 
                to="/login" 
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-white hover:bg-crypto-bg-light"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link 
                to="/signup" 
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-white hover:bg-crypto-bg-light"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
