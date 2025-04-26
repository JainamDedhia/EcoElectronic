// "use client";

// import React, { useEffect, useState } from "react";
// import UserSideBar from "../../../components/SideBar/page";

// import { FiBell, FiSearch } from "react-icons/fi";
// import { Bar } from "recharts";
// import { BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// import VolunteerOverview from "../../../app/admin/VolunteerManage/volunteers/VolunteerOverview/page";
// import VolunteerTable from "../../../app/admin/VolunteerManage/volunteers/VolunteerTable/page";
// import AddVolunteer from "../../../app/admin/VolunteerManage/volunteers/AddVolunteers/page";
// import SideBar from "../../../components/SideBar/page";

// interface Volunteer {
//   id: string;
//   name: string;
//   email: string;
//   phone: string;
//   status: string;
//   points: number;
//   tasks: string[];
// }

// const VolunteerManagement = () => {
//   const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
//   const [search, setSearch] = useState("");
//   const [filterStatus, setFilterStatus] = useState("All");
//   const [sortType, setSortType] = useState("name");

//   // Fetch Volunteers
//   const fetchVolunteers = async () => {
//     await new Promise((resolve) => setTimeout(resolve, 500));
//     setVolunteers([
//       { id: "1", name: "John Doe", email: "john@example.com", phone: "123-456-7890", status: "Pending", points: 0, tasks: [] },
//       { id: "2", name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", status: "Active", points: 10, tasks: ["Task 1"] }
//     ]);
//   };

//   useEffect(() => {
//     fetchVolunteers();
//   }, []);

//   // Delete Volunteer
//   const handleDelete = (id: string) => {
//     setVolunteers((prev) => prev.filter((v) => v.id !== id));
//   };

//   // Filter & Sort
//   const filteredVolunteers = volunteers.filter((v) =>
//     v.name.toLowerCase().includes(search.toLowerCase()) && (filterStatus === "All" || v.status === filterStatus)
//   ).sort((a, b) => (sortType === "points" ? b.points - a.points : a.name.localeCompare(b.name)));

//   return (
//     <div className="min-h-screen flex bg-gray-50">
//       <SideBar />
//       <div className="flex-1 p-6 space-y-6">
//         {/* Header */}
//         <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
//           <div className="relative w-72">
//             <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
//             <input
//               type="search"
//               placeholder="Search volunteers..."
//               className="border rounded-lg pl-10 pr-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//           <select className="border p-2 rounded-lg" onChange={(e) => setFilterStatus(e.target.value)}>
//             <option value="All">All</option>
//             <option value="Active">Active</option>
//             <option value="Pending">Pending</option>
//           </select>
//           <select className="border p-2 rounded-lg" onChange={(e) => setSortType(e.target.value)}>
//             <option value="name">Sort by Name</option>
//             <option value="points">Sort by Points</option>
//           </select>
//           <FiBell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" />
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="md:col-span-2">
//             <VolunteerOverview volunteers={filteredVolunteers} />
//             <VolunteerTable 
//               volunteers={filteredVolunteers} 
//               handleDelete={handleDelete} 
//             />
//           </div>
//           <div>
//             <AddVolunteer refreshData={fetchVolunteers} />
//           </div>
//         </div>
// {/* Stats Section */}
// <div className="bg-white shadow rounded-lg p-4">
//   <h2 className="text-xl font-bold mb-4">Volunteer Statistics</h2>
//   <ResponsiveContainer width="100%" height={300}>
//     <BarChart data={volunteers.map(v => ({ name: v.name, points: v.points }))}>
//       <XAxis dataKey="name" stroke="#8884d8" />
//       <YAxis />
//       <Tooltip />
//       <Bar dataKey="points" fill="#4A90E2" barSize={40} />
//     </BarChart>
//   </ResponsiveContainer>
// </div>
// </div>
// </div>
// );
// };

// export default VolunteerManagement;





// "use client";

// import React, { useEffect, useState } from "react";
// import { db } from "../../../components/services/firebaseConfig"; // Import Firestore
// import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

// import { FiBell, FiSearch } from "react-icons/fi";
// import { BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Bar } from "recharts";

