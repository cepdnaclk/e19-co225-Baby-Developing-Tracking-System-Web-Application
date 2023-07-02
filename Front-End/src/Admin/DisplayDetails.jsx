import { Footer } from "../Footer";
import { Header } from "./Header";
import { saveUser, updateUser, deleteUser, getAllUsers } from "../services/user_service";
import React, { useEffect, useState } from "react";
import "./Display.css";

export const DisplayDetails = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  useEffect(() => {
    loadAllUsers();
  }, []);

  const loadAllUsers = async () => {
    try {
      const response = await getAllUsers();
      setUserData(response.content);
      setIsLoading(false);
    } catch (error) {
      console.error("Error loading users:", error);
      setIsLoading(false);
    }
  };

  const handleUserUpdate = async (user) => {
    try {
      const response = await updateUser(user);
      console.log("User updated:", response);
      setSelectedUser(user);
      setShowUpdateForm(true);
      loadAllUsers(); // Refresh the user list
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleUserDelete = async (email) => {
    try {
      const response = await deleteUser(email);
      console.log("User deleted:", response);
      // Remove the user from the userData state
      setUserData((prevUserData) =>
        prevUserData.filter((user) => user.email !== email)
      );
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  

  const handleFormSubmit = async (updatedUser) => {
    try {
      // Call the update API with the updatedUser object
      const response = await updateUser(updatedUser);
      console.log("User updated:", response);
      setShowUpdateForm(false);
      loadAllUsers(); // Refresh the user list
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleFormCancel = () => {
    setShowUpdateForm(false);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="h2">USER DETAILS</h2>
        {isLoading ? (
          <p>Loading users...</p>
        ) : (
          <table className="table">
            <thead>
              <tr className="tr">
                <th className="th">Email</th>
                <th className="th">Role</th>
                <th className="th">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user.email}>
                  <td className="td">{user.email}</td>
                  <td className="td">{user.role}</td>
                  <td className="td">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleUserUpdate(user)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleUserDelete(user.email)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {showUpdateForm && (
        <UpdateForm
          user={selectedUser}
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
        />
      )}
      <Footer />
    </div>
  );
};

export const UpdateForm = ({ user, onSubmit, onCancel }) => {
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(updatedUser);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="update-form-container">
      <h3 className="update-form-title">Update User</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={updatedUser.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <input
            type="text"
            name="role"
            value={updatedUser.role}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="update-form-buttons">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
