import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserTable.css';

const UserTable = () => {
  const [users] = useState([
    { id: 1, name: 'Leslie Alexander', email: 'example@gmail.com', role: 'Super Admin', phone: '01887755330', dob: '1999-10-02', status: 'Online', img: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, name: 'Esther Howard', email: 'example@gmail.com', role: 'Moderator', phone: '01887755330', dob: '1999-10-02', status: 'Online', img: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 3, name: 'Brooklyn Simmons', email: 'example@gmail.com', role: 'Moderator', phone: '01887755330', dob: '1999-10-02', status: 'Online', img: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: 4, name: 'Eleanor Pena', email: 'example@gmail.com', role: 'Manager', phone: '01887755330', dob: '1999-10-02', status: 'Offline', img: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 5, name: 'Albert Flores', email: 'example@gmail.com', role: 'admin_1', phone: '01887755330', dob: '1999-10-02', status: 'Online', img: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { id: 6, name: 'Bessie Cooper', email: 'example@gmail.com', role: 'Unknown', phone: '01887755330', dob: '1999-10-02', status: 'Online', img: 'https://randomuser.me/api/portraits/women/6.jpg' },
  ]);

  const [pageNumber, setPageNumber] = useState(0);
  const [usersPerPage, setUsersPerPage] = useState(5);
  const [showForm, setShowForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCloseForm = () => setShowForm(false);
  const handleShowForm = () => setShowForm(true);
  const handleSaveChanges = () => {
    setShowForm(false);
    setShowConfirmation(true);
  };

  const handleCloseConfirmation = () => setShowConfirmation(false);
  const handleConfirmAddition = () => {
    setShowConfirmation(false);
  };

  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((user) => (
    <tr key={user.id}>
      <td><img src={user.img} alt={user.name} className="profile-pic" /> {user.name}</td>
      <td>{user.email}</td>
      <td><span className={`role ${user.role.toLowerCase().replace(' ', '-')}`}>{user.role}</span></td>
      <td>{user.phone}</td>
      <td>{user.dob}</td>
      <td><span className={`status ${user.status.toLowerCase()}`}>{user.status}</span></td>
      <td>
        <button className="action-btn edit"><FaEdit /></button>
        <button className="action-btn delete"><FaTrashAlt /></button>
      </td>
    </tr>
  ));

  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => setPageNumber(selected);

  const handleUsersPerPageChange = (e) => {
    setUsersPerPage(Number(e.target.value));
    setPageNumber(0);
  };

  return (
    <div className="user-table-container">
      <div className="table-header">
        <h2>Users</h2>
        <div className="table-buttons">
          <button className="add-user-btn" onClick={handleShowForm}>+ Add User</button>
          <button className="delete-btn">Delete</button>
        </div>
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Phone</th>
            <th>Date of Birth</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayUsers}
        </tbody>
      </table>
      <div className="table-footer">
        <div className="show-results">
          Show result:
          <select value={usersPerPage} onChange={handleUsersPerPageChange}>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="pagination">
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'paginationBttns'}
            previousLinkClassName={'previousBttn'}
            nextLinkClassName={'nextBttn'}
            disabledClassName={'paginationDisabled'}
            activeClassName={'paginationActive'}
          />
        </div>
      </div>

      <Modal show={showForm} onHide={handleCloseForm} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>New User Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-header">
            <img src="https://via.placeholder.com/100" alt="Profile" className="profile-pic-large" />
          </div>
          <form>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="First Name" className="form-control" />
              </div>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Last Name" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label>Username</label>
              <input type="text" placeholder="Type here..." className="form-control" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" placeholder="US +1 234 567 890" className="form-control" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Role</label>
                <select className="form-control">
                  <option>Moderator</option>
                  <option>Super Admin</option>
                  <option>Manager</option>
                  <option>admin_1</option>
                  <option>Unknown</option>
                </select>
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input type="date" className="form-control" />
              </div>
            </div>
            <h5>Social Media</h5>
            <div className="form-group">
              <label>LinkedIn URL</label>
              <input type="text" placeholder="Link to your LinkedIn URL" className="form-control" />
            </div>
            <div className="form-group">
              <label>Facebook URL</label>
              <input type="text" placeholder="Link to your Facebook URL" className="form-control" />
            </div>
            <div className="form-group">
              <label>Additional Info</label>
              <textarea className="form-control" placeholder="Type here..." rows="3"></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="discard-btn" onClick={handleCloseForm}>Discard</button>
          <button className="save-changes-btn" onClick={handleSaveChanges}>Save Changes</button>
        </Modal.Footer>
      </Modal>

      {showConfirmation && (
        <div className="confirmation-box">
          <div className="confirmation-content">
            <div className="confirmation-icon">!</div>
            <h2>Confirm Addition</h2>
            <p>Are you sure you want to add this user?</p>
            <button className="confirm-btn" onClick={handleConfirmAddition}>Confirm</button>
            <button className="cancel-btn" onClick={handleCloseConfirmation}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;
