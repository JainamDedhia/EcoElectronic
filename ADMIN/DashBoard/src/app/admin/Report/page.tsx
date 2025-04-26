'use client';

import React, { useState } from "react";
import { FaEye, FaDownload } from "react-icons/fa";

import SideBar from "../../../components/SideBar/page";
import { Search, Bell } from "lucide-react";
import Image from "next/image";

const ReportsManagement = () => {
  const [search, setSearch] = useState("");
  const [reports] = useState([
    { id: 1, title: "Monthly Recycling Report", date: "Jan 2025", type: "PDF" },
    { id: 2, title: "E-Waste Collection Summary", date: "Feb 2025", type: "Excel" },
  ]);

  const filteredReports = reports.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <SideBar />
      <div className="flex-1">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div className="relative">
            <input
              type="search"
              placeholder="Search reports..."
              className="pl-3 pr-10 py-2 border rounded-md w-64"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="w-5 h-5 absolute right-3 top-2.5 text-gray-400" />
          </div>
          <div className="flex items-center gap-4">
            <button className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
            </button>
            <div className="flex items-center gap-2">
              <Image src="/profile.jpg" alt="Admin" width={32} height={32} className="rounded-full" />
              <p className="text-sm font-medium">Admin</p>
            </div>
          </div>
        </header>
        <main className="p-6">
          <h1 className="text-2xl font-semibold mb-4">Reports Management</h1>
          <div className="bg-white shadow-md rounded-lg p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-3">Title</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredReports.map((report) => (
                  <tr key={report.id} className="border-t">
                    <td className="p-3">{report.title}</td>
                    <td className="p-3">{report.date}</td>
                    <td className="p-3">{report.type}</td>
                    <td className="p-3 flex gap-2">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-lg flex items-center">
                        <FaEye className="mr-2" /> View
                      </button>
                      <button className="bg-green-500 text-white px-3 py-1 rounded-lg flex items-center">
                        <FaDownload className="mr-2" /> Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ReportsManagement;
