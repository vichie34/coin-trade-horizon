
import { useState } from "react";
import { 
  ArrowRight, 
  ArrowUp, 
  ArrowDown,
  ChevronDown,
  Info
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PriceChart from "@/components/PriceChart";
import { useToast } from "@/hooks/use-toast";

const Trade = () => {
  const [selectedAsset, setSelectedAsset] = useState("bitcoin");
  const [amount, setAmount] = useState("");
  const [leverage, setLeverage] = useState([5]);
  const { toast } = useToast();
  
  const handleTrade = (type: "buy" | "sell") => {
    // This is a placeholder for actual trading logic
    toast({
      title: `Order ${type === "buy" ? "Placed" : "Sold"}`,
      description: `To implement actual trading, please connect to Supabase and integrate with an exchange API.`,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-16 px-4 bg-crypto-bg-dark">
        <div className="container mx-auto pt-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-4">Trade</h1>
            <p className="text-muted-foreground max-w-3xl">
              Execute trades across multiple markets with advanced tools and real-time data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Chart */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-crypto-bg-card border-crypto-bg-light">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-crypto-bg-dark flex items-center justify-center">
                        <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="Bitcoin" className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle>BTC/USD</CardTitle>
                        <CardDescription>Bitcoin</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">$48,392.34</div>
                      <div className="text-sm text-crypto-green flex items-center justify-end">
                        <ArrowUp className="h-3 w-3 mr-1" />
                        2.34%
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <PriceChart assetName="Bitcoin" />
                </CardContent>
              </Card>
              
              <Card className="bg-crypto-bg-card border-crypto-bg-light">
                <CardHeader>
                  <CardTitle>Market Depth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-6">
                    <div className="flex-1">
                      <h4 className="text-sm font-medium mb-2 text-crypto-red">Sell Orders</h4>
                      <div className="space-y-1">
                        {[48400, 48450, 48500, 48550, 48600].map((price, index) => (
                          <div key={`sell-${index}`} className="flex justify-between text-sm">
                            <span>${price.toLocaleString()}</span>
                            <span>{(Math.random() * 3 + 0.5).toFixed(4)} BTC</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium mb-2 text-crypto-green">Buy Orders</h4>
                      <div className="space-y-1">
                        {[48350, 48300, 48250, 48200, 48150].map((price, index) => (
                          <div key={`buy-${index}`} className="flex justify-between text-sm">
                            <span>${price.toLocaleString()}</span>
                            <span>{(Math.random() * 3 + 0.5).toFixed(4)} BTC</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column: Trading Form */}
            <div className="space-y-6">
              <Card className="bg-crypto-bg-card border-crypto-bg-light">
                <CardHeader className="pb-3">
                  <CardTitle>Place Order</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="spot" className="w-full">
                    <TabsList className="grid grid-cols-2 mb-4">
                      <TabsTrigger value="spot">Spot</TabsTrigger>
                      <TabsTrigger value="futures">Futures</TabsTrigger>
                    </TabsList>
                    <TabsContent value="spot" className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Select Asset</label>
                        <Select 
                          defaultValue={selectedAsset}
                          onValueChange={setSelectedAsset}
                        >
                          <SelectTrigger className="bg-crypto-bg-dark border-crypto-bg-light">
                            <SelectValue placeholder="Select Asset" />
                          </SelectTrigger>
                          <SelectContent className="bg-crypto-bg-dark border-crypto-bg-light">
                            <SelectItem value="bitcoin">Bitcoin (BTC)</SelectItem>
                            <SelectItem value="ethereum">Ethereum (ETH)</SelectItem>
                            <SelectItem value="gold">Gold (XAU)</SelectItem>
                            <SelectItem value="oil">Crude Oil (OIL)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Amount (USD)</label>
                        <Input 
                          type="number" 
                          placeholder="0.00"
                          className="bg-crypto-bg-dark border-crypto-bg-light"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                        />
                      </div>
                      
                      <div className="flex flex-col xs:flex-row gap-2 pt-2">
                        <Button 
                          className="flex-1 bg-crypto-green hover:bg-crypto-green/90"
                          onClick={() => handleTrade("buy")}
                        >
                          <ArrowUp className="h-4 w-4 mr-2" />
                          Buy
                        </Button>
                        <Button 
                          className="flex-1 bg-crypto-red hover:bg-crypto-red/90"
                          onClick={() => handleTrade("sell")}
                        >
                          <ArrowDown className="h-4 w-4 mr-2" />
                          Sell
                        </Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="futures" className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Select Asset</label>
                        <Select defaultValue="bitcoin">
                          <SelectTrigger className="bg-crypto-bg-dark border-crypto-bg-light">
                            <SelectValue placeholder="Select Asset" />
                          </SelectTrigger>
                          <SelectContent className="bg-crypto-bg-dark border-crypto-bg-light">
                            <SelectItem value="bitcoin">Bitcoin (BTC)</SelectItem>
                            <SelectItem value="ethereum">Ethereum (ETH)</SelectItem>
                            <SelectItem value="gold">Gold (XAU)</SelectItem>
                            <SelectItem value="oil">Crude Oil (OIL)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Amount (USD)</label>
                        <Input 
                          type="number" 
                          placeholder="0.00"
                          className="bg-crypto-bg-dark border-crypto-bg-light"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <label className="text-sm font-medium">Leverage</label>
                          <span className="text-sm font-medium">{leverage}x</span>
                        </div>
                        <Slider 
                          defaultValue={[5]} 
                          max={20} 
                          step={1} 
                          min={1}
                          onValueChange={setLeverage}
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>1x</span>
                          <span>20x</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col xs:flex-row gap-2 pt-2">
                        <Button 
                          className="flex-1 bg-crypto-green hover:bg-crypto-green/90"
                          onClick={() => handleTrade("buy")}
                        >
                          <ArrowUp className="h-4 w-4 mr-2" />
                          Long
                        </Button>
                        <Button 
                          className="flex-1 bg-crypto-red hover:bg-crypto-red/90"
                          onClick={() => handleTrade("sell")}
                        >
                          <ArrowDown className="h-4 w-4 mr-2" />
                          Short
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
              
              <Card className="bg-crypto-bg-card border-crypto-bg-light">
                <CardHeader className="pb-3">
                  <CardTitle>Open Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    <p>No open orders</p>
                    <p className="text-sm mt-1">Your active orders will appear here</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-crypto-bg-card border-crypto-bg-light">
                <CardHeader className="pb-3">
                  <CardTitle>Trade History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    <p>No recent trades</p>
                    <p className="text-sm mt-1">Your trade history will appear here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Trade;
