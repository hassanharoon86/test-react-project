import React from 'react';

const ConfirmPopup = ({ studentToDelete, handleConfirmDelete, handleCancelDelete }) => (
  <div className="Confirm-popup-overlay">
    <div className="Confirm-popup">
      <h3>Are you sure you want to delete {studentToDelete.name.first} {studentToDelete.name.last}?</h3>
      <div className="Confirm-popup-actions">
        <button onClick={handleConfirmDelete} className="confirm-button">Yes, Delete</button>
        <button onClick={handleCancelDelete} className="cancel-button">Cancel</button>
      </div>
    </div>
  </div>
);

export default ConfirmPopup;
