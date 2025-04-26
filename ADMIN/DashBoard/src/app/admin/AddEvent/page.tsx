"use client";

import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import SideBar from "../../../components/SideBar/page";
import { Bell } from "lucide-react";
import Image from "next/image";

const EventManagement = () => {
  const [events, setEvents] = useState<{ id: number; title: string; date: string; description: string }[]>([]);
  const [newEvent, setNewEvent] = useState({ title: "", date: "", description: "" });

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.description) {
      alert("Please fill in all fields.");
      return;
    }

    const newEventData = {
      id: Date.now(), // Temporary unique ID
      ...newEvent,
    };

    setEvents([...events, newEventData]);
    setNewEvent({ title: "", date: "", description: "" });
  };

  const handleDeleteEvent = (id: number) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <SideBar />
      <div className="flex-1">
        {/* Navbar */}
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

        {/* Event Management Section */}
        <main className="p-6">
          <h1 className="text-2xl font-semibold mb-4">Event Management</h1>

          {/* Event Form */}
          <div className="bg-white shadow-md rounded-lg p-4 mb-6">
            <h2 className="text-lg font-semibold mb-3">Add New Event</h2>
            <div className="mb-4">
              <label className="block mb-2">Event Title</label>
              <input
                type="text"
                placeholder="Enter event title"
                className="border rounded-lg p-2 w-full"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Event Date</label>
              <input
                type="date"
                className="border rounded-lg p-2 w-full"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Description</label>
              <textarea
                placeholder="Enter event description"
                className="border rounded-lg p-2 w-full"
                rows={3}
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              ></textarea>
            </div>
            <button
              onClick={handleAddEvent}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
            >
              <FaPlus className="mr-2" /> Add Event
            </button>
          </div>

          {/* Event List */}
          <h2 className="text-xl font-semibold mb-3">Upcoming Events</h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            {events.length === 0 ? (
              <p className="text-gray-500">No events added yet.</p>
            ) : (
              <ul>
                {events.map((event) => (
                  <li key={event.id} className="flex justify-between items-center border-b py-3">
                    <div>
                      <h3 className="font-semibold">{event.title}</h3>
                      <p className="text-sm text-gray-500">{event.date}</p>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteEvent(event.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 flex items-center"
                    >
                      <FaTrash className="mr-2" /> Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default EventManagement;
