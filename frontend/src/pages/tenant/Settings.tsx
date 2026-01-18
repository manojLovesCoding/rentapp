import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { User, Bell, Shield, Wallet, Save } from "lucide-react";
import { currentUser } from "@/lib/mockData";

export default function TenantSettings() {
  return (
    <Layout role="tenant">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-2">Manage your account preferences and security.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="md:col-span-1 space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-3 bg-primary/5 text-primary">
              <User className="w-4 h-4" /> Profile
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground">
              <Bell className="w-4 h-4" /> Notifications
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground">
              <Shield className="w-4 h-4" /> Security
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground">
              <Wallet className="w-4 h-4" /> Billing
            </Button>
          </aside>

          <div className="md:col-span-3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your contact details and avatar.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <img src={currentUser.avatar} alt="Avatar" className="w-20 h-20 rounded-full border-2 border-muted" />
                  <Button variant="outline" size="sm">Change Photo</Button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue={currentUser.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" defaultValue={currentUser.email} />
                  </div>
                </div>

                <Button className="gap-2">
                  <Save className="w-4 h-4" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security & Privacy</CardTitle>
                <CardDescription>Control your account security and data reporting.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account.</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between border-t pt-6">
                  <div className="space-y-0.5">
                    <Label className="text-base">Anonymous Reporting</Label>
                    <p className="text-sm text-muted-foreground">Hide your name when reporting to landlords.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
