import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";
import TenantDashboard from "./pages/tenant/Dashboard";
import LandlordDashboard from "./pages/landlord/Dashboard";
import AdminDashboard from "./pages/Admin/Dashboard";
import TenantPayments from "./pages/tenant/Payments";
import TenantReporting from "./pages/tenant/Reporting";
import TenantSettings from "./pages/tenant/Settings";
import LandlordProperties from "./pages/landlord/Properties";
import LandlordReports from "./pages/landlord/Reports";
import LandlordPayments from "./pages/landlord/Payments";
import LandlordTenants from "./pages/landlord/Tenants";
import AdminSettings from "./pages/Admin/Settings";
import AdminCompliance from "./pages/Admin/Compliance";
import AdminUsers from "./pages/Admin/Users";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import AdminSignIn from "./pages/auth/AdminSignIn";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin/login" element={<AdminSignIn />} />
        <Route path="/tenant" element={<TenantDashboard />} />
        <Route path="/tenant/payments" element={<TenantPayments />} />
        <Route path="/tenant/reporting" element={<TenantReporting />} />
        <Route path="/tenant/settings" element={<TenantSettings />} />
        <Route path="/landlord" element={<LandlordDashboard />} />
        <Route path="/landlord/properties" element={<LandlordProperties />} />
        <Route path="/landlord/tenants" element={<LandlordTenants />} />
        <Route path="/landlord/payments" element={<LandlordPayments />} />
        <Route path="/landlord/reports" element={<LandlordReports />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/compliance" element={<AdminCompliance />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
};

export default App;
