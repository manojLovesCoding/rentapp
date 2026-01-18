import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, ArrowRight, ShieldCheck, User, Home } from "lucide-react";

export default function SignUp() {
  const navigate = useNavigate();
  const [role, setRole] = useState("tenant");
  const [loading, setLoading] = useState(false);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate signup
    setTimeout(() => {
      navigate(role === "tenant" ? "/tenant" : "/landlord");
    }, 1500);
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
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>Join RentFlow to start reporting and paying rent</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>I am a...</Label>
            <Tabs defaultValue="tenant" onValueChange={setRole} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="tenant" className="gap-2">
                  <User className="w-4 h-4" /> Tenant
                </TabsTrigger>
                <TabsTrigger value="landlord" className="gap-2">
                  <Home className="w-4 h-4" /> Landlord
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Alex" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Morgan" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="alex@example.com" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>

            <Button type="submit" className="w-full h-11" disabled={loading}>
              {loading ? "Creating account..." : "Get Started"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-50 border border-blue-100">
            <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <p className="text-xs text-blue-800 leading-relaxed">
              By signing up, you agree to our terms of service and consent to rent reporting to major credit bureaus.
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex flex-wrap justify-center gap-1 text-sm text-muted-foreground">
          Already have an account? 
          <Link to="/signin" className="text-primary font-semibold hover:underline">Sign in</Link>
        </CardFooter>
      </Card>
    </div>
  );
}
