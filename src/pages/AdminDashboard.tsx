
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Users, 
  Settings,
  PieChart, 
  Bell, 
  Shield, 
  BarChart
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SidebarProvider, useSidebar, Sidebar, SidebarContent, SidebarHeader, 
  SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { useToast } from "@/hooks/use-toast";

// Mock data for admin dashboard
const mockUsers = [
  { id: 1, email: "user1@example.com", status: "Active", joinDate: "2025-04-01" },
  { id: 2, email: "user2@example.com", status: "Active", joinDate: "2025-04-05" },
  { id: 3, email: "user3@example.com", status: "Inactive", joinDate: "2025-04-10" },
  { id: 4, email: "user4@example.com", status: "Pending", joinDate: "2025-04-15" },
  { id: 5, email: "user5@example.com", status: "Active", joinDate: "2025-04-20" },
];

const AdminDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  const [isAdmin, setIsAdmin] = useState(true); // In a real app, this would be determined by user role

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    
    // In a real application, you would check if the user has admin privileges
    // For now, we'll just simulate this check
    // Example: checkAdminStatus(user.id).then(isAdmin => setIsAdmin(isAdmin))
  }, [user, navigate]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-crypto-bg-dark text-white">
      <Navbar />
      
      <SidebarProvider defaultOpen={true}>
        <div className="flex flex-grow w-full">
          <AdminSidebar activeTab={activeTab} onTabChange={handleTabChange} />
          
          <main className="flex-1 p-6">
            <header className="mb-6">
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage your platform and users</p>
            </header>
            
            <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-4">
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="bg-crypto-bg-card border-crypto-bg-light">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1,234</div>
                      <p className="text-xs text-muted-foreground">+7% from last month</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-crypto-bg-card border-crypto-bg-light">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active Trades</CardTitle>
                      <BarChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">623</div>
                      <p className="text-xs text-muted-foreground">Last 24 hours</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-crypto-bg-card border-crypto-bg-light">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Platform Volume</CardTitle>
                      <PieChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$2.4M</div>
                      <p className="text-xs text-muted-foreground">Last 30 days</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-crypto-bg-card border-crypto-bg-light">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">System Alerts</CardTitle>
                      <Bell className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">2</div>
                      <p className="text-xs text-muted-foreground">Needs attention</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="bg-crypto-bg-card border-crypto-bg-light">
                    <CardHeader>
                      <CardTitle>User Growth</CardTitle>
                      <CardDescription>New user registrations over time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[200px] flex items-center justify-center bg-crypto-bg-dark/50 rounded-md">
                        <p className="text-muted-foreground">User growth chart will appear here</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-crypto-bg-card border-crypto-bg-light">
                    <CardHeader>
                      <CardTitle>Trading Volume</CardTitle>
                      <CardDescription>Weekly trading volume</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[200px] flex items-center justify-center bg-crypto-bg-dark/50 rounded-md">
                        <p className="text-muted-foreground">Trading volume chart will appear here</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="users" className="space-y-4">
                <Card className="bg-crypto-bg-card border-crypto-bg-light">
                  <CardHeader>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage platform users</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative overflow-x-auto rounded-lg">
                      <table className="w-full text-sm text-left">
                        <thead className="text-xs uppercase bg-crypto-bg-dark">
                          <tr>
                            <th scope="col" className="px-6 py-3">ID</th>
                            <th scope="col" className="px-6 py-3">Email</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                            <th scope="col" className="px-6 py-3">Join Date</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mockUsers.map((user) => (
                            <tr key={user.id} className="border-b border-crypto-bg-light">
                              <td className="px-6 py-4">{user.id}</td>
                              <td className="px-6 py-4">{user.email}</td>
                              <td className="px-6 py-4">
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  user.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                                  user.status === 'Inactive' ? 'bg-red-500/20 text-red-400' :
                                  'bg-yellow-500/20 text-yellow-400'
                                }`}>
                                  {user.status}
                                </span>
                              </td>
                              <td className="px-6 py-4">{user.joinDate}</td>
                              <td className="px-6 py-4">
                                <Button variant="ghost" size="sm" className="mr-2">Edit</Button>
                                <Button variant="destructive" size="sm">Suspend</Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-sm text-muted-foreground">
                        Showing 1 to 5 of 1,234 users
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" disabled>Previous</Button>
                        <Button variant="outline" size="sm">Next</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="security" className="space-y-4">
                <Card className="bg-crypto-bg-card border-crypto-bg-light">
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>Manage platform security</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 rounded-md bg-crypto-bg-dark/50">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">Two-Factor Authentication</h3>
                            <p className="text-sm text-muted-foreground">Require 2FA for all admins</p>
                          </div>
                          <Button>Configure</Button>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-md bg-crypto-bg-dark/50">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">Login Restrictions</h3>
                            <p className="text-sm text-muted-foreground">Manage IP restrictions and access controls</p>
                          </div>
                          <Button>Configure</Button>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-md bg-crypto-bg-dark/50">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">Audit Logs</h3>
                            <p className="text-sm text-muted-foreground">View system audit logs</p>
                          </div>
                          <Button>View Logs</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings" className="space-y-4">
                <Card className="bg-crypto-bg-card border-crypto-bg-light">
                  <CardHeader>
                    <CardTitle>Platform Settings</CardTitle>
                    <CardDescription>Configure global platform settings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 rounded-md bg-crypto-bg-dark/50">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">Trading Fees</h3>
                            <p className="text-sm text-muted-foreground">Configure platform trading fees</p>
                          </div>
                          <Button>Edit</Button>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-md bg-crypto-bg-dark/50">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">Email Templates</h3>
                            <p className="text-sm text-muted-foreground">Manage system email templates</p>
                          </div>
                          <Button>Edit</Button>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-md bg-crypto-bg-dark/50">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">Maintenance Mode</h3>
                            <p className="text-sm text-muted-foreground">Enable platform maintenance mode</p>
                          </div>
                          <Button variant="destructive">Enable</Button>
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

interface AdminSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const AdminSidebar = ({ activeTab, onTabChange }: AdminSidebarProps) => {
  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b border-crypto-bg-light">
        <h2 className="text-xl font-bold">Admin Panel</h2>
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
              isActive={activeTab === "users"}
              onClick={() => onTabChange("users")}
            >
              <Users />
              <span>Users</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton 
              isActive={activeTab === "security"}
              onClick={() => onTabChange("security")}
            >
              <Shield />
              <span>Security</span>
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
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-crypto-bg-light">
        <Button variant="outline" className="w-full" onClick={() => window.location.href = "/dashboard"}>
          User Dashboard
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminDashboard;
