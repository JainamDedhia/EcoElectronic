'use client';

import React, { useState } from "react";
import { FaSave } from "react-icons/fa";
import SideBar from "../../../components/SideBar/page";
import {  Bell } from "lucide-react";
import Image from "next/image";

const SettingsManagement = () => {
  const [settings, setSettings] = useState<{ 
    notifications: boolean;
    privacyMode: boolean;
    password: string;
    twoFactorAuth: boolean;
    dataBackup: boolean;
  }>({
    notifications: true,
    privacyMode: false,
    password: "",
    twoFactorAuth: false,
    dataBackup: false,
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings((prev) => ({ ...prev, password: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <SideBar />
      <div className="flex-1">
        <header className="bg-white shadow p-4 flex justify-between items-center">
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
          <h1 className="text-2xl font-semibold mb-4">Settings Management</h1>
          <div className="bg-white shadow-md rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span>Enable Notifications</span>
              <button 
                onClick={() => handleToggle("notifications")} 
                className={`px-3 py-1 rounded-lg ${settings.notifications ? "bg-green-500" : "bg-gray-400"} text-white`}>
                {settings.notifications ? "On" : "Off"}
              </button>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span>Privacy Mode</span>
              <button 
                onClick={() => handleToggle("privacyMode")} 
                className={`px-3 py-1 rounded-lg ${settings.privacyMode ? "bg-green-500" : "bg-gray-400"} text-white`}>
                {settings.privacyMode ? "On" : "Off"}
              </button>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span>Enable Two-Factor Authentication</span>
              <button 
                onClick={() => handleToggle("twoFactorAuth")} 
                className={`px-3 py-1 rounded-lg ${settings.twoFactorAuth ? "bg-green-500" : "bg-gray-400"} text-white`}>
                {settings.twoFactorAuth ? "On" : "Off"}
              </button>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span>Enable Data Backup</span>
              <button 
                onClick={() => handleToggle("dataBackup")} 
                className={`px-3 py-1 rounded-lg ${settings.dataBackup ? "bg-green-500" : "bg-gray-400"} text-white`}>
                {settings.dataBackup ? "On" : "Off"}
              </button>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Change Password</label>
              <input
                type="password"
                placeholder="New Password"
                className="border rounded-lg p-2 w-full"
                value={settings.password}
                onChange={handleChangePassword}
              />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
              <FaSave className="mr-2" /> Save Changes
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SettingsManagement;
