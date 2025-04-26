// "use client";

// import React, { useEffect, useState } from "react";
// import { db } from "../../../components/services/firebaseConfig";
// import { collection, getDocs } from "firebase/firestore";
// import SideBar from "../../../components/SideBar/page";
// import { Bell, Search } from "lucide-react";
// import Image from "next/image";

// interface BulkScrapRequest {
//   id: string;
//   businessName: string;
//   contactNumber: string;
//   isSpecialRequest: boolean;
//   note: string;
//   organizationName: string;
//   selectedMaterial: string;
//   selectedQuantity: number;
//   status: string;
//   timestamp: string;
//   userId: string;
// }

// interface Volunteer {
//   id: string;
//   name: string;
//   phnNo: string;
//   svid: string;
// }

// const BulkScrapPage = () => {
//   const [search, setSearch] = useState("");
//   const [bulkRequests, setBulkRequests] = useState<BulkScrapRequest[]>([]);
//   const [volunteers, setVolunteers] = useState<Volunteer[]>([]);

//   const fetchBulkRequests = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "BulkScrapRequests"));
//       const data = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         businessName: doc.data().businessName || "Unknown",
//         contactNumber: doc.data().contactNumber || "N/A",
//         isSpecialRequest: doc.data().isSpecialRequest || false,
//         note: doc.data().note || "",
//         organizationName: doc.data().organizationName || "Unknown",
//         selectedMaterial: doc.data().selectedMaterial || "Unknown",
//         selectedQuantity: doc.data().selectedQuantity || 0,
//         status: doc.data().status || "pending",
//         timestamp: doc.data().timestamp?.toDate().toLocaleString() || "N/A",
//         userId: doc.data().userId || "N/A",
//       }));
//       setBulkRequests(data);
//     } catch (error) {
//       console.error("Error fetching bulk scrap requests:", error);
//     }
//   };

//   const fetchVolunteers = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "Svolunteer"));
//       const data = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         name: doc.data().name || "Unknown",
//         phnNo: doc.data().phnNo || "N/A",
//         svid: doc.data().svid || "N/A",
//       }));
//       setVolunteers(data);
//     } catch (error) {
//       console.error("Error fetching volunteers:", error);
//     }
//   };

//   useEffect(() => {
//     fetchBulkRequests();
//     fetchVolunteers();
//   }, []);

//   const filteredRequests = bulkRequests.filter((r) =>
//     r.businessName.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 flex">
//       <SideBar />
//       <div className="flex-1">
//         {/* Header */}
//         <header className="bg-white shadow p-4 flex justify-between items-center">
//           <div className="relative">
//             <input
//               type="search"
//               placeholder="Search by business name..."
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

//         {/* Main Content */}
//         <main className="p-6">
//           <h1 className="text-2xl font-semibold mb-4">Bulk Scrap Requests</h1>
//           <div className="overflow-auto bg-white shadow-md rounded-lg p-4 mb-6">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-gray-200 text-left">
//                   <th className="p-3">Business</th>
//                   <th className="p-3">Contact</th>
//                   <th className="p-3">Material</th>
//                   <th className="p-3">Quantity (kg)</th>
//                   <th className="p-3">Organization</th>
//                   <th className="p-3">Special Request</th>
//                   <th className="p-3">Status</th>
//                   <th className="p-3">Note</th>
//                   <th className="p-3">Timestamp</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredRequests.map((req) => (
//                   <tr key={req.id} className="border-t">
//                     <td className="p-3">{req.businessName}</td>
//                     <td className="p-3">{req.contactNumber}</td>
//                     <td className="p-3">{req.selectedMaterial}</td>
//                     <td className="p-3">{req.selectedQuantity}</td>
//                     <td className="p-3">{req.organizationName}</td>
//                     <td className="p-3">{req.isSpecialRequest ? "Yes" : "No"}</td>
//                     <td className="p-3">{req.status}</td>
//                     <td className="p-3">{req.note}</td>
//                     <td className="p-3">{req.timestamp}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <h1 className="text-2xl font-semibold mb-4">Available Volunteers</h1>
//           <div className="overflow-auto bg-white shadow-md rounded-lg p-4">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-gray-200 text-left">
//                   <th className="p-3">Name</th>
//                   <th className="p-3">Phone Number</th>
//                   <th className="p-3">Volunteer ID</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {volunteers.map((vol) => (
//                   <tr key={vol.id} className="border-t">
//                     <td className="p-3">{vol.name}</td>
//                     <td className="p-3">{vol.phnNo}</td>
//                     <td className="p-3">{vol.svid}</td>
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

// export default BulkScrapPage;



"use client";

