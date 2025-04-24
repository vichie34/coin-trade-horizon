
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, Activity, Shield, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CryptoCard from "@/components/CryptoCard";
import PriceChart from "@/components/PriceChart";
import MarketTable from "@/components/MarketTable";

// Mock data for trending assets
const trendingAssets = [
  { name: "Bitcoin", symbol: "BTC", price: 48392.34, change: 2.34, iconUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.png" },
  { name: "Ethereum", symbol: "ETH", price: 2843.12, change: -1.27, iconUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
  { name: "Gold", symbol: "XAU", price: 1876.54, change: 0.43, iconUrl: "https://cdn-icons-png.flaticon.com/512/2534/2534501.png" },
  { name: "Crude Oil", symbol: "OIL", price: 78.34, change: -1.56, iconUrl: "https://cdn-icons-png.flaticon.com/512/2933/2933952.png" }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-crypto-bg-dark relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(55,114,255,0.2),transparent_40%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(0,207,146,0.2),transparent_40%)]"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Trade <span className="gradient-text">Crypto</span>, <span className="gradient-text">Gold</span>, <span className="gradient-text">Oil</span> & More
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Invest in a wide range of assets on the most secure and trusted trading platform. Enjoy low fees, fast transactions, and expert market insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/markets">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explore Markets
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {trendingAssets.map((asset) => (
              <CryptoCard
                key={asset.symbol}
                name={asset.name}
                symbol={asset.symbol}
                price={asset.price}
                change={asset.change}
                iconUrl={asset.iconUrl}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Chart Section */}
      <section className="py-16 px-4 bg-crypto-bg-dark border-y border-crypto-bg-light">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Market Overview</h2>
              <p className="text-muted-foreground">Track prices and trends across multiple asset classes</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to="/markets">
                <Button variant="link" className="text-crypto-blue">
                  View All Markets <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PriceChart assetName="Bitcoin" />
            <PriceChart assetName="Gold" />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 bg-crypto-bg-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose CoinTrade Horizon</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide a secure, transparent, and user-friendly platform for all your trading needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-crypto-bg-card border-crypto-bg-light">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-crypto-blue/10 flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-crypto-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Advanced Trading</h3>
                <p className="text-muted-foreground">
                  Access advanced charts, indicators, and trading options for optimal investment decisions.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-crypto-bg-card border-crypto-bg-light">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-crypto-green/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-crypto-green" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Bank-Level Security</h3>
                <p className="text-muted-foreground">
                  Your assets are protected with enterprise-grade security and cold storage.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-crypto-bg-card border-crypto-bg-light">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-crypto-purple/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-crypto-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Referral Rewards</h3>
                <p className="text-muted-foreground">
                  Earn bonuses when you refer friends and family to our trading platform.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-crypto-bg-card border-crypto-bg-light">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-crypto-yellow/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-crypto-yellow" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Access</h3>
                <p className="text-muted-foreground">
                  Trade from anywhere in the world with 24/7 access to global markets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Top Markets Section */}
      <section className="py-16 px-4 bg-crypto-bg-dark border-t border-crypto-bg-light">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Top Markets</h2>
              <p className="text-muted-foreground">Track performance of the most popular assets</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to="/markets">
                <Button variant="link" className="text-crypto-blue">
                  View All Markets <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <MarketTable type="all" />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-crypto-bg-dark border-t border-crypto-bg-light">
        <div className="container mx-auto">
          <div className="card-gradient rounded-2xl p-8 sm:p-12 md:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Trading?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of traders around the world and access global markets from a single platform.
            </p>
            <Link to="/signup">
              <Button size="lg" className="px-8">
                Create Free Account
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
