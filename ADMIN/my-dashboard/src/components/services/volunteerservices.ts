// Temporary mock volunteer service

// let volunteers = [
//   { id: "1", name: "John Doe", email: "john@example.com", status: "Pending" },
//   { id: "2", name: "Jane Smith", email: "jane@example.com", status: "Approved" },
// ];

// // Get all volunteers
// export const getVolunteers = async () => {
//   return [...volunteers]; // Return a copy to prevent mutation
// };

// // Add a new volunteer
// export const addVolunteer = async (newVolunteer: { name: string; email: string; status: string }) => {
//   const id = String(volunteers.length + 1); // Simulating an auto-increment ID
//   volunteers.push({ id, ...newVolunteer });
// };

// // Delete a volunteer by ID
// export const deleteVolunteer = async (id: string) => {
//   volunteers = volunteers.filter((v) => v.id !== id);
// };

// import { db } from "./firebaseConfig";
// import { collection, addDoc } from "firebase/firestore";

// export const addVolunteer = async (volunteer: { name: string; email: string; status: string }) => {
//   try {
//     const docRef = await addDoc(collection(db, "Volunteers"), volunteer);
//     console.log("Volunteer added with ID: ", docRef.id);
//   } catch (error) {
//     console.error("Error adding volunteer: ", error);
//     throw error;
//   }
// };


import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const addVolunteer = async (volunteerData: { name: string; email: string }) => {
  try {
    const docRef = await addDoc(collection(db, "Volunteers"), volunteerData);
    console.log("Volunteer added successfully:", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding volunteer:", error);
    return { success: false, error };
  }
};

