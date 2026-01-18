import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users, Search, Filter, ShieldCheck, Mail, ShieldAlert, MoreHorizontal } from "lucide-react";

const users = [
  { id: 1, name: "Alex Morgan", email: "alex@example.com", role: "Tenant", status: "Verified", joined: "Jan 12, 2026" },
  { id: 2, name: "Sarah Connor", email: "sarah@landlord.com", role: "Landlord", status: "Verified", joined: "Jan 10, 2026" },
  { id: 3, name: "Jordan Smith", email: "jordan@example.com", role: "Tenant", status: "Pending", joined: "Jan 15, 2026" },
  { id: 4, name: "Michael Scott", email: "michael@dundermifflin.com", role: "Landlord", status: "Flagged", joined: "Jan 08, 2026" },
  { id: 5, name: "Elena Gilbert", email: "elena@example.com", role: "Tenant", status: "Verified", joined: "Jan 14, 2026" },
];

export default function AdminUsers() {
  return (
    <Layout role="admin">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">User Management</h1>
            <p className="text-muted-foreground mt-2">Oversee all platform participants and verify identities.</p>
          </div>
          <Button className="gap-2">
            <Mail className="w-4 h-4" />
            Broadcast Message
          </Button>
        </div>

        <div className="flex items-center gap-4 bg-card p-4 rounded-xl border">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search by name, email, or role..." className="pl-10" />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" /> Filters
          </Button>
        </div>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="pl-6">User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Joined Date</TableHead>
                  <TableHead className="text-right pr-6">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="pl-6 py-4">
                      <div className="font-medium">{user.name}</div>
                      <div className="text-xs text-muted-foreground">{user.email}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-normal capitalize">{user.role}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {user.status === "Verified" && <ShieldCheck className="w-4 h-4 text-success" />}
                        {user.status === "Flagged" && <ShieldAlert className="w-4 h-4 text-destructive" />}
                        <span className="text-sm">{user.status}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{user.joined}</TableCell>
                    <TableCell className="text-right pr-6">
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
