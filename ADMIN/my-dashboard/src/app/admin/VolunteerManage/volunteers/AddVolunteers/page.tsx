"use client";
import React, { useState } from "react";
import { addVolunteer } from "../../../../../components/services/volunteerservices";

interface AddVolunteerProps {
    refreshData: () => void;
}

const AddVolunteer: React.FC<AddVolunteerProps> = ({ refreshData }) => {
    const [newVolunteer, setNewVolunteer] = useState({ name: "", email: "" });

    const handleAddVolunteer = async () => {
        if (!newVolunteer.name || !newVolunteer.email) {
            alert("Please fill in both name and email!");
            return;
        }

        try {
            console.log("Adding volunteer:", newVolunteer); // Debugging log
            await addVolunteer(newVolunteer);
            setNewVolunteer({ name: "", email: "" }); // Reset input fields
            refreshData(); // Ensure data is refreshed
            alert("Volunteer added successfully!");
        } catch (error) {
            console.error("Error adding volunteer:", error);
            alert("Failed to add volunteer!");
        }
    };

    return (
        <section className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Add Volunteer</h2>
            <input
                type="text"
                placeholder="Name"
                className="border p-2 mb-2 w-full"
                value={newVolunteer.name}
                onChange={(e) => setNewVolunteer({ ...newVolunteer, name: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                className="border p-2 mb-2 w-full"
                value={newVolunteer.email}
                onChange={(e) => setNewVolunteer({ ...newVolunteer, email: e.target.value })}
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleAddVolunteer}>
                Add Volunteer
            </button>
        </section>
    );
};

export default AddVolunteer;

