import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-caribbeanCurrent text-teaGreen p-2 fixed w-full top-0 left-0 z-10 border-b-4 border-teaGreen hover:bg-gray-800 transition-colors ease-in-out duration-300 font-quantico">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <h1 className="text-xl font-bold">Stats</h1>
        
        {/* Navbar links in the center */}
        <div className="space-x-6 flex">
          <a href="/" className="nav-link">Home</a>
          <a href="/stats" className="nav-link">Stats</a>
        </div>

        {/* Profile and Login on the right */}
        <div className="space-x-6 flex">
          <a href="/profile" className="nav-link">Profile</a>
          <a href="/login" className="nav-link">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
