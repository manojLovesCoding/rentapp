import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users, Search, UserPlus, Mail, Phone, MoreHorizontal } from "lucide-react";

const tenants = [
  { id: 1, name: "Alex Morgan", property: "Sunset Apartments", unit: "4B", status: "Active", rent: "$2,400", balance: "$0" },
  { id: 2, name: "Jordan Smith", property: "Sunset Apartments", unit: "1A", status: "Active", rent: "$2,200", balance: "$2,200" },
  { id: 3, name: "Sarah Chen", property: "Highland Lofts", unit: "Penthouse", status: "Active", rent: "$4,500", balance: "$0" },
  { id: 4, name: "Michael Ross", property: "Marina View", unit: "12", status: "Past Due", rent: "$1,800", balance: "$1,800" },
  { id: 5, name: "Elena Gilbert", property: "Highland Lofts", unit: "3C", status: "Active", rent: "$2,600", balance: "$0" },
];

export default function LandlordTenants() {
  return (
    <Layout role="landlord">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">Tenants</h1>
            <p className="text-muted-foreground mt-2">Oversee your residents and their lease status.</p>
          </div>
          <Button className="gap-2">
            <UserPlus className="w-4 h-4" />
            Invite Tenant
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardTitle>Resident Directory</CardTitle>
                <CardDescription>A total of {tenants.length} active leases across your portfolio.</CardDescription>
              </div>
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search tenants..." className="pl-10" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Property / Unit</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Rent Amount</TableHead>
                  <TableHead>Balance</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tenants.map((tenant) => (
                  <TableRow key={tenant.id} className="group">
                    <TableCell>
                      <div className="font-medium">{tenant.name}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <button className="text-muted-foreground hover:text-primary transition-colors"><Mail className="w-3 h-3" /></button>
                        <button className="text-muted-foreground hover:text-primary transition-colors"><Phone className="w-3 h-3" /></button>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">{tenant.property}</div>
                      <div className="text-xs text-muted-foreground">Unit {tenant.unit}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={tenant.status === "Active" ? "secondary" : "destructive"}>
                        {tenant.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">{tenant.rent}</TableCell>
                    <TableCell>
                      <span className={tenant.balance !== "$0" ? "text-destructive font-bold" : "text-muted-foreground"}>
                        {tenant.balance}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
