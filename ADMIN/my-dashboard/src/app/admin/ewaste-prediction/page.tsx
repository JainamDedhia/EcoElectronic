// pages/ewaste-prediction.tsx
"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const ewasteData = [
  { year: 2020, waste: 1200, hazardous: 400, nonHazardous: 800 },
  { year: 2021, waste: 1500, hazardous: 500, nonHazardous: 1000 },
  { year: 2022, waste: 1800, hazardous: 700, nonHazardous: 1100 },
  { year: 2023, waste: 2200, hazardous: 900, nonHazardous: 1300 },
  { year: 2024, waste: 2600, hazardous: 1100, nonHazardous: 1500 },
];

const userGrowthData = [
  { month: "Nov 2024", users: 500 },
  { month: "Dec 2024", users: 750 },
  { month: "Jan 2025", users: 1000 },
  { month: "Feb 2025", users: 1400 },
];

const predictFutureData = (data: any[], key: string, futurePoints = 6, isMonthly = false) => {
  const lastEntry = data[data.length - 1];
  const growthRate = (lastEntry[key] - data[0][key]) / (data.length - 1);
  
  return Array.from({ length: futurePoints }, (_, i) => ({
    [isMonthly ? "month" : "year"]: isMonthly
      ? new Date(2025, i + 2).toLocaleString("default", { month: "short", year: "numeric" })
      : lastEntry.year + i + 1,
    [key]: Math.round(lastEntry[key] + (i + 1) * growthRate),
  }));
};

const futureEwaste = predictFutureData(ewasteData, "waste", 3);
const futureHazardous = predictFutureData(ewasteData, "hazardous", 3);
const futureNonHazardous = predictFutureData(ewasteData, "nonHazardous", 3);
const futureUsers = predictFutureData(userGrowthData, "users", 10, true);

export default function EwasteDashboard() {
  return (
    <div className="w-full h-screen overflow-auto bg-gray-100">
      <motion.h1 
        className="text-4xl font-bold text-center my-6 text-green-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        ♻️ AI-Powered E-Waste & User Growth Dashboard
      </motion.h1>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        
        <motion.div className="bg-white p-6 shadow-md rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl font-semibold mb-3">📊 E-Waste Forecast (Tons)</h2>
          <ResponsiveContainer width="100%" minHeight={400}>
            <LineChart data={[...ewasteData, ...futureEwaste]}>
              <XAxis dataKey="year" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="waste" stroke="#4A90E2" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div className="bg-white p-6 shadow-md rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl font-semibold mb-3">🚨 Hazardous vs Non-Hazardous Waste</h2>
          <ResponsiveContainer width="100%" minHeight={400}>
            <BarChart data={[...ewasteData, ...futureHazardous, ...futureNonHazardous]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="hazardous" fill="#FF4444" barSize={40} />
              <Bar dataKey="nonHazardous" fill="#66CC66" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div className="bg-white p-6 shadow-md rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl font-semibold mb-3">📈 App User Growth Prediction</h2>
          <ResponsiveContainer width="100%" minHeight={400}>
            <LineChart data={[...userGrowthData, ...futureUsers]}>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

      </div>
    </div>
  );
}
