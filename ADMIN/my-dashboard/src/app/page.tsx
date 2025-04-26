// STATIC VALUES
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signOut, User } from "firebase/auth";
import { auth } from "../lib/firebase"; // Authentication

import SideBar from "../components/SideBar/page";
import { Search, Bell, LogOut } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// 📊 Static Data for Dashboard
const stateWiseEwaste = [
  { state: "Maharashtra", percentage: 25 },
  { state: "Karnataka", percentage: 18 },
  { state: "Tamil Nadu", percentage: 15 },
  { state: "Delhi", percentage: 12 },
  { state: "West Bengal", percentage: 10 },
  { state: "Uttar Pradesh", percentage: 8 },
  { state: "Gujarat", percentage: 7 },
  { state: "Others", percentage: 5 },
];

const cityWiseEwaste = [
  { city: "Mumbai", value: 70 },
  { city: "Bangalore", value: 55 },
  { city: "Chennai", value: 50 },
  { city: "Delhi", value: 45 },
  { city: "Kolkata", value: 30 },
];

// 📌 Static Data for Users
const totalUsers = 230;
const activeUsers = 180;
const inactiveUsers = totalUsers - activeUsers;

const userEngagement = [
  { type: "Active Users", value: activeUsers },
  { type: "Inactive Users", value: inactiveUsers },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [user] = useState<User | null>(null); // Simulating user state

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <SideBar />
      <div className="flex-1">
        {/* Navbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div className="relative">
            <input type="search" placeholder="Search..." className="pl-3 pr-10 py-2 border rounded-md w-64" />
            <Search className="w-5 h-5 absolute right-3 top-2.5 text-gray-400" />
          </div>
          <div>
            <button onClick={() => signOut(auth).then(() => router.push("/admin/login"))} className="flex items-center bg-red-500 text-white px-3 py-2 rounded">
              <LogOut className="w-5 h-5 mr-1" />
              Logout
            </button>
          </div>
        </header>

        {/* Live Stats Section */}
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-green-500 text-white p-6 rounded-lg">
              <h2 className="text-3xl font-bold">{totalUsers}</h2>
              <p>Total Users</p>
            </div>
            <div className="bg-blue-500 text-white p-6 rounded-lg">
              <h2 className="text-3xl font-bold">{activeUsers}</h2>
              <p>Active Users</p>
            </div>
            <div className="bg-orange-500 text-white p-6 rounded-lg">
              <h2 className="text-3xl font-bold">200,000+ Tons</h2>
              <p>Annual E-Waste Generated</p>
            </div>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center justify-center mt-6 mb-7">
          <h2 className="text-xl font-semibold mb-3">🤖 AI Predictions & Insights</h2>
          <p className="text-gray-600 text-center mb-4">
           Get AI-driven insights on e-waste generation trends and user growth.
          </p>
        <button onClick={() => router.push("/admin/ewaste-prediction")}
        className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
        View AI Stats
        </button>
        </div>
          {/* Graphs Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* State-Wise E-Waste Contribution */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">State-Wise E-Waste Contribution</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={stateWiseEwaste}>
                  <XAxis dataKey="state" stroke="#8884d8" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="percentage" fill="#4A90E2" barSize={50} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* User Engagement (Active vs Inactive) */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">User Engagement</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={userEngagement} dataKey="value" nameKey="type" cx="50%" cy="50%" outerRadius={100}>
                    {userEngagement.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? "#28a745" : "#ff9800"} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Regional E-Waste Table */}
          <h2 className="text-xl font-semibold mt-6 mb-3">Regional E-Waste Contribution</h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-3">State</th>
                  <th className="p-3">Top City</th>
                  <th className="p-3">E-Waste Contribution (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Maharashtra</td>
                  <td className="p-3">Mumbai</td>
                  <td className="p-3">25%</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Karnataka</td>
                  <td className="p-3">Bangalore</td>
                  <td className="p-3">18%</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Tamil Nadu</td>
                  <td className="p-3">Chennai</td>
                  <td className="p-3">15%</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Delhi</td>
                  <td className="p-3">New Delhi</td>
                  <td className="p-3">12%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
