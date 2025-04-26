'use client';  // Place this at the very top

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Users,
  User,
  Package,
  Settings,
  CalendarDays, // 📅 Added event icon
  Boxes,
} from "lucide-react";

const SideBar = () => {
  const pathname = usePathname(); // Get the current route

  const isActive = (path: string) =>
    pathname === path ? "bg-gray-700 text-green-400" : "text-white";

  return (
    <aside className="w-64 bg-[#2A3042] p-5 flex flex-col min-h-screen">
      <h2 className="text-2xl font-bold text-green-400 mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-4">
        <Link href="/" className={`flex items-center gap-2 p-3 rounded ${isActive("/")}`}>
          <BarChart3 className="w-5 h-5" /> Live Stats
        </Link>
        <Link href="/admin/VolunteerManage" className={`flex items-center gap-2 p-3 rounded ${isActive("/admin/VolunteerManage")}`}>
          <Users className="w-5 h-5" /> Volunteer Management
        </Link>
        <Link href="/admin/UserManage" className={`flex items-center gap-2 p-3 rounded ${isActive("/admin/UserManage")}`}>
          <User className="w-5 h-5" /> User Management
        </Link>
        <Link href="/admin/AddEvent" className={`flex items-center gap-2 p-3 rounded ${isActive("#")}`}>
          <CalendarDays className="w-5 h-5" /> Add Events
        </Link>
        <Link href="/admin/Report" className={`flex items-center gap-2 p-3 rounded ${isActive("/admin/Report")}`}>
          <Package className="w-5 h-5" /> Reports
        </Link>
        <Link href="/admin/Setting" className={`flex items-center gap-2 p-3 rounded ${isActive("/admin/Setting")}`}>
          <Settings className="w-5 h-5" /> Settings
        </Link>
        <Link href="/admin/BulkEwaste" className={`flex items-center gap-2 p-3 rounded ${isActive("/admin/BulkEwaste")}`}>
          <Boxes className="w-5 h-5" /> Bulk Ewaste
        </Link>
      </nav>
    </aside>
  );
};

export default SideBar;
