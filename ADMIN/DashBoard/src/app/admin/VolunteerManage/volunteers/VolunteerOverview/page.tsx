import React from "react";

// Define the type for a single volunteer
interface Volunteer {
    id: string;
    name: string;
    email: string;
    status: string;
  }
  
  // Define the type for props
  interface VolunteerOverviewProps {
    volunteers: Volunteer[]; // Array of Volunteer objects
  }

  const VolunteerOverview: React.FC<VolunteerOverviewProps> = ({ volunteers }) => {
    if (!volunteers || volunteers.length === 0) {
      return (
        <section className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow text-center">Total Volunteers: 0</div>
          <div className="bg-white p-4 rounded shadow text-center">Active: 0</div>
          <div className="bg-white p-4 rounded shadow text-center">Pending Approval: 0</div>
          <div className="bg-white p-4 rounded shadow text-center">Tasks Today: 0</div>
        </section>
      );
    }
  
    return (
      <section className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow text-center">
          Total Volunteers: {volunteers.length}
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          Active: {volunteers.filter((v) => v.status === "Active").length}
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          Pending Approval: {volunteers.filter((v) => v.status === "Pending").length}
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          Tasks Today: 5
        </div>
      </section>
    );
  };
  
  export default VolunteerOverview;



// import React from "react";

// interface Volunteer {
//   id: string;
//   name: string;
//   email: string;
//   status: string;
// }

// interface VolunteerOverviewProps {
//   volunteers: Volunteer[];
// }

// const VolunteerOverview: React.FC<VolunteerOverviewProps> = ({ volunteers }) => {
//   if (!volunteers || volunteers.length === 0) {
//     return (
//       <section className="grid grid-cols-4 gap-4 mb-6">
//         <div className="bg-white p-4 rounded shadow text-center">Total Volunteers: 0</div>
//         <div className="bg-white p-4 rounded shadow text-center">Active: 0</div>
//         <div className="bg-white p-4 rounded shadow text-center">Pending Approval: 0</div>
//         <div className="bg-white p-4 rounded shadow text-center">Tasks Today: 0</div>
//       </section>
//     );
//   }

//   return (
//     <section className="grid grid-cols-4 gap-4 mb-6">
//       <div className="bg-white p-4 rounded shadow text-center">
//         Total Volunteers: {volunteers.length}
//       </div>
//       <div className="bg-white p-4 rounded shadow text-center">
//         Active: {volunteers.filter((v) => v.status === "Active").length}
//       </div>
//       <div className="bg-white p-4 rounded shadow text-center">
//         Pending Approval: {volunteers.filter((v) => v.status === "Pending").length}
//       </div>
//       <div className="bg-white p-4 rounded shadow text-center">
//         Tasks Today: 5
//       </div>
//     </section>
//   );
// };

// export default VolunteerOverview;
