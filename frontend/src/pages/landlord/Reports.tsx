import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, PieChart, TrendingUp, Calendar, ArrowRight } from "lucide-react";

export default function LandlordReports() {
  return (
    <Layout role="landlord">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-foreground">Financial Reports</h1>
          <p className="text-muted-foreground mt-2">Generate and download tax-ready financial statements.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Ready to Download</CardTitle>
                <CardDescription>Your automated monthly and annual reports.</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {[
                    { name: "2025 Annual Tax Summary", date: "Jan 01, 2026", type: "PDF" },
                    { name: "December 2025 P&L Statement", date: "Jan 03, 2026", type: "Excel" },
                    { name: "Q4 2025 Occupancy Report", date: "Dec 31, 2025", type: "PDF" },
                    { name: "November 2025 P&L Statement", date: "Dec 05, 2025", type: "Excel" },
                  ].map((report, i) => (
                    <div key={i} className="flex items-center justify-between p-6 hover:bg-muted/30 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium">{report.name}</p>
                          <p className="text-xs text-muted-foreground">Generated on {report.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono bg-muted px-2 py-1 rounded">{report.type}</span>
                        <Button variant="ghost" size="icon">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 border-dashed border-2">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-white border shadow-sm flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Custom Report Builder</h3>
                <p className="text-muted-foreground mb-8 max-w-sm mx-auto">Select custom dates, properties, and metrics to generate a specialized financial statement.</p>
                <Button className="gap-2">
                  Launch Builder
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
             <Card>
              <CardHeader>
                <CardTitle>Quick Insights</CardTitle>
                <CardDescription>Key metrics for Q1 2026</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Operating Margin</span>
                    <span className="font-bold text-success">68%</span>
                  </div>
                  <div className="h-1.5 w-full bg-muted rounded-full">
                    <div className="h-full bg-success w-[68%] rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Maintenance Ratio</span>
                    <span className="font-bold text-amber-600">12%</span>
                  </div>
                  <div className="h-1.5 w-full bg-muted rounded-full">
                    <div className="h-full bg-amber-500 w-[12%] rounded-full"></div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 text-primary border border-primary/10">
                    <TrendingUp className="w-5 h-5" />
                    <p className="text-xs font-medium leading-relaxed">Your portfolio is performing 4% above market average for this zip code.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-emerald-900 text-white border-none overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <PieChart className="w-32 h-32" />
              </div>
              <CardHeader>
                <CardTitle className="text-white">Tax Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-100 text-sm mb-6">Your Schedule E data is automatically synchronized and ready for your accountant.</p>
                <Button className="w-full bg-white text-emerald-900 hover:bg-emerald-50 border-none">Sync with QuickBooks</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