// import VolunteerOverview from "../../../app/admin/VolunteerManage/volunteers/VolunteerOverview/page";
// import VolunteerTable from "../../../app/admin/VolunteerManage/volunteers/VolunteerTable/page";
// import;
//   status?: string; // Make status optional
//   points: number;
//   tasks: string[];
// }

// const VolunteerManagement = () => {
//   const [volunteers, setVolunteers] = useState<Volunteer[]>([]); // Ensure volunteers is always an array
//   const [search, setSearch] = useState("");
//   const [filterStatus, setFilterStatus] = useState("All");
//   const [sortType, setSortType] = useState("name");

//   // 🔥 Fetch Volunteers from Firestore
//   const fetchVolunteers = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "Volunteers"));
//       const volunteersData = querySnapshot.docs.map((doc) => {
//         const data = doc.data() as Volunteer;
//         return {
//           id: doc.id,
//           name: data.name || "Unknown",
//           email: data.email || "No Email",
//           phone: data.phone || "No Phone",
//           status: data.status || "Pending", // Default to "Pending" if status is missing
//           points: data.points || 0,
//           tasks: data.tasks || [],
//         };
//       });

//       setVolunteers(volunteersData);
//     } catch (error) {
//       console.error("Error fetching volunteers:", error);
//     }
//   };

//   useEffect(() => {
//     fetchVolunteers();
//   }, []);

//   // 🔥 Delete Volunteer from Firestore
//   const handleDelete = async (id: string) => {
//     try {
//       await deleteDoc(doc(db, "Volunteers", id));
//       setVolunteers((prev) => prev.filter((v) => v.id !== id));
//     } catch (error) {
//       console.error("Error deleting volunteer:", error);
//     }
//   };

//   // Filter & Sort
//   const filteredVolunteers: Volunteer[] = (volunteers || [])
//   .filter((v) =>
//     v.name.toLowerCase().includes(search.toLowerCase()) &&
//     (filterStatus === "All" || v.status === filterStatus)
//   )
//   .sort((a, b) =>
//     sortType === "points" ? b.points - a.points : a.name.localeCompare(b.name)
//   );
//   return (
//     <div className="min-h-screen flex bg-gray-50">
//       <SideBar />
//       <div className="flex-1 p-6 space-y-6">
//         {/* Header */}
//         <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
//           <div className="relative w-72">
//             <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
//             <input
//               type="search"
//               placeholder="Search volunteers..."
//               className="border rounded-lg pl-10 pr-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//           <select className="border p-2 rounded-lg" onChange={(e) => setFilterStatus(e.target.value)}>
//             <option value="All">All</option>
//             <option value="Active">Active</option>
//             <option value="Pending">Pending</option>
//           </select>
//           <select className="border p-2 rounded-lg" onChange={(e) => setSortType(e.target.value)}>
//             <option value="name">Sort by Name</option>
//             <option value="points">Sort by Points</option>
//           </select>
//           <FiBell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" />
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="md:col-span-2">
//           <VolunteerOverview volunteers={filteredVolunteers ?? []} />
//           <VolunteerTable volunteers={filteredVolunteers ?? []} handleDelete={handleDelete} />

//           </div>
//           <div>
//             <AddVolunteer refreshData={fetchVolunteers} />
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="bg-white shadow rounded-lg p-4">
//           <h2 className="text-xl font-bold mb-4">Volunteer Statistics</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={volunteers.map((v) => ({ name: v.name, points: v.points }))}>
//               <XAxis dataKey="name" stroke="#8884d8" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="points" fill="#4A90E2" barSize={40} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VolunteerManagement; AddVolunteer from "../../../app/admin/VolunteerManage/volunteers/AddVolunteers/page";
// import SideBar from "../../../components/SideBar/page";

// interface Volunteer {
//   id: string;
//   name: string;
//   email: string;
//   phone: string







// "use client";

// import React, { useEffect, useState } from "react";
// import { db } from "../../../components/services/firebaseConfig"; // Firestore import
// import { collection, getDocs, doc, updateDoc, deleteDoc,setDoc,getDoc} from "firebase/firestore";

// import { FiBell, FiSearch, FiX } from "react-icons/fi";
// import { BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Bar } from "recharts";

