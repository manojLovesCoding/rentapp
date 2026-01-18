import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Cog, Shield, Database, Globe, Save } from "lucide-react";

export default function AdminSettings() {
  return (
    <Layout role="admin">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-foreground">Platform Settings</h1>
          <p className="text-muted-foreground mt-2">Configure global platform behavior and system limits.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="md:col-span-1 space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-3 bg-primary/5 text-primary">
              <Globe className="w-4 h-4" /> Global
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground">
              <Shield className="w-4 h-4" /> Security
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground">
              <Database className="w-4 h-4" /> API
            </Button>
          </aside>

          <div className="md:col-span-3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Configuration</CardTitle>
                <CardDescription>Global variables and platform status.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Maintenance Mode</Label>
                    <p className="text-sm text-muted-foreground">Disable all frontend access for scheduled maintenance.</p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">New User Signups</Label>
                    <p className="text-sm text-muted-foreground">Allow new tenants and landlords to register.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Platform Fee (%)</Label>
                    <Input type="number" defaultValue="1.5" className="max-w-[200px]" />
                  </div>
                  <div className="space-y-2">
                    <Label>Support Email</Label>
                    <Input defaultValue="support@rentflow.com" />
                  </div>
                </div>

                <Button className="gap-2">
                  <Save className="w-4 h-4" />
                  Apply Settings
                </Button>
              </CardContent>
            </Card>

            <Card className="border-destructive/20 bg-destructive/5">
              <CardHeader>
                <CardTitle className="text-destructive">Danger Zone</CardTitle>
                <CardDescription>Irreversible platform actions.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="destructive" className="w-full">Flush System Cache</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
