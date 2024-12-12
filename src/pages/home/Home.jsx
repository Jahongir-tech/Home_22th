import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br flex items-center justify-center text-white">
      <div className="text-center space-y-8 max-w-3xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide">
          <span className="text-black ">CRUD</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          A modern platform to manage users efficiently. Create, view, and
          update user profiles seamlessly.
        </p>
        <div className="flex justify-center gap-6">
          <NavLink
            to="/users"
            className="px-6 py-3 bg-blue-400 rounded-md text-lg font-medium hover:bg-blue-700 transition"
          >
            View Users
          </NavLink>
          <NavLink
            to="/createuser"
            className="px-6 py-3 bg-green-400 rounded-md text-lg font-medium hover:bg-green-700 transition"
          >
            Create User
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
