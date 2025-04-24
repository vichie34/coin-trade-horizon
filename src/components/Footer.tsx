
import { Link } from "react-router-dom";
import { 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Github,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-crypto-bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-crypto-blue to-crypto-purple flex items-center justify-center">
                <span className="text-white font-bold text-xl">CH</span>
              </div>
              <span className="text-xl font-bold">CoinTrade Horizon</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              The most trusted crypto trading platform that enables you to invest in cryptocurrencies, precious metals, and more.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/trade" className="text-muted-foreground hover:text-white transition-colors">
                  Spot Trading
                </Link>
              </li>
              <li>
                <Link to="/earn" className="text-muted-foreground hover:text-white transition-colors">
                  Staking
                </Link>
              </li>
              <li>
                <Link to="/markets" className="text-muted-foreground hover:text-white transition-colors">
                  Market Analysis
                </Link>
              </li>
              <li>
                <Link to="/gold" className="text-muted-foreground hover:text-white transition-colors">
                  Gold & Precious Metals
                </Link>
              </li>
              <li>
                <Link to="/oil" className="text-muted-foreground hover:text-white transition-colors">
                  Oil Trading
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-muted-foreground hover:text-white transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Subscribe</h4>
            <p className="text-muted-foreground mb-4">
              Stay updated with our latest news and offers.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-crypto-bg-dark border-crypto-bg-light focus:border-crypto-blue"
              />
              <Button variant="default" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CoinTrade Horizon. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/legal" className="text-muted-foreground hover:text-white transition-colors">
              Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
