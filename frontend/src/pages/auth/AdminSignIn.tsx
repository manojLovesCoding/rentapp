import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Building2, ArrowRight, ShieldAlert, Lock } from "lucide-react";

export default function AdminSignIn() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate admin authentication
    setTimeout(() => {
      navigate("/admin");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center p-6">
      <Link
        to="/"
        className="flex items-center gap-2 font-heading font-bold text-2xl text-white mb-8"
      >
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
          <Building2 className="w-6 h-6" />
        </div>
        RentFlow Admin
      </Link>

      <Card className="w-full max-w-md shadow-2xl border-white/10 bg-slate-800 text-white">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2 text-primary mb-2">
            <ShieldAlert className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest">Internal Access Only</span>
          </div>
          <CardTitle className="text-2xl font-bold">Admin Portal</CardTitle>
          <CardDescription className="text-slate-400">
            Authorized personnel only. All actions are logged.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-200">Admin Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@rentflow.com"
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-200">Security Key</Label>
              <Input
                id="password"
                type="password"
                className="bg-slate-700 border-slate-600 text-white"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-primary hover:bg-primary/90 text-white border-none"
              disabled={loading}
            >
              <Lock className="mr-2 w-4 h-4" />
              {loading ? "Authenticating..." : "Access Console"}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex justify-center border-t border-white/5 pt-6">
          <Link
            to="/signin"
            className="text-xs text-slate-400 hover:text-white transition-colors underline"
          >
            Return to Standard Sign In
          </Link>
        </CardFooter>
      </Card>

      <p className="mt-8 text-[10px] text-slate-500 uppercase tracking-widest">
        Protected by RentFlow Security Protocol v4.2.0
      </p>
    </div>
  );
}
