import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import './GroupTable.css';

const GroupTable = () => {
  const groups = [
    { id: 1, name: 'Admins', userCount: 5, permissionCount: 10 },
    { id: 2, name: 'Moderators', userCount: 8, permissionCount: 15 },
    { id: 3, name: 'Users', userCount: 50, permissionCount: 5 },
  ];

  return (
    <div className="group-table-container">
      <div className="table-header">
        <h2>Groups</h2>
        <div className="table-buttons">
          <button className="add-group-btn">+ Add Group</button>
        </div>
      </div>
      <table className="group-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>User Count</th>
            <th>Permission Count</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {groups.map(group => (
            <tr key={group.id}>
              <td>{group.name}</td>
              <td>{group.userCount}</td>
              <td>{group.permissionCount}</td>
              <td>
                <button className="action-btn edit"><FaEdit /></button>
                <button className="action-btn delete"><FaTrashAlt /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroupTable;

