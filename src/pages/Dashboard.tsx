
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  LineChart, 
  Wallet, 
  Bell, 
  Settings,
  User 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SidebarProvider, useSidebar, Sidebar, SidebarContent, SidebarHeader, 
  SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-crypto-bg-dark text-white">
      <Navbar />
      
      <SidebarProvider defaultOpen={true}>
        <div className="flex flex-grow w-full">
          <DashboardSidebar activeTab={activeTab} onTabChange={handleTabChange} />
          
          <main className="flex-1 p-6">
            <header className="mb-6">
              <h1 className="text-2xl font-bold">Welcome, {user.email?.split('@')[0]}</h1>
              <p className="text-muted-foreground">Manage your crypto portfolio and activities</p>
            </header>
            
            <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-4">
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="bg-crypto-bg-card border-crypto-bg-light">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                      <Wallet className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$1,234.56</div>
                      <p className="text-xs text-muted-foreground">+2.5% from last month</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-crypto-bg-card border-crypto-bg-light">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active Assets</CardTitle>
                      <LineChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">6</div>
                      <p className="text-xs text-muted-foreground">Bitcoin, Ethereum, etc.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-crypto-bg-card border-crypto-bg-light">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Recent Trades</CardTitle>
                      <Settings className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">12</div>
                      <p className="text-xs text-muted-foreground">Last 30 days</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-crypto-bg-card border-crypto-bg-light">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Notifications</CardTitle>
                      <Bell className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3</div>
                      <p className="text-xs text-muted-foreground">New alerts</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="bg-crypto-bg-card border-crypto-bg-light">
                    <CardHeader>
                      <CardTitle>Portfolio Performance</CardTitle>
                      <CardDescription>Your asset performance over time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[200px] flex items-center justify-center bg-crypto-bg-dark/50 rounded-md">
                        <p className="text-muted-foreground">Performance chart will appear here</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-crypto-bg-card border-crypto-bg-light">
                    <CardHeader>
                      <CardTitle>Recent Transactions</CardTitle>
                      <CardDescription>Your latest 5 transactions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center p-2 rounded-md bg-crypto-bg-dark/30">
                            <div className="mr-4 rounded-full bg-crypto-bg-dark p-2">
                              {i % 2 === 0 ? (
                                <LineChart className="h-4 w-4 text-crypto-blue" />
                              ) : (
                                <Wallet className="h-4 w-4 text-crypto-purple" />
                              )}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">{i % 2 === 0 ? "Buy Bitcoin" : "Sell Ethereum"}</p>
                              <p className="text-xs text-muted-foreground">
                                {new Date().toLocaleDateString()}
                              </p>
                            </div>
                            <div className="text-sm font-medium">
                              {i % 2 === 0 ? "+$250.00" : "-$180.00"}
                            </div>
                          </div>
                        ))}
                        <Button variant="outline" className="w-full mt-2">View All Transactions</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="portfolio" className="space-y-4">
                <Card className="bg-crypto-bg-card border-crypto-bg-light">
                  <CardHeader>
                    <CardTitle>Portfolio</CardTitle>
                    <CardDescription>Manage your crypto assets</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center bg-crypto-bg-dark/50 rounded-md">
                      <p className="text-muted-foreground">Portfolio content will appear here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="trading" className="space-y-4">
                <Card className="bg-crypto-bg-card border-crypto-bg-light">
                  <CardHeader>
                    <CardTitle>Trading</CardTitle>
                    <CardDescription>Buy and sell cryptocurrencies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center bg-crypto-bg-dark/50 rounded-md">
                      <p className="text-muted-foreground">Trading interface will appear here</p>
                    </div>
                    <div className="mt-4 flex justify-center gap-4">
                      <Button onClick={() => navigate("/trade")}>Go to Full Trading View</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings" className="space-y-4">
                <Card className="bg-crypto-bg-card border-crypto-bg-light">
                  <CardHeader>
                    <CardTitle>Settings</CardTitle>
                    <CardDescription>Manage your account settings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center bg-crypto-bg-dark/50 rounded-md">
                      <p className="text-muted-foreground">Settings will appear here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="profile" className="space-y-4">
                <Card className="bg-crypto-bg-card border-crypto-bg-light">
                  <CardHeader>
                    <CardTitle>Profile</CardTitle>
                    <CardDescription>Manage your personal information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row items-center gap-4">
                        <div className="w-24 h-24 rounded-full bg-crypto-bg-dark flex items-center justify-center">
                          <User className="h-12 w-12 text-crypto-blue" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">{user.email?.split('@')[0] || "User"}</h3>
                          <p className="text-muted-foreground">{user.email}</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Change Avatar
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid gap-4">
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-muted-foreground">{user.email}</p>
                        </div>
                        <div>
                          <p className="font-medium">Member Since</p>
                          <p className="text-muted-foreground">
                            {user.created_at ? new Date(user.created_at).toLocaleDateString() : "Unknown"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </SidebarProvider>
      
      <Footer />
    </div>
  );
};

interface DashboardSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const DashboardSidebar = ({ activeTab, onTabChange }: DashboardSidebarProps) => {
  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b border-crypto-bg-light">
        <h2 className="text-xl font-bold">Dashboard</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              isActive={activeTab === "overview"}
              onClick={() => onTabChange("overview")}
            >
              <LayoutDashboard />
              <span>Overview</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton 
              isActive={activeTab === "portfolio"}
              onClick={() => onTabChange("portfolio")}
            >
              <LineChart />
              <span>Portfolio</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton 
              isActive={activeTab === "trading"}
              onClick={() => onTabChange("trading")}
            >
              <Wallet />
              <span>Trading</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton 
              isActive={activeTab === "settings"}
              onClick={() => onTabChange("settings")}
            >
              <Settings />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton 
              isActive={activeTab === "profile"}
              onClick={() => onTabChange("profile")}
            >
              <User />
              <span>Profile</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-crypto-bg-light">
        <Button variant="outline" className="w-full" onClick={() => window.location.href = "/markets"}>
          Go to Markets
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default Dashboard;
