import { Layout } from "@/components/Layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { tenantData } from "@/lib/mockData";
import { Plus, History, Landmark, Check } from "lucide-react";

export default function TenantPayments() {
  return (
    <Layout role="tenant">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">
              Payments
            </h1>
            <p className="text-muted-foreground mt-2">
              Manage your rent payments and linked bank accounts.
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add Payment Method
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>
                  View and download your past rent receipts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {tenantData.payments.map((payment) => (
                    <div
                      key={payment.id}
                      className="flex items-center justify-between p-4 hover:bg-muted/50 rounded-lg transition-colors border-b last:border-0 border-border"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <History className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium">
                            Rent Payment - {payment.date}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {payment.method}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="font-bold">
                            ${payment.amount.toLocaleString()}
                          </p>
                          <p className="text-xs text-success flex items-center justify-end">
                            <Check className="w-3 h-3 mr-1" /> Completed
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-primary hover:text-primary hover:bg-primary/5"
                        >
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-slate-900 text-white border-none overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Landmark className="w-32 h-32" />
              </div>
              <CardHeader>
                <CardTitle className="text-white">Active Autopay</CardTitle>
                <CardDescription className="text-slate-400">
                  Next withdrawal: Feb 1, 2026
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-400 uppercase tracking-wider">
                      Linked Account
                    </span>
                    <Landmark className="w-4 h-4 text-slate-400" />
                  </div>
                  <p className="font-medium">Chase Bank Savings</p>
                  <p className="text-sm text-slate-400">**** 4242</p>
                </div>
                <Button className="w-full bg-white text-slate-900 hover:bg-slate-100 border-none">
                  Manage Autopay
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Credit Impact</CardTitle>
                <CardDescription>How your payments help</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    On-time rate
                  </span>
                  <span className="text-sm font-bold text-success">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Reporting status
                  </span>
                  <span className="text-sm font-bold text-blue-600">
                    Active
                  </span>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-xs text-muted-foreground leading-relaxed italic">
                    "Consistent reporting of your rent can increase your score
                    by an average of 40 points over 12 months."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
