import React from "react";

// Define the type for a single volunteer
interface Volunteer {
  id: string;
  name: string;
  email: string;
  status: string;
  points: number;
  tasks?: string[]; // ✅ Made `tasks` optional to prevent errors
}

// Define the props type for VolunteerTable
interface VolunteerTableProps {
  volunteers: Volunteer[];
  handleDelete: (id: string) => void;
}

const VolunteerTable: React.FC<VolunteerTableProps> = ({ volunteers = [], handleDelete }) => {
  return (
    <section className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Volunteers List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Points</th>
            <th className="border border-gray-300 p-2">Tasks</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.length > 0 ? (
            volunteers.map((volunteer) => (
              <tr key={volunteer.id} className="border border-gray-300">
                <td className="p-2">{volunteer.name}</td>
                <td className="p-2">{volunteer.email}</td>
                <td
                  className={`p-2 ${
                    volunteer.status === "Active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {volunteer.status}
                </td>
                <td className="p-2">{volunteer.points}</td>
                <td className="p-2">
                  {volunteer.tasks && volunteer.tasks.length > 0
                    ? volunteer.tasks.join(", ")
                    : "None"}
                </td>
                <td className="p-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleDelete(volunteer.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center py-4 text-gray-500">
                No Volunteers Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default VolunteerTable;




// import React from "react";

// interface Volunteer {
//   id: string;
//   name: string;
//   email: string;
//   status: string;
//   points: number;
//   tasks: string[];
// }

// interface VolunteerTableProps {
//   volunteers: Volunteer[];
//   handleDelete: (id: string) => void;
// }

// const VolunteerTable: React.FC<VolunteerTableProps> = ({ volunteers, handleDelete }) => {
//   return (
//     <section className="bg-white p-4 rounded shadow mb-6">
//       <h2 className="text-xl font-semibold mb-4">Volunteers List</h2>
//       <table className="w-full">
//         <thead>
//           <tr className="bg-gray-200">
//             <th>Name</th>
//             <th>Email</th>
//             <th>Status</th>
//             <th>Points</th>
//             <th>Tasks</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {volunteers.length > 0 ? (
//             volunteers.map((volunteer) => (
//               <tr key={volunteer.id} className="border-t">
//                 <td>{volunteer.name}</td>
//                 <td>{volunteer.email}</td>
//                 <td className={volunteer.status === "Active" ? "text-green-600" : "text-red-600"}>
//                   {volunteer.status}
//                 </td>
//                 <td>{volunteer.points}</td>
//                 <td>{volunteer.tasks.length > 0 ? volunteer.tasks.join(", ") : "None"}</td>
//                 <td>
//                   <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
//                   <button
//                     className="bg-red-500 text-white px-2 py-1 rounded ml-2"
//                     onClick={() => handleDelete(volunteer.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={6} className="text-center py-4">
//                 No Volunteers Found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </section>
//   );
// };

// export default VolunteerTable;
