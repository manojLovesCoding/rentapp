import { Button } from "@/components/ui/button";

import { ArrowRight, ShieldCheck, Building2, Users, CheckCircle2, TrendingUp, Lock } from "lucide-react";
import generatedHero from "../assets/generated-hero.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-heading font-bold text-xl text-primary">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
              <Building2 className="w-5 h-5" />
            </div>
            RentFlow
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Features</a>
            <a href="#" className="hover:text-primary transition-colors">For Landlords</a>
            <a href="#" className="hover:text-primary transition-colors">For Tenants</a>
            <a href="#" className="hover:text-primary transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/tenant">Log In</Link>
            </Button>
            <Button asChild>
              <Link to="/tenant">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Now reporting to all 3 major credit bureaus
            </div>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold tracking-tight text-primary leading-[1.1]">
              Make your rent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">count for more.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              RentFlow reports your on-time rent payments to credit bureaus, helping you build credit history automatically. Landlords get paid faster, Tenants get credit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all" asChild>
                <Link to="/tenant">
                  I'm a Tenant
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white/50 backdrop-blur-sm" asChild>
                <Link to="/landlord">I'm a Landlord</Link>
              </Button>
            </div>
            <div className="pt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                Bank-level Security
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                Experian & TransUnion
              </div>
            </div>
          </div>
          
          <div className="relative lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-white/20">
             <img 
               src={generatedHero} 
               alt="App Dashboard Preview" 
               className="object-cover w-full h-full scale-105 hover:scale-100 transition-transform duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-20"></div>
             
             {/* Floating UI Cards */}
             <div className="absolute bottom-12 left-12 right-12 bg-white/90 backdrop-blur-xl p-6 rounded-xl border border-white/40 shadow-xl animate-in slide-in-from-bottom-10 fade-in duration-700">
               <div className="flex items-center justify-between mb-4">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                     <TrendingUp className="w-5 h-5" />
                   </div>
                   <div>
                     <p className="font-bold text-primary">Credit Score Up!</p>
                     <p className="text-xs text-muted-foreground">Updated just now</p>
                   </div>
                 </div>
                 <span className="text-2xl font-bold text-success">+42 pts</span>
               </div>
               <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                 <div className="h-full bg-success w-[70%] rounded-full"></div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">Trust is our currency</h2>
            <p className="text-muted-foreground text-lg">We've built a platform that aligns incentives for everyone involved in the rental ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Credit Reporting</h3>
              <p className="text-slate-600 leading-relaxed">
                Automatically report on-time rent payments to major credit bureaus to boost your score safely.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-100 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Secure Payments</h3>
              <p className="text-slate-600 leading-relaxed">
                Bank-level encryption ensures your financial data is always protected and payments are verified.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-purple-100 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Landlord Verified</h3>
              <p className="text-slate-600 leading-relaxed">
                Direct integration with property management systems to ensure payment accuracy and history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Role Selection */}
      <section className="py-24 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="rounded-3xl bg-primary p-12 text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors"></div>
               <div className="relative z-10">
                 <h3 className="text-3xl font-heading font-bold mb-4">For Tenants</h3>
                 <p className="text-blue-100 mb-8 max-w-md">Build your credit score just by paying rent. Simple setup, automatic reporting, and full transparency.</p>
                 <Button variant="secondary" size="lg" asChild>
                   <Link to="/tenant">Launch Tenant Portal</Link>
                 </Button>
               </div>
             </div>

             <div className="rounded-3xl bg-slate-100 p-12 text-slate-900 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-slate-200 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-slate-300 transition-colors"></div>
               <div className="relative z-10">
                 <h3 className="text-3xl font-heading font-bold mb-4">For Landlords</h3>
                 <p className="text-slate-600 mb-8 max-w-md">Streamline rent collection and attract high-quality tenants who care about their credit.</p>
                 <Button variant="default" size="lg" asChild>
                   <Link to="/landlord">Launch Landlord Portal</Link>
                 </Button>
               </div>
             </div>
          </div>
          
           <div className="mt-8 text-center">
             <Button variant="ghost" className="text-muted-foreground hover:text-primary" asChild>
                <Link to="/admin">View Admin Dashboard (Demo)</Link>
             </Button>
           </div>
        </div>
      </section>
      
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-sm">
          <p>© 2026 RentFlow Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
