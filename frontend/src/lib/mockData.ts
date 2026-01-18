import { Plus, Home, CreditCard, Users, Settings, Activity, ShieldCheck, PieChart, FileText, Bell, Search, LogOut, Building } from "lucide-react";

export const currentUser = {
  name: "Alex Morgan",
  email: "alex@example.com",
  role: "tenant", // Default for demo, can be switched in UI
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

export const tenantData = {
  rentAmount: 2400,
  nextDue: "2026-02-01",
  status: "active",
  creditScore: 742,
  creditHistory: [
    { month: "Aug", score: 710 },
    { month: "Sep", score: 715 },
    { month: "Oct", score: 722 },
    { month: "Nov", score: 728 },
    { month: "Dec", score: 735 },
    { month: "Jan", score: 742 },
  ],
  payments: [
    { id: "PAY-001", date: "2026-01-01", amount: 2400, status: "completed", method: "Chase Bank ****4242" },
    { id: "PAY-002", date: "2025-12-01", amount: 2400, status: "completed", method: "Chase Bank ****4242" },
    { id: "PAY-003", date: "2025-11-01", amount: 2400, status: "completed", method: "Chase Bank ****4242" },
  ]
};

export const landlordData = {
  totalRevenue: 14500,
  occupancyRate: 92,
  properties: [
    { id: 1, name: "Sunset Apartments", address: "123 Sunset Blvd", units: 12, occupied: 11 },
    { id: 2, name: "Highland Lofts", address: "45 Highland Ave", units: 8, occupied: 8 },
    { id: 3, name: "Marina View", address: "88 Marina Way", units: 5, occupied: 4 },
  ],
  revenueHistory: [
    { month: "Aug", amount: 12000 },
    { month: "Sep", amount: 12500 },
    { month: "Oct", amount: 12400 },
    { month: "Nov", amount: 13800 },
    { month: "Dec", amount: 14200 },
    { month: "Jan", amount: 14500 },
  ]
};

export const adminData = {
  totalUsers: 1240,
  activeReports: 850,
  systemHealth: 99.9,
  recentActivity: [
    { id: 1, action: "New Landlord Verified", user: "Sarah Connor", time: "2 mins ago" },
    { id: 2, action: "Rent Dispute Resolved", user: "Case ID #9921", time: "15 mins ago" },
    { id: 3, action: "System Backup Completed", user: "System", time: "1 hour ago" },
  ]
};
