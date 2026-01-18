import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Download, Filter, Search, ArrowUpRight, ArrowDownLeft } from "lucide-react";

const transactions = [
  { id: "TX-1001", date: "Jan 15, 2026", tenant: "Alex Morgan", property: "Sunset Apartments", amount: "$2,400", method: "ACH", status: "Completed" },
  { id: "TX-1002", date: "Jan 14, 2026", tenant: "Sarah Chen", property: "Highland Lofts", amount: "$4,500", method: "ACH", status: "Completed" },
  { id: "TX-1003", date: "Jan 12, 2026", tenant: "Elena Gilbert", property: "Highland Lofts", amount: "$2,600", method: "Credit Card", status: "Processing" },
  { id: "TX-1004", date: "Jan 10, 2026", tenant: "Jordan Smith", property: "Sunset Apartments", amount: "$2,200", method: "ACH", status: "Completed" },
  { id: "TX-1005", date: "Jan 08, 2026", tenant: "Michael Ross", property: "Marina View", amount: "$1,800", method: "ACH", status: "Failed" },
];

export default function LandlordPayments() {
  return (
    <Layout role="landlord">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">Transactions</h1>
            <p className="text-muted-foreground mt-2">Track all incoming rent payments and payouts.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Button className="gap-2">
              <Download className="w-4 h-4" />
              Export CSV
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-primary text-primary-foreground border-none">
            <CardHeader className="pb-2">
              <CardDescription className="text-primary-foreground/70">Total Payouts (MTD)</CardDescription>
              <CardTitle className="text-2xl font-bold">$12,450.00</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" />
                Next payout scheduled for Jan 20th
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Pending Verification</CardDescription>
              <CardTitle className="text-2xl font-bold">$4,200.00</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                3 transactions processing
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Processing Fees</CardDescription>
              <CardTitle className="text-2xl font-bold">$142.10</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                <ArrowDownLeft className="w-3 h-3 text-destructive" />
                -1.2% from average
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Detailed log of rent payments and platform fees.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Tenant</TableHead>
                  <TableHead>Property</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((tx) => (
                  <TableRow key={tx.id}>
                    <TableCell className="font-mono text-xs">{tx.id}</TableCell>
                    <TableCell className="text-sm">{tx.date}</TableCell>
                    <TableCell className="font-medium">{tx.tenant}</TableCell>
                    <TableCell className="text-sm">{tx.property}</TableCell>
                    <TableCell className="font-bold">{tx.amount}</TableCell>
                    <TableCell className="text-sm">{tx.method}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={
                          tx.status === "Completed" ? "secondary" : 
                          tx.status === "Processing" ? "outline" : "destructive"
                        }
                      >
                        {tx.status}
                      </Badge>
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
