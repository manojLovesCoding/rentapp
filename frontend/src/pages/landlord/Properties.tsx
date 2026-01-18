import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { landlordData } from "@/lib/mockData";
import { Building2, Plus, MapPin, Users, MoreVertical, Search, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function LandlordProperties() {
  return (
    <Layout role="landlord">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">Properties</h1>
            <p className="text-muted-foreground mt-2">Manage your real estate portfolio and unit availability.</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add Property
          </Button>
        </div>

        <div className="flex items-center gap-4 bg-card p-4 rounded-xl border">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search by name, address, or manager..." className="pl-10" />
          </div>
          <Button variant="outline">Filters</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {landlordData.properties.map((property, i) => (
            <motion.div 
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all border-none shadow-md group">
                <div className="h-40 bg-slate-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold text-lg">{property.name}</p>
                    <p className="text-xs flex items-center gap-1 opacity-90">
                      <MapPin className="w-3 h-3" />
                      {property.address}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-md border-white/20 text-white hover:bg-white/40">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Units</p>
                      <p className="text-xl font-bold">{property.units}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Occupied</p>
                      <p className="text-xl font-bold text-success">{property.occupied}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Occupancy Rate</span>
                      <span className="font-semibold">{Math.round((property.occupied/property.units)*100)}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full" 
                        style={{ width: `${(property.occupied/property.units)*100}%` }}
                      ></div>
                    </div>
                  </div>

                  <Button variant="ghost" className="w-full mt-6 gap-2 text-primary hover:text-primary hover:bg-primary/5">
                    View Unit Details
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
