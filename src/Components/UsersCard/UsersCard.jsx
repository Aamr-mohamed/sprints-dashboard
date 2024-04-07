import React from "react";

function UsersCard({ icon, heading, paragraph }) {
  return (
    <div className="usertable-cards">
      <div className="bg-indigo-600 rounded p-3">{icon}</div>
      <div className="mx-4 text-center">
        <h4 className="text-2xl font-semibold text-gray-700">{heading}</h4>
        <p className="text-gray-500">{paragraph}</p>
      </div>
    </div>
  );
}

export default UsersCard;
