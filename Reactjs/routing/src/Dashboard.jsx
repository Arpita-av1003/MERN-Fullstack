import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-blue-500 p-4 text-white">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </header>
      <main className="flex-1 p-4">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-xl font-bold">Welcome to the Dashboard!</h2>
          <p className="text-gray-600">This is where you can view and manage your data.</p>
        </div>
      </main>
      <footer className="bg-gray-200 p-4 text-center text-gray-600">
        &copy; 2021 Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;