// import VolunteerOverview from "../../../app/admin/VolunteerManage/volunteers/VolunteerOverview/page";
// import VolunteerTable from "../../../app/admin/VolunteerManage/volunteers/VolunteerTable/page";
// import AddVolunteer from "../../../app/admin/VolunteerManage/volunteers/AddVolunteers/page";
// import SideBar from "../../../components/SideBar/page";
// import { query, where } from "firebase/firestore";
// // import { doc, updateDoc, collection, getDocs, setDoc, query, where } from "firebase/firestore";

// interface Volunteer {
//   id: string;
//   name: string;
//   email: string;
//   phone: string;
//   status?: string;
//   points: number;
//   tasks: string[];
// }

// interface CollaborationRequest {
//   id: string;
//   agency: string;
//   status: string;
// }

// // State and function to handle notifications
// const VolunteerManagement = () => {
//   const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
//   const [search, setSearch] = useState("");
//   const [filterStatus, setFilterStatus] = useState("All");
//   const [sortType, setSortType] = useState("name");
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [collabRequests, setCollabRequests] = useState<CollaborationRequest[]>([]);

//   // 🔥 Fetch Volunteers from Firestore
//   const fetchVolunteers = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "Volunteers"));
//       const volunteersData = querySnapshot.docs.map((doc) => {
//         const data = doc.data() as Volunteer;
//         return {
//           id: doc.id,
//           name: data.name || "Unknown",
//           email: data.email || "No Email",
//           phone: data.phone || "No Phone",
//           status: data.status || "Pending",
//           points: data.points || 0,
//           tasks: data.tasks || [],
//         };
//       });

//       setVolunteers(volunteersData);
//     } catch (error) {
//       console.error("Error fetching volunteers:", error);
//     }
//   };

//   // 🔥 Fetch Collaboration Requests (Only from XYZ Agency)
//   const fetchCollabRequests = () => {
//     // 🔥 Static Collaboration Requests (No Firebase)
//     const staticRequests: CollaborationRequest[] = [
//       { id: "101", agency: "XYZ Agency", status: "Pending" },
//       { id: "102", agency: "ABC Foundation", status: "Pending" },
//     ];
  
//     setCollabRequests(staticRequests);
//   };
  
//   // 🔥 Call static fetch inside useEffect
//   useEffect(() => {
//     fetchVolunteers(); // If you want volunteers to stay dynamic, keep this
//     fetchCollabRequests(); // Now loads static data
//   }, []);

//   // 🔥 Accept Request and Fetch Volunteers
//   const acceptRequest = async () => {
//     try {
//       // 1️⃣ Get the first request from "collabReq"
//       const querySnapshot = await getDocs(collection(db, "collabReq"));
//       if (querySnapshot.empty) {
//         console.error("No collaboration request found!");
//         return;
//       }
  
//       const requestDoc = querySnapshot.docs[0]; // First (only) request
//       const requestId = requestDoc.id; // Extract request ID
  
//       // 2️⃣ Update the request status
//       await updateDoc(doc(db, "collabReq", requestId), { status: "Assigned" });
  
//       // 3️⃣ Fetch volunteers from "collabVol"
//       const collabVolSnapshot = await getDocs(
//         query(collection(db, "collabVol"), where("requestId", "==", requestId))
//       );
  
//       if (collabVolSnapshot.empty) {
//         console.warn("No volunteers found for this request.");
//         return;
//       }
  
//       const newVolunteers = collabVolSnapshot.docs.map((doc) => ({
//         id: doc.id, // Ensure ID is included
//         ...doc.data(),
//       })) as Volunteer[];
  
//       console.log("Fetched Volunteers:", newVolunteers); // Debugging Log
  
//       // 4️⃣ Add fetched volunteers to "Volunteers" collection
//       for (const volunteer of newVolunteers) {
//         const volunteerRef = doc(db, "Volunteers", volunteer.id); // ✅ Correct document reference
  
//         // Check if volunteer already exists
//         const volunteerSnap = await getDoc(volunteerRef);
//         if (volunteerSnap.exists()) {
//           await updateDoc(volunteerRef, volunteer); // ✅ Update existing volunteer
//         } else {
//           await setDoc(volunteerRef, volunteer); // ✅ Add new volunteer
//         }
//       }
  
