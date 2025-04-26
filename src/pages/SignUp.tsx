
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Eye, EyeOff, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { signUp } from "@/lib/auth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    const { error } = await signUp(email, password);
    
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
      setLoading(false);
    } else {
      setEmailSent(true);
      toast({
        title: "Success",
        description: "Please check your email to confirm your account",
      });
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center px-4 py-20 bg-crypto-bg-dark">
        <div className="w-full max-w-md">
          <Card className="bg-crypto-bg-card border-crypto-bg-light">
            <CardHeader className="space-y-1 text-center">
              <div className="w-16 h-16 bg-crypto-bg-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-crypto-green" />
              </div>
              <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
              <CardDescription>
                Enter your email below to create your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              {emailSent ? (
                <div className="space-y-4 text-center">
                  <div className="p-4 bg-green-100/10 rounded-md border border-green-200/20">
                    <h3 className="font-medium text-lg mb-2">Verification Email Sent!</h3>
                    <p className="text-muted-foreground">
                      We've sent a confirmation link to <span className="font-medium">{email}</span>.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Please check your inbox and click the link to confirm your email.
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground mt-4">
                    <p>Didn't receive an email?</p>
                    <p className="mt-1">
                      • Check your spam folder<br />
                      • Make sure the email address is correct<br />
                      • The confirmation link expires after 10 minutes
                    </p>
                    <Button 
                      variant="link" 
                      className="mt-2 p-0 h-auto"
                      onClick={() => setEmailSent(false)}
                    >
                      Try again with a different email
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-crypto-bg-dark border-crypto-bg-light"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="bg-crypto-bg-dark border-crypto-bg-light pr-10"
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="bg-crypto-bg-dark border-crypto-bg-light pr-10"
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={loading}
                    >
                      {loading ? "Creating account..." : "Create Account"}
                    </Button>
                  </form>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <Link to="/login" className="text-crypto-blue hover:underline">
                        Sign In
                      </Link>
                    </p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SignUp;