import React, { useEffect, useState } from "react";
import { db } from "../../../components/services/firebaseConfig";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import SideBar from "../../../components/SideBar/page";
import { Bell, Search } from "lucide-react";
import Image from "next/image";

interface BulkScrapRequest {
  id: string;
  businessName: string;
  contactNumber: string;
  isSpecialRequest: boolean;
  note: string;
  organizationName: string;
  selectedMaterial: string;
  selectedQuantity: number;
  status: string;
  timestamp: string;
  userId: string;
  assignedVolunteer?: string;
}

interface Volunteer {
  id: string;
  name: string;
  phnNo: string;
  svid: string;
}

const BulkScrapPage = () => {
  const [search, setSearch] = useState("");
  const [bulkRequests, setBulkRequests] = useState<BulkScrapRequest[]>([]);
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [assignments, setAssignments] = useState<{ [key: string]: string }>({});

  const fetchBulkRequests = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "bulk_scrap_requests"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        businessName: doc.data().businessName || "Unknown",
        contactNumber: doc.data().contactNumber || "N/A",
        isSpecialRequest: doc.data().isSpecialRequest || false,
        note: doc.data().note || "",
        organizationName: doc.data().organizationName || "Unknown",
        selectedMaterial: doc.data().selectedMaterial || "Unknown",
        selectedQuantity: doc.data().selectedQuantity || 0,
        status: doc.data().status || "pending",
        timestamp: doc.data().timestamp?.toDate().toLocaleString() || "N/A",
        userId: doc.data().userId || "N/A",
        assignedVolunteer: doc.data().assignedVolunteer || "",
      }));
      setBulkRequests(data);
    } catch (error) {
      console.error("Error fetching bulk scrap requests:", error);
    }
  };

  const fetchVolunteers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Svolunteer"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name || "Unknown",
        phnNo: doc.data().phnNo || "N/A",
        svid: doc.data().svid || "N/A",
      }));
      setVolunteers(data);
    } catch (error) {
      console.error("Error fetching volunteers:", error);
    }
  };

  const handleAssign = async (requestId: string) => {
    const selectedVolunteer = assignments[requestId];
    if (!selectedVolunteer) return alert("Please select a volunteer.");

    try {
      await updateDoc(doc(db, "bulk_scrap_requests", requestId), {
        assignedVolunteer: selectedVolunteer,
      });
      alert("Volunteer assigned successfully!");
      fetchBulkRequests(); // Refresh data
    } catch (error) {
      console.error("Error assigning volunteer:", error);
    }
  };

  useEffect(() => {
    fetchBulkRequests();
    fetchVolunteers();
  }, []);

  const filteredRequests = bulkRequests.filter((r) =>
    r.businessName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <SideBar />
      <div className="flex-1">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div className="relative">
            <input
              type="search"
              placeholder="Search by business name..."
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
          <h1 className="text-2xl font-semibold mb-4">Bulk Scrap Requests</h1>
          <div className="overflow-auto bg-white shadow-md rounded-lg p-4 mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-3">Business</th>
                  <th className="p-3">Contact</th>
                  <th className="p-3">Material</th>
                  <th className="p-3">Quantity (kg)</th>
                  <th className="p-3">Organization</th>
                  <th className="p-3">Special Request</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Note</th>
                  <th className="p-3">Timestamp</th>
                  <th className="p-3">Assign Volunteer</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map((req) => (
                  <tr key={req.id} className="border-t">
                    <td className="p-3">{req.businessName}</td>
                    <td className="p-3">{req.contactNumber}</td>
                    <td className="p-3">{req.selectedMaterial}</td>
                    <td className="p-3">{req.selectedQuantity}</td>
                    <td className="p-3">{req.organizationName}</td>
                    <td className="p-3">{req.isSpecialRequest ? "Yes" : "No"}</td>
                    <td className="p-3">{req.status}</td>
                    <td className="p-3">{req.note}</td>
                    <td className="p-3">{req.timestamp}</td>
                    <td className="p-3">
                      <select
                        className="border p-1 rounded"
                        value={assignments[req.id] || ""}
                        onChange={(e) =>
                          setAssignments({ ...assignments, [req.id]: e.target.value })
                        }
                      >
                        <option value="">Select</option>
                        {volunteers.map((vol) => (
                          <option key={vol.svid} value={vol.svid}>
                            {vol.name}
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() => handleAssign(req.id)}
                        className="ml-2 bg-blue-500 text-white px-2 py-1 rounded"
                      >
                        Assign
                      </button>
                      {req.assignedVolunteer && (
                        <div className="text-xs mt-1 text-green-600">
                          Assigned: {req.assignedVolunteer}
                        </div>
                      )}
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

export default BulkScrapPage;
