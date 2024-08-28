// StudentActions.js
import React from 'react';
import { FaEdit, FaFlag, FaTrash } from 'react-icons/fa';

const StudentActions = ({ student, handleEditClick, handleFlagClick, handleDeleteClick }) => (
  <div className="tile-actions">
    <FaEdit className="action-button FaEdit" onClick={(e) => { e.stopPropagation(); handleEditClick(student); }} title="Edit" />
    <FaFlag className="action-button FaFlag" onClick={(e) => { e.stopPropagation(); handleFlagClick(e, student); }} title="Flag" />
    <FaTrash className="action-button FaTrash" onClick={(e) => { e.stopPropagation(); handleDeleteClick(e, student); }} title="Delete" />
  </div>
);

export default StudentActions;
