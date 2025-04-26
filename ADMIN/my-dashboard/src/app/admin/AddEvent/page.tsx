"use client";

import React, { useState, useEffect } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import SideBar from "../../../components/SideBar/page";
import { Bell } from "lucide-react";
import Image from "next/image";
import { db } from "../../../components/services/firebaseConfig";
import { collection, addDoc, getDocs, deleteDoc, doc, setDoc } from "firebase/firestore";

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
  createdAt: string;
}

const EventManagement = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [newEvent, setNewEvent] = useState({ 
    title: "", 
    date: "", 
    description: "",
    location: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [firebaseReady, setFirebaseReady] = useState(false);

  // Reference to Events collection
  const eventsRef = collection(db, "Events");

  // First check Firebase connection
  useEffect(() => {
    const checkFirebaseConnection = async () => {
      try {
        console.log("[DEBUG] Testing Firebase connection...");
        const testRef = doc(collection(db, "ConnectionTest"));
        await setDoc(testRef, { test: "connection" }, { merge: true });
        console.log("[DEBUG] Firebase connection successful!");
        setFirebaseReady(true);
      } catch (error) {
        console.error("[DEBUG] Firebase connection failed:", error);
        setError(`Firebase connection error: ${error instanceof Error ? error.message : "Unknown error"}`);
        setFirebaseReady(false);
      }
    };

    checkFirebaseConnection();
  }, []);

  // Fetch events from Firebase
  const fetchEvents = async () => {
    if (!firebaseReady) return;
    
    setLoading(true);
    setError(null);
    try {
      console.log("[DEBUG] Attempting to fetch events...");
      const snapshot = await getDocs(eventsRef);
      console.log("[DEBUG] Received snapshot:", snapshot);
      
      if (snapshot.empty) {
        console.log("[DEBUG] No events found - collection is empty");
        setEvents([]);
      } else {
        const eventsData: Event[] = snapshot.docs.map(doc => ({
          id: doc.id,
          title: doc.data().title || '',
          date: doc.data().date || '',
          description: doc.data().description || '',
          location: doc.data().location || '',
          createdAt: doc.data().createdAt || new Date().toISOString()
        }));
        console.log("[DEBUG] Events loaded:", eventsData);
        setEvents(eventsData);
      }
    } catch (error) {
      console.error("[DEBUG] Detailed fetch error:", error);
      setError(`Failed to load events: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (firebaseReady) {
      fetchEvents();
    }
  }, [firebaseReady]);

  const handleAddEvent = async () => {
    if (!firebaseReady) {
      setError("Firebase is not ready. Please check connection.");
      return;
    }

    if (!newEvent.title || !newEvent.date || !newEvent.description || !newEvent.location) {
      setError("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      console.log("[DEBUG] Attempting to add event:", newEvent);
      
      const docRef = await addDoc(eventsRef, {
        title: newEvent.title,
        date: new Date(newEvent.date).toISOString(),
        description: newEvent.description,
        location: newEvent.location,
        createdAt: new Date().toISOString()
      });

      console.log("[DEBUG] Event added with ID:", docRef.id);
      
      setEvents([...events, {
        id: docRef.id,
        title: newEvent.title,
        date: newEvent.date,
        description: newEvent.description,
        location: newEvent.location,
        createdAt: new Date().toISOString()
      }]);

      setNewEvent({ 
        title: "", 
        date: "", 
        description: "",
        location: ""
      });
      
    } catch (error) {
      console.error("[DEBUG] Detailed add error:", error);
      setError(`Failed to add event: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteEvent = async (id: string) => {
    if (!firebaseReady) {
      setError("Firebase is not ready. Please check connection.");
      return;
    }

    if (!confirm("Are you sure you want to delete this event?")) return;
    
    try {
      setLoading(true);
      setError(null);
      console.log("[DEBUG] Attempting to delete event:", id);
      
      await deleteDoc(doc(db, "Events", id));
      setEvents(events.filter(event => event.id !== id));
      
      console.log("[DEBUG] Event deleted successfully");
    } catch (error) {
      console.error("[DEBUG] Detailed delete error:", error);
      setError(`Failed to delete event: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setLoading(false);
    }
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
              <Image 
                src="/profile.jpg" 
                alt="Admin" 
                width={32} 
                height={32} 
                className="rounded-full" 
              />
              <p className="text-sm font-medium">Admin</p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          <h1 className="text-2xl font-semibold mb-4">Event Management</h1>

          {/* Connection Status */}
          {!firebaseReady && (
            <div className="mb-4 p-3 bg-yellow-100 text-yellow-800 rounded-lg">
              <p className="font-semibold">Firebase Connection Issue</p>
              <p>Please check your Firebase configuration and internet connection.</p>
              <p className="text-sm mt-2">Error details are in the browser console.</p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {/* Add Event Form */}
          <div className="bg-white shadow-md rounded-lg p-4 mb-6">
            <h2 className="text-lg font-semibold mb-3">Add New Event</h2>
            
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Event Title*</label>
              <input
                type="text"
                className="border rounded-lg p-2 w-full"
                placeholder="Enter event title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                required
                disabled={!firebaseReady || loading}
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Event Date*</label>
              <input
                type="date"
                className="border rounded-lg p-2 w-full"
                value={newEvent.date}
                onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                required
                disabled={!firebaseReady || loading}
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Location*</label>
              <input
                type="text"
                className="border rounded-lg p-2 w-full"
                placeholder="Enter event location"
                value={newEvent.location}
                onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                required
                disabled={!firebaseReady || loading}
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Description*</label>
              <textarea
                className="border rounded-lg p-2 w-full"
                rows={3}
                placeholder="Enter event description"
                value={newEvent.description}
                onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                required
                disabled={!firebaseReady || loading}
              ></textarea>
            </div>

            <button
              onClick={handleAddEvent}
              disabled={!firebaseReady || loading}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center disabled:bg-blue-400 w-full md:w-auto"
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <>
                  <FaPlus className="mr-2" /> Add Event
                </>
              )}
            </button>
          </div>

          {/* Events List */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold">Upcoming Events</h2>
              <button 
                onClick={fetchEvents}
                disabled={!firebaseReady || loading}
                className="text-sm text-blue-600 hover:text-blue-800 disabled:text-gray-400"
              >
                Refresh
              </button>
            </div>
            
            {!firebaseReady ? (
              <p className="text-gray-500 py-4 text-center">Waiting for Firebase connection...</p>
            ) : loading && events.length === 0 ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              </div>
            ) : events.length === 0 ? (
              <p className="text-gray-500 py-4 text-center">No events found. Add your first event above.</p>
            ) : (
              <ul className="divide-y">
                {events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map((event) => (
                  <li key={event.id} className="py-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{event.title}</h3>
                        <p className="text-sm text-gray-500 mb-1">
                          {new Date(event.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                        <p className="text-gray-600 font-medium mb-1">Location: {event.location}</p>
                        <p className="text-gray-600 whitespace-pre-line">{event.description}</p>
                        <p className="text-xs text-gray-400 mt-2">
                          Created: {new Date(event.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDeleteEvent(event.id)}
                        disabled={!firebaseReady || loading}
                        className="ml-4 text-red-600 hover:text-red-800 disabled:text-red-300 p-2 rounded-full hover:bg-red-50"
                        title="Delete event"
                        aria-label="Delete event"
                      >
                        <FaTrash />
                      </button>
                    </div>
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