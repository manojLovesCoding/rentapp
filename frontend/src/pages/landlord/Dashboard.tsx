import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { landlordData } from "@/lib/mockData";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Building2, Users, TrendingUp, MoreHorizontal, DollarSign } from "lucide-react";

export default function LandlordDashboard() {
  return (
    <Layout role="landlord">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">Property Overview</h1>
            <p className="text-muted-foreground mt-2">Manage your properties and track revenue performance.</p>
          </div>
          <Button className="gap-2">
            <Building2 className="w-4 h-4" />
            Add Property
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Revenue (Jan)</CardDescription>
              <CardTitle className="text-2xl font-bold">${landlordData.totalRevenue.toLocaleString()}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-success flex items-center font-medium">
                <TrendingUp className="w-3 h-3 mr-1" />
                +12.5% from last month
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Occupancy Rate</CardDescription>
              <CardTitle className="text-2xl font-bold">{landlordData.occupancyRate}%</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                24/25 Units Occupied
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Pending Requests</CardDescription>
              <CardTitle className="text-2xl font-bold">3</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-amber-600 font-medium">
                Requires action
              </div>
            </CardContent>
          </Card>

           <Card>
            <CardHeader className="pb-2">
              <CardDescription>Avg Rent</CardDescription>
              <CardTitle className="text-2xl font-bold">$2,100</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                Per unit average
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Revenue Analytics</CardTitle>
              <CardDescription>Monthly revenue performance across all properties</CardDescription>
            </CardHeader>
            <CardContent className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={landlordData.revenueHistory} barSize={40}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => `$${value/1000}k`}
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <Tooltip 
                    cursor={{ fill: 'hsl(var(--muted)/0.4)' }}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <Bar 
                    dataKey="amount" 
                    fill="hsl(var(--primary))" 
                    radius={[4, 4, 0, 0]} 
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Property Status</CardTitle>
                <CardDescription>Occupancy by location</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {landlordData.properties.map((property) => (
                    <div key={property.id} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-medium group-hover:text-primary transition-colors">{property.name}</p>
                          <p className="text-xs text-muted-foreground">{property.address}</p>
                        </div>
                        <span className="text-sm font-bold">{property.occupied}/{property.units}</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-success rounded-full transition-all duration-500" 
                          style={{ width: `${(property.occupied / property.units) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full mt-8">View All Properties</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
