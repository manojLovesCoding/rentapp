import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, TrendingUp, Info, CheckCircle2, ChevronRight, BarChart3, Building } from "lucide-react";


export default function TenantReporting() {
  return (
    <Layout role="tenant">
      <div className="space-y-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-primary to-blue-800 p-8 lg:p-12 text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-4xl font-heading font-bold mb-4">Rent Reporting is Active</h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              We are currently reporting your verified rent payments to Experian, TransUnion, and Equifax. Your consistency is building your financial future.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" /> Experian
              </div>
              <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" /> TransUnion
              </div>
              <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" /> Equifax
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="overflow-hidden border-none shadow-xl shadow-blue-900/5">
            <CardHeader className="bg-slate-50 border-b">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Score Projection
              </CardTitle>
              <CardDescription>Based on your current 12-month payment streak</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-4xl font-bold text-primary">780</p>
                  <p className="text-sm text-muted-foreground font-medium">Projected Score (Dec 2026)</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-success">+38</p>
                  <p className="text-sm text-muted-foreground font-medium">Estimated Lift</p>
                </div>
              </div>
              <div className="relative h-4 w-full bg-slate-100 rounded-full overflow-hidden mb-4">
                <div className="absolute top-0 left-0 h-full bg-primary/20 w-full"></div>
                <div className="absolute top-0 left-0 h-full bg-primary w-[75%] rounded-r-full transition-all duration-1000"></div>
              </div>
              <p className="text-xs text-muted-foreground text-center">Your projected score is an estimate based on continuing your current payment behavior.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" />
                Reported Property
              </CardTitle>
              <CardDescription>Currently verified verification source</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center border text-primary">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold">Sunset Apartments</p>
                  <p className="text-sm text-muted-foreground">123 Sunset Blvd, Unit 4B</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-success/10 text-success border border-success/20">Verified</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-700">Landlord Approved</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Total Reported Payments</span>
                  <span className="font-bold">14</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Reporting Since</span>
                  <span className="font-bold">Nov 2024</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">Update Verification Details</Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>How it works</CardTitle>
            <CardDescription>The path from rent payment to credit history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "Payment Made", desc: "You pay your rent through the RentFlow portal.", icon: "01" },
                { title: "Verification", desc: "We verify the funds and landlord receipt.", icon: "02" },
                { title: "Bureau Data", desc: "Secure data transmission to credit bureaus.", icon: "03" },
                { title: "Score Impact", desc: "Bureaus update your profile with on-time data.", icon: "04" },
              ].map((step, i) => (
                <div key={i} className="relative group">
                  <div className="text-4xl font-heading font-black text-slate-100 absolute -top-4 -left-2 z-0 transition-colors group-hover:text-primary/5">{step.icon}</div>
                  <div className="relative z-10">
                    <h4 className="font-bold mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
