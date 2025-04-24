
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarketTable from "@/components/MarketTable";
import PriceChart from "@/components/PriceChart";

const Markets = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-16 px-4 bg-crypto-bg-dark">
        <div className="container mx-auto pt-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-4">Markets</h1>
            <p className="text-muted-foreground max-w-3xl">
              Explore real-time prices and market data across a wide range of assets including cryptocurrencies, precious metals, and commodities.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Market Data */}
            <div className="lg:w-2/3 space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-2xl font-bold">Live Prices</h2>
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search markets..." 
                    className="bg-crypto-bg-card border-crypto-bg-light pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="bg-crypto-bg-card border border-crypto-bg-light">
                  <TabsTrigger value="all">All Assets</TabsTrigger>
                  <TabsTrigger value="crypto">Cryptocurrencies</TabsTrigger>
                  <TabsTrigger value="commodities">Commodities</TabsTrigger>
                  <TabsTrigger value="favorites">Favorites</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="pt-4">
                  <MarketTable type="all" />
                </TabsContent>
                <TabsContent value="crypto" className="pt-4">
                  <MarketTable type="crypto" />
                </TabsContent>
                <TabsContent value="commodities" className="pt-4">
                  <MarketTable type="commodity" />
                </TabsContent>
                <TabsContent value="favorites" className="pt-4">
                  <MarketTable type="crypto" />
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Market Charts */}
            <div className="lg:w-1/3 space-y-6">
              <h2 className="text-2xl font-bold">Market Trends</h2>
              <PriceChart assetName="Bitcoin" />
              <PriceChart assetName="Gold" />
              <PriceChart assetName="Crude Oil" />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Markets;
