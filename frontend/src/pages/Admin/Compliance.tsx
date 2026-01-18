import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, AlertCircle, FileText, CheckCircle2, History, Scale } from "lucide-react";

export default function AdminCompliance() {
  return (
    <Layout role="admin">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-foreground">Compliance & Disputes</h1>
          <p className="text-muted-foreground mt-2">Monitor credit reporting integrity and resolve system disputes.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                  Active Disputes
                </CardTitle>
                <CardDescription>Rent reporting challenges requiring manual review.</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {[
                    { id: "DSP-442", tenant: "Michael Ross", reason: "Incorrect Amount", status: "High Priority", date: "2h ago" },
                    { id: "DSP-441", tenant: "Elena Gilbert", reason: "Date Mismatch", status: "Normal", date: "5h ago" },
                    { id: "DSP-440", tenant: "Jordan Smith", reason: "Landlord Unresponsive", status: "Reviewing", date: "1d ago" },
                  ].map((dispute) => (
                    <div key={dispute.id} className="p-6 flex items-center justify-between hover:bg-muted/30 transition-colors">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                          <Scale className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-sm">{dispute.id} - {dispute.tenant}</p>
                          <p className="text-xs text-muted-foreground">{dispute.reason}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <Badge variant={dispute.status === "High Priority" ? "destructive" : "secondary"}>{dispute.status}</Badge>
                          <p className="text-[10px] text-muted-foreground mt-1">{dispute.date}</p>
                        </div>
                        <Button variant="ghost" size="sm">Investigate</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  Bureau Sync Logs
                </CardTitle>
                <CardDescription>Daily transmission logs to major credit agencies.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['Experian', 'TransUnion', 'Equifax'].map(bureau => (
                    <div key={bureau} className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-success" />
                        <span className="font-medium">{bureau}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-muted-foreground">Last sync: 2h ago</span>
                        <Button variant="outline" size="sm">View Payload</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-slate-900 text-white border-none relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                <FileText className="w-32 h-32" />
              </div>
              <CardHeader>
                <CardTitle className="text-white">Audit Trail</CardTitle>
                <CardDescription className="text-slate-400">SOC2 Type II Compliance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                   <div className="flex items-center gap-2 text-sm text-slate-300">
                     <History className="w-4 h-4 text-primary" />
                     Logs immutable for 7 years
                   </div>
                   <div className="flex items-center gap-2 text-sm text-slate-300">
                     <History className="w-4 h-4 text-primary" />
                     All admin actions tracked
                   </div>
                </div>
                <Button className="w-full bg-primary border-none">Export Audit Log</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
