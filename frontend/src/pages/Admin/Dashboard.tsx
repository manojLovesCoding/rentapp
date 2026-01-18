import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { adminData } from "@/lib/mockData";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { CheckCircle2, AlertTriangle, UserCheck, Server } from "lucide-react";

const data = [
  { name: 'Active Reporters', value: 850, color: 'hsl(var(--primary))' },
  { name: 'Pending Setup', value: 200, color: 'hsl(var(--muted))' },
  { name: 'Errors/Issues', value: 190, color: 'hsl(var(--destructive))' },
];

export default function AdminDashboard() {
  return (
    <Layout role="admin">
      <div className="space-y-8">
         <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">System Overview</h1>
            <p className="text-muted-foreground mt-2">Platform health, compliance, and user metrics.</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-success/10 text-success rounded-full border border-success/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
            </span>
            <span className="text-sm font-medium">All Systems Operational</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Users</CardDescription>
              <CardTitle className="text-2xl font-bold">{adminData.totalUsers}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground flex items-center">
                <UserCheck className="w-3 h-3 mr-1" />
                Active Accounts
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>System Uptime</CardDescription>
              <CardTitle className="text-2xl font-bold">{adminData.systemHealth}%</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-success flex items-center">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Last 30 days
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>API Latency</CardDescription>
              <CardTitle className="text-2xl font-bold">24ms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground flex items-center">
                <Server className="w-3 h-3 mr-1" />
                Global Average
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Disputes</CardDescription>
              <CardTitle className="text-2xl font-bold">12</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-amber-600 flex items-center">
                <AlertTriangle className="w-3 h-3 mr-1" />
                Open Cases
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <Card>
            <CardHeader>
              <CardTitle>Rent Reporting Status</CardTitle>
              <CardDescription>Distribution of user reporting states</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                     contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 ml-4">
                {data.map(item => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm font-medium">{item.name}</span>
                    <span className="text-xs text-muted-foreground">({item.value})</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent System Activity</CardTitle>
              <CardDescription>Latest platform events and logs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {adminData.recentActivity.map((activity) => (
                  <div key={activity.id} className="flex gap-4">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary/40 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">{activity.action}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground">{activity.user}</span>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4 text-xs">View System Logs</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
