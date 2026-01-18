import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Building2, ArrowRight, Github, Mail } from "lucide-react";

export default function SignIn() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate auth
    setTimeout(() => {
      navigate("/tenant");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-6">
      <Link
        to="/"
        className="flex items-center gap-2 font-heading font-bold text-2xl text-primary mb-8"
      >
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground">
          <Building2 className="w-6 h-6" />
        </div>
        RentFlow
      </Link>

      <Card className="w-full max-w-md shadow-xl border-none">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="name@example.com" required />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>

            <Button type="submit" className="w-full h-11" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              <Github className="mr-2 w-4 h-4" /> Github
            </Button>
            <Button variant="outline" className="w-full">
              <Mail className="mr-2 w-4 h-4" /> Google
            </Button>
          </div>
        </CardContent>

        <CardFooter className="flex flex-wrap justify-center gap-1 text-sm text-muted-foreground">
          Don't have an account? 
          <Link to="/signup" className="text-primary font-semibold hover:underline">
            Sign up
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