//       console.log("Volunteers successfully added to Firestore!"); // Debugging Log
  
//       // 5️⃣ Refresh the UI
//       setTimeout(() => {
//         fetchVolunteers();  // Ensure UI updates
//         fetchCollabRequests();
//       }, 1000); // Small delay to allow Firestore to update
  
//     } catch (error) {
//       console.error("Error accepting request:", error);
//     }
//   };
  
  
  
//   // ❌ Decline Request
//   const declineRequest = async () => {
//     try {
//       // ✅ Delete the only document in "collabReq"
//       const querySnapshot = await getDocs(collection(db, "collabReq"));
  
//       if (querySnapshot.empty) {
//         console.warn("No request found to decline.");
//         return;
//       }
  
//       const requestId = querySnapshot.docs[0].id;
//       await deleteDoc(doc(db, "collabReq", requestId));
  
//       // ✅ Update UI
//       setCollabRequests([]);
      
//     } catch (error) {
//       console.error("Error declining request:", error);
//     }
//   };
  
//   // 🔥 Delete Volunteer from Firestore
//   const handleDelete = async (id: string) => {
//     try {
//       await deleteDoc(doc(db, "Volunteers", id));
//       setVolunteers((prev) => prev.filter((v) => v.id !== id));
//     } catch (error) {
//       console.error("Error deleting volunteer:", error);
//     }
//   };
  
//   // 🔍 Filter & Sort Volunteers
//   const filteredVolunteers: Volunteer[] = (volunteers || [])
//     .filter(
//       (v) =>
//         v.name.toLowerCase().includes(search.toLowerCase()) &&
//         (filterStatus === "All" || v.status === filterStatus)
//     )
//     .sort((a, b) => (sortType === "points" ? b.points - a.points : a.name.localeCompare(b.name)));
  

//   return (
//     <div className="min-h-screen flex bg-gray-50">
//       <SideBar />
//       <div className="flex-1 p-6 space-y-6">
//         {/* Header */}
//         <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
//           <div className="relative w-72">
//             <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
//             <input
//               type="search"
//               placeholder="Search volunteers..."
//               className="border rounded-lg pl-10 pr-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//           <FiBell
//             className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600"
//             onClick={() => setDrawerOpen(true)}
//           />
//         </div>

//         {/* Side Drawer for Collaboration Requests */}
// {drawerOpen && (
//   <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-4 overflow-y-auto">
//     <div className="flex justify-between items-center mb-4">
//       <h2 className="text-xl font-semibold">Collaboration Requests</h2>
//       <FiX className="w-6 h-6 cursor-pointer" onClick={() => setDrawerOpen(false)} />
//     </div>

//     {/* If no pending requests */}
//     {collabRequests.length === 0 ? (
//       <p className="text-gray-500">No pending requests.</p>
//     ) : (
//       // Only display the first (or only) request
//       (() => {
//         const request = collabRequests[0]; // Get the first request
//         return (
//           <div key={request.id} className="bg-gray-100 p-3 rounded-lg mb-2">
//             <h3 className="font-semibold">{request.agency}</h3>
//             <p className="text-sm text-gray-600">Collaboration Request</p>
//             <div className="flex justify-between mt-2">
//               <button
//                 className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700"
//                 onClick={() => {
//                   acceptRequest(); // Call function without needing request.id
//                   setDrawerOpen(false); // Close drawer after accepting
//                 }}
//               >
//                 Accept
//               </button>
//               <button
//                 className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
//                 onClick={() => {
//                   declineRequest(); // Call function without needing request.id
//                   setDrawerOpen(false); // Close drawer after declining
//                 }}
//               >
//                 Decline
//               </button>
//             </div>
//           </div>
//         );
//       })()
//     )}
//   </div>
// )}

//         {/* Existing Content */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="md:col-span-2">
//             <VolunteerOverview volunteers={filteredVolunteers ?? []} />
//             <VolunteerTable volunteers={filteredVolunteers ?? []} handleDelete={handleDelete} />
//           </div>
//           <div>
//             <AddVolunteer refreshData={fetchVolunteers} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VolunteerManagement;










