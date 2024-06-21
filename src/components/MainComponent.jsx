import React, { useState } from 'react';
import Sidebar from './Sidebar';
import UserTable from './UserTable';
import GroupTable from './GroupTable';
import './MainComponent.css';

const MainComponent = () => {
  const [activeTab, setActiveTab] = useState('user');

  const handleMenuChange = (menu) => {
    setActiveTab(menu);
  };

  return (
    <div className="main-container">
      <Sidebar onMenuChange={handleMenuChange} />
      <div className="content">
        {activeTab === 'user' && <UserTable />}
        {activeTab === 'group' && <GroupTable />}
        {/* Add more conditions for other tabs as needed */}
      </div>
    </div>
  );
};

export default MainComponent;
