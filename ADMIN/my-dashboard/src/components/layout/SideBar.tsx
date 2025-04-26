  import Link from "next/link";
  import { useState } from "react";
  import { FiMenu, FiX, FiUsers, FiHome } from "react-icons/fi";

  const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="flex">
        {/* Sidebar (Desktop View) */}
        <div className="hidden md:flex flex-col w-64 h-screen bg-gray-900 text-white p-5">
          <h2 className="text-xl font-semibold mb-5">Admin Panel</h2>
          <nav className="flex flex-col space-y-4">
            <Link href="/admin/VolunteerManage/volunteers/AddVolunteers">
              <div className="flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
                <FiHome className="text-lg" />
                <span>Dashboard</span>
              </div>
            </Link>
            <Link href="/admin/VolunteerManage/volunteers/VolunteerOverview">
              <div className="flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
                <FiUsers className="text-lg" />
                <span>Volunteers</span>
              </div>
            </Link>
          </nav>
        </div>

        {/* Mobile Sidebar Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-3 text-white bg-gray-900 fixed top-5 left-5 rounded-lg z-50"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Sidebar (Mobile View) */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}>
            <div className="w-64 h-full bg-gray-900 text-white p-5 absolute left-0 top-0">
              <h2 className="text-xl font-semibold mb-5">Admin Panel</h2>
              <nav className="flex flex-col space-y-4">
                <Link href="/dashboard">
                  <div className="flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
                    <FiHome className="text-lg" />
                    <span>Dashboard</span>
                  </div>
                </Link>
                <Link href="/dashboard/volunteers">
                  <div className="flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
                    <FiUsers className="text-lg" />
                    <span>Volunteers</span>
                  </div>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default SideBar;
