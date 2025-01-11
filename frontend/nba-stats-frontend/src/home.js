// src/home.js
import React from 'react';

const Home = () => {
  return (
    <div style={{ marginTop: '60px' }}> {/* Add margin-top equal to navbar height */}
      <h1 style={{ color: 'white', fontSize: '2rem' }}>Welcome to the Home Page!</h1>
      <p style={{ color: 'white', fontSize: '1rem' }}>This is the default page content.</p>
    </div>
  );
};

export default Home;  // Ensure this is the default export
