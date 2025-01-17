// src/Stats.js
import Card from './components/card'; // Import the Card component
import React from 'react';

const Stats = () => {
  return (
    <div className="min-h-screen pt-16 px-[2rem]"> {/* Use pt-16 to push content below navbar */}
      <h1 className="text-7xl font-quantico text-white text-center mb-[2rem] pt-[1rem] pb-[1rem]">Stats</h1>
      {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2rem]">
          <Card title="Stat 1">
            Stat info goes here...
          </Card>
          <Card title="Stat 2">
            Stat info goes here...
          </Card>
          <Card title="Stat 3">
            Stat info goes here...
          </Card>
        </div>
    </div>
  );
};

export default Stats;
