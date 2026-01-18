import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { tenantData } from "@/lib/mockData";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { ArrowUpRight, CheckCircle2, AlertCircle, Clock, CreditCard, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function TenantDashboard() {
  return (
    <Layout role="tenant">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-foreground">Welcome back, Alex</h1>
          <p className="text-muted-foreground mt-2">Here's your rent reporting overview and payment status.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="h-full border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardDescription>Next Payment Due</CardDescription>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  ${tenantData.rentAmount.toLocaleString()}
                  <span className="text-xs font-normal px-2 py-1 bg-amber-100 text-amber-700 rounded-full">Feb 1st</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full mt-2" size="sm">Pay Now</Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="h-full border-l-4 border-l-success shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardDescription>Credit Score</CardDescription>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  {tenantData.creditScore}
                  <span className="text-sm font-medium text-success flex items-center">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    +12 pts
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">Updated 2 days ago from TransUnion</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Card className="h-full border-l-4 border-l-blue-400 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardDescription>Rent Reporting</CardDescription>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  Active
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">Your payments are being reported to all 3 bureaus.</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Section */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Credit Score History</CardTitle>
                <CardDescription>Your score improvement over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={tenantData.creditHistory}>
                    <defs>
                      <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="month" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                      dy={10}
                    />
                    <YAxis 
                      domain={[650, 800]} 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="score" 
                      stroke="hsl(var(--success))" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorScore)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Payment History Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Payments</CardTitle>
                <CardDescription>Last 3 transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tenantData.payments.map((payment, i) => (
                    <div key={payment.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-transparent hover:border-border transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-border">
                          <CreditCard className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Rent Payment</p>
                          <p className="text-xs text-muted-foreground">{payment.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold">-${payment.amount}</p>
                        <p className="text-xs text-success flex items-center justify-end gap-1">
                          Completed
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 text-xs">View All History</Button>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground border-none relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldCheck className="w-32 h-32" />
              </div>
              <CardHeader>
                <CardTitle className="text-white">Reporting Status</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 text-sm mb-4">You've successfully reported 12 on-time payments in a row!</p>
                <div className="flex items-center gap-2">
                  <div className="h-2 flex-1 bg-blue-900 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-accent rounded-full"></div>
                  </div>
                  <span className="text-xs font-mono">85%</span>
                </div>
                <p className="text-[10px] text-blue-200 mt-1">Goal: 100% on-time consistency</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
