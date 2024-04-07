import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  MagnifyingGlassIcon,
  HomeIcon,
  UserIcon,
  XCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

function SideBar() {
  const [showSidebar, setShowSidebar] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="fixed top-4 left-4 z-50 md:hidden"
      >
        {showSidebar ? (
          <XCircleIcon className="h-8 w-8 text-white" />
        ) : (
          <Bars3Icon className="h-8 w-8 text-indigo" />
        )}
      </button>
      <div
        className={`fixed bg-indigo-600 top-0 left-0 min-h-screen w-full p-4 transition-all duration-300 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:min-h-screen md:w-1/4 md:p-10`}
      >
        <h1 className="text-white text-3xl mt-8">Admin Dashboard</h1>
        <div className="relative mt-5">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-lg pl-10"
          />
          <button className="absolute left-2 inset-y-0 flex items-center">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        <ul className="mt-10">
          <li className="sidebar-item">
            <HomeIcon className="sidebar-icon" />
            <div onClick={() => navigate("/")}>Home</div>
          </li>
          <li className="sidebar-item">
            <UserIcon className="sidebar-icon" />
            <div onClick={() => navigate("/profile")}>Profile</div>
          </li>
          <li className="sidebar-item">
            <XCircleIcon className="sidebar-icon" />
            <div
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
            >
              Logout
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
