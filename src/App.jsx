import React from 'react';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
