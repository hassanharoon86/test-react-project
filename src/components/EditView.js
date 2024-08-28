// EditView.js
import React from 'react';

const EditView = ({ editForm, handleEditChange, handleSaveEdit, handleCancelEdit }) => (
  <div className="Edit-view-overlay" onClick={(e) => e.target.classList.contains('Edit-view-overlay') && handleCancelEdit()}>
    <div className="Edit-view">
      <h2>Edit Student</h2>
      <form>
        <label>
          First Name:
          <input type="text" name="firstName" value={editForm.firstName} onChange={handleEditChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={editForm.lastName} onChange={handleEditChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={editForm.email} onChange={handleEditChange} />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={editForm.phone} onChange={handleEditChange} />
        </label>
        <label>
          Cell:
          <input type="text" name="cell" value={editForm.cell} onChange={handleEditChange} />
        </label>
        <div className="Edit-view-actions">
          <button type="button" onClick={handleSaveEdit}>Save</button>
          <button type="button" onClick={handleCancelEdit}>Cancel</button>
        </div>
      </form>
    </div>
  </div>
);

export default EditView;
