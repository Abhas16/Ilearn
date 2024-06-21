import React, { useState } from "react";
import "./assets/styles/main.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import UserTable from "./components/UserTable";
import GroupTable from "./components/GroupTable";
import Filter from "./components/Filter";

const App = () => {
  const [showGroupTable, setShowGroupTable] = useState(false);

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="filter">
          <Filter />
          <div className="content">
            <nav className="navbar">
              <button onClick={() => setShowGroupTable(false)}>Users</button>
              <button onClick={() => setShowGroupTable(true)}>Groups</button>
            </nav>
            {showGroupTable ? <GroupTable /> : <UserTable />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
