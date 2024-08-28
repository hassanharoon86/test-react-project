import React from 'react';
import FlagIcon from './FlagIcon';
import StudentActions from './StudentActions';

const Tile = ({ student, handleEditClick, handleTileClick, handleFlagClick, handleDeleteClick }) => (
  <div className={`tile ${student.flagged ? 'flagged' : ''}`} onClick={() => handleTileClick(student)}>
    {student.flagged && <FlagIcon />}
    <img src={student.picture.thumbnail} alt="profile" className="tile-picture" />
    <h3>{student.name.first} {student.name.last}</h3>
    <p>Gender: {student.gender}</p>
    <p>Age: {student.dob.age}</p>
    <p>Email: {student.email}</p>
    <p>Location: {student.location.city}, {student.location.state}, {student.location.country}</p>
    <p>Phone: {student.phone}</p>
    <p>Cell: {student.cell}</p>
    <StudentActions
      student={student}
      handleEditClick={handleEditClick}
      handleFlagClick={handleFlagClick}
      handleDeleteClick={handleDeleteClick}
    />
  </div>
);

export default Tile;
