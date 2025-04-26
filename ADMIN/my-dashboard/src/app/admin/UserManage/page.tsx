// 'use client';

// import React, { useState } from "react";
// import SideBar from "../../../components/SideBar/page";
// import { Search, Bell } from "lucide-react";
// import Image from "next/image";
// import { Pie } from "recharts";

// const UserManagement = () => {
//   const [search, setSearch] = useState("");
//   const [users, setUsers] = useState([
//     { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Recycler", status: "Active" },
//     { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Collector", status: "Inactive" },
//   ]);

//   const toggleStatus = (id: number) => {
//     setUsers(
//       users.map((u) =>
//         u.id === id ? { ...u, status: u.status === "Active" ? "Inactive" : "Active" } : u
//       )
//     );
//   };

//   const filteredUsers = users.filter((u) =>
//     u.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const roleData = [
//     { name: "Recycler", value: users.filter((u) => u.role === "Recycler").length },
//     { name: "Collector", value: users.filter((u) => u.role === "Collector").length },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 flex">
//       <SideBar />
//       <div className="flex-1">
//         <header className="bg-white shadow p-4 flex justify-between items-center">
//           <div className="relative">
//             <input
//               type="search"
//               placeholder="Search..."
//               className="pl-3 pr-10 py-2 border rounded-md w-64"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             <Search className="w-5 h-5 absolute right-3 top-2.5 text-gray-400" />
//           </div>
//           <div className="flex items-center gap-4">
//             <button className="relative">
//               <Bell className="w-6 h-6 text-gray-600" />
//             </button>
//             <div className="flex items-center gap-2">
//               <Image src="/profile.jpg" alt="Admin" width={32} height={32} className="rounded-full" />
//               <p className="text-sm font-medium">Admin</p>
//             </div>
//           </div>
//         </header>
//         <main className="p-6">
//           <h1 className="text-2xl font-semibold mb-4">User Dashboard</h1>
//           <div className="grid grid-cols-3 gap-4 mb-6">
//             <div className="bg-white shadow-md rounded-lg p-4 text-center">
//               <h2 className="text-xl font-semibold">Total Users</h2>
//               <p className="text-3xl font-bold">{users.length}</p>
//             </div>
//             <div className="bg-white shadow-md rounded-lg p-4 text-center">
//               <h2 className="text-xl font-semibold">Active Users</h2>
//               <p className="text-3xl font-bold">{users.filter((u) => u.status === "Active").length}</p>
//             </div>
//             <div className="bg-white shadow-md rounded-lg p-4 text-center">
//               <h2 className="text-xl font-semibold">Inactive Users</h2>
//               <p className="text-3xl font-bold">{users.filter((u) => u.status === "Inactive").length}</p>
//             </div>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-4 mb-6">
//             <h2 className="text-xl font-semibold mb-2">Role Distribution</h2>
//             <Pie data={roleData} width={400} height={300} dataKey={""} />
//           </div>
//           <h1 className="text-2xl font-semibold mb-4">User Management (E-Waste)</h1>
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-gray-200 text-left">
//                   <th className="p-3">Name</th>
//                   <th className="p-3">Email</th>
//                   <th className="p-3">Role</th>
//                   <th className="p-3">Status</th>
//                   <th className="p-3">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredUsers.map((user) => (
//                   <tr key={user.id} className="border-t">
//                     <td className="p-3">{user.name}</td>
//                     <td className="p-3">{user.email}</td>
//                     <td className="p-3">{user.role}</td>
//                     <td className={`p-3 font-semibold ${user.status === "Active" ? "text-green-600" : "text-red-600"}`}>{user.status}</td>
//                     <td className="p-3">
//                       <button
//                         onClick={() => toggleStatus(user.id)}
//                         className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-700"
//                       >
//                         Toggle Status
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default UserManagement;


"use client";

import React, { useEffect, useState } from "react";
import { db } from "../../../components/services/firebaseConfig"; // Firebase import
import { collection, getDocs } from "firebase/firestore";
import SideBar from "../../../components/SideBar/page";
import { Search, Bell } from "lucide-react";
import Image from "next/image";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  credit?: number; // New credit field (optional)
}

const UserManagement = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  // 🔥 Fetch Users from Firestore
  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Users")); // Fetch "Users" collection
      const usersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name || "Unknown",
        email: doc.data().email || "No Email",
        role: doc.data().role || "No Role",
        credit: doc.data().credit || 0, // Default credit to 0 if missing
      }));
      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 🔍 Filter users by search input
  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <SideBar />
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
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

        {/* Main Content */}
        <main className="p-6">
          <h1 className="text-2xl font-semibold mb-4">User Dashboard</h1>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <h2 className="text-xl font-semibold">Total Users</h2>
              <p className="text-3xl font-bold">{users.length}</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <h2 className="text-xl font-semibold">Total Credit</h2>
              <p className="text-3xl font-bold">
                {users.reduce((acc, user) => acc + (user.credit || 0), 0)} Points
              </p>
            </div>
          </div>

          {/* User Management Table */}
          <h1 className="text-2xl font-semibold mb-4">User Management (E-Waste)</h1>
          <div className="bg-white shadow-md rounded-lg p-4">
          <table className="w-full border-collapse">
  <thead>
    <tr className="bg-gray-200 text-left">
      <th className="p-3">Name</th>
      <th className="p-3">Email</th>
      <th className="p-3">Role</th>
      <th className="p-3">Credit</th> {/* New Credit Column */}
    </tr>
  </thead>
  <tbody>
    {filteredUsers.map((user) => (
      <tr key={user.id} className="border-t">
        <td className="p-3">{user.name}</td>
        <td className="p-3">{user.email}</td>
        <td className="p-3">{user.role}</td>
        <td className="p-3 font-semibold text-blue-600">
          {user.credit || 0} Points
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

export default UserManagement;