"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { db } from "../../../components/services/firebaseConfig"; // Import Firestore
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";

import { FiBell, FiSearch } from "react-icons/fi";
import { BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Bar } from "recharts";

import VolunteerOverview from "../../../app/admin/VolunteerManage/volunteers/VolunteerOverview/page";
import VolunteerTable from "../../../app/admin/VolunteerManage/volunteers/VolunteerTable/page";
import AddVolunteer from "../../../app/admin/VolunteerManage/volunteers/AddVolunteers/page";
import SideBar from "../../../components/SideBar/page";


interface Volunteer {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  status?: string;
  points?: number;
  tasks?: string[];
}

const VolunteerManagement = () => {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortType, setSortType] = useState("name");

  // 🔥 Fetch Volunteers from Firestore
  const fetchVolunteers = useCallback(async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "collabVol"));
      const volunteersData = querySnapshot.docs.map((doc) => {
        const data = doc.data() as Volunteer;
        return {
          id: doc.id,
          name: data.name || "Unknown",
          email: data.email || "No Email",
          phone: data.phone || "No Phone",
          status: data.status || "Pending",
          points: data.points || 0,
          tasks: Array.isArray(data.tasks) ? data.tasks : [],
        };
      });
      setVolunteers(volunteersData);
    } catch (error) {
      console.error("Error fetching volunteers:", error);
    }
  }, []);

  useEffect(() => {
    fetchVolunteers();
  }, [fetchVolunteers]);

  // 🔥 Add Volunteer to Firestore
  const handleAddVolunteer = async (newVolunteer: Omit<Volunteer, "id">) => {
    try {
      await addDoc(collection(db, "collabVol"), {
        name: newVolunteer.name,
        email: newVolunteer.email,
        phone: newVolunteer.phone || "No Phone",
        status: newVolunteer.status || "Pending",
        points: newVolunteer.points || 0,
        tasks: newVolunteer.tasks || [],
      });
      fetchVolunteers(); // Refresh data after adding
    } catch (error) {
      console.error("Error adding volunteer:", error);
    }
  };

  // 🔥 Delete Volunteer from Firestore
  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "collabVol", id));
      setVolunteers((prev) => prev.filter((v) => v.id !== id));
    } catch (error) {
      console.error("Error deleting volunteer:", error);
    }
  };

  // Filter & Sort Volunteers
  const filteredVolunteers = useMemo(() => {
    return volunteers
      .filter(
        (v) =>
          v.name.toLowerCase().includes(search.toLowerCase()) &&
          (filterStatus === "All" || v.status === filterStatus)
      )
      .sort((a, b) => (sortType === "points" ? b.points - a.points : a.name.localeCompare(b.name)));
  }, [volunteers, search, filterStatus, sortType]);

  return (
    <div className="min-h-screen flex bg-gray-50">
      <SideBar />
      <div className="flex-1 p-6 space-y-6">
        {/* Header */}
        <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
          <div className="relative w-72">
            <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
            <input
              type="search"
              placeholder="Search volunteers..."
              className="border rounded-lg pl-10 pr-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <label htmlFor="statusFilter" className="sr-only">Filter by Status</label>
          <select id="statusFilter" className="border p-2 rounded-lg" onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
          </select>
          <label htmlFor="sortType" className="sr-only">Sort Volunteers</label>
          <select id="sortType" className="border p-2 rounded-lg" onChange={(e) => setSortType(e.target.value)}>
            <option value="name">Sort by Name</option>
            <option value="points">Sort by Points</option>
          </select>
          <FiBell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <VolunteerOverview volunteers={filteredVolunteers} />
            <VolunteerTable volunteers={filteredVolunteers} handleDelete={handleDelete} />
          </div>
          <div>
            <AddVolunteer handleAddVolunteer={handleAddVolunteer} />
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Volunteer Statistics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={filteredVolunteers.map((v) => ({ name: v.name, points: v.points }))}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis /> 
              <Tooltip />
              <Bar dataKey="points" fill="#4A90E2" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default VolunteerManagement;
