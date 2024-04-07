import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  UserGroupIcon,
  PencilIcon,
  ChatBubbleLeftEllipsisIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

import UsersCard from "../UsersCard/UsersCard";
import { useNavigate } from "react-router-dom";

function UsersTable() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    setUsers(data.users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleEdit = (userId) => {
    navigate(`/edit/${userId}`, {
      state: users.find((user) => user.id === userId),
    });
  };

  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      fetch(`https://dummyjson.com/users/${userId}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          setUsers(users.filter((user) => user.id !== userId));
          toast.success("User deleted successfully!");
        })
        .catch((error) => {
          toast.error("Error deleting user. Please try again.");
        });
    }
  };

  return (
    <div className="mx-8">
      <div className="grid gap-4 lg:grid-cols-3">
        <UsersCard
          icon={<UserGroupIcon className="text-white w-6 h-6" />}
          heading="100"
          paragraph="All Users"
        />
        <UsersCard
          icon={<PencilIcon className="text-white w-6 h-6" />}
          heading="50"
          paragraph="New Users"
        />
        <UsersCard
          icon={<ChatBubbleLeftEllipsisIcon className="text-white w-6 h-6" />}
          heading="25"
          paragraph="Active Users"
        />
      </div>
      <div className="flex min-w-full mt-8 border-b border-gray-200 shadow-md rounded-lg overflow-hidden overflow-x-scroll">
        <table className="min-w-full">
          <thead className="bg-indigo-600">
            <tr className="bg-white-600 text-white text-center">
              <th className="py-3 px-4">NAME</th>
              <th className="py-3 px-4">EMAIL</th>
              <th className="py-3 px-4">STATUS</th>
              <th className="py-3 px-4">EDIT</th>
              <th className="py-3 px-4">DELETE</th>
            </tr>
          </thead>
          <tbody className="bg-white text-center">
            {users.length > 0 &&
              users.map((user) => (
                <tr>
                  <td className="px-6 py-4 flex items-center">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user.image}
                      alt="user"
                    />
                    <p className="text-sm text-gray-900 font-medium ml-4">
                      {user.firstName} {user.lastName}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900 font-medium">
                      {user.email}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`py-1 px-2 text-xs font-semibold rounded-full ${
                        user.age > 40
                          ? "text-red-800 bg-red-100"
                          : "text-green-800 bg-green-100"
                      }`}
                    >
                      {user.age > 40 ? "Inactive" : "Active"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="text-sm text-gray-900 font-medium"
                      onClick={() => handleEdit(user.id)}
                    >
                      <PencilIcon className="h-5 w-5 text-blue-500" />
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="text-sm text-gray-900 font-medium"
                      onClick={() => handleDelete(user.id)}
                    >
                      <TrashIcon className="h-5 w-5 text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersTable;
