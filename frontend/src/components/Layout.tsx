import { Link, useLocation } from "react-router-dom";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  CreditCard,
  Building2,
  Users,
  Settings,
  LogOut,
  Menu,
  Bell,
  Search,
  ShieldCheck,
  FileText,
  PieChart,
} from "lucide-react";
import { currentUser } from "@/lib/mockData";

type Role = "tenant" | "landlord" | "admin";

interface LayoutProps {
  children: ReactNode;
  role?: Role;
}

export function Layout({ children, role = "tenant" }: LayoutProps) {
  const { pathname } = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const tenantLinks = [
    { href: "/tenant", label: "Dashboard", icon: LayoutDashboard },
    { href: "/tenant/payments", label: "Payments", icon: CreditCard },
    { href: "/tenant/reporting", label: "Rent Reporting", icon: ShieldCheck },
    { href: "/tenant/settings", label: "Settings", icon: Settings },
  ];

  const landlordLinks = [
    { href: "/landlord", label: "Dashboard", icon: LayoutDashboard },
    { href: "/landlord/properties", label: "Properties", icon: Building2 },
    { href: "/landlord/tenants", label: "Tenants", icon: Users },
    { href: "/landlord/payments", label: "Transactions", icon: CreditCard },
    { href: "/landlord/reports", label: "Reports", icon: FileText },
  ];

  const adminLinks = [
    { href: "/admin", label: "Overview", icon: PieChart },
    { href: "/admin/users", label: "User Management", icon: Users },
    { href: "/admin/compliance", label: "Compliance", icon: ShieldCheck },
    { href: "/admin/settings", label: "Platform Settings", icon: Settings },
  ];

  const links =
    role === "landlord"
      ? landlordLinks
      : role === "admin"
      ? adminLinks
      : tenantLinks;

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:block",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-full flex flex-col">
          <div className="h-16 flex items-center px-6 border-b border-border">
            <div className="flex items-center gap-2 font-heading font-bold text-xl text-primary">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
                <Building2 className="w-5 h-5" />
              </div>
              RentFlow
            </div>
          </div>

          <div className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
            <div className="mb-4 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {role} Workspace
            </div>

            {links.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary/10 text-primary shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-5 h-5",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )}
                  />
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3 px-2 mb-4">
              <img
                src={currentUser.avatar}
                alt="User"
                className="w-8 h-8 rounded-full ring-2 ring-background"
              />
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium truncate">
                  {currentUser.name}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {currentUser.email}
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full justify-start gap-2 text-muted-foreground hover:text-destructive hover:bg-destructive/5"
              asChild
            >
              <Link to="/">
                <LogOut className="w-4 h-4" />
                Sign Out
              </Link>
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-card/80 backdrop-blur-md sticky top-0 z-40 border-b border-border px-6 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileOpen((v) => !v)}
          >
            <Menu className="w-5 h-5" />
          </Button>

          <div className="flex-1 max-w-xl hidden lg:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search transactions, properties, or help..."
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-muted/50 border-transparent focus:bg-background focus:border-primary/20 focus:ring-2 focus:ring-primary/20 transition-all text-sm outline-none"
              />
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="relative text-muted-foreground hover:text-foreground"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-destructive rounded-full border-2 border-card" />
          </Button>
        </header>

        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
