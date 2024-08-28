import React from 'react';

const DetailView = ({ selectedStudent, handleBackToTiles, handleSwitchToGrid }) => (
  <div className="Detail-view-overlay" onClick={handleBackToTiles}>
    <div className="Detail-view">
      <h2>Student Details</h2>
      <img src={selectedStudent.picture.large} alt="profile" className="detail-picture" />
      <p><strong>ID:</strong> {selectedStudent.login.uuid}</p>
      <p><strong>Name:</strong> {selectedStudent.name.first} {selectedStudent.name.last}</p>
      <p><strong>Gender:</strong> {selectedStudent.gender}</p>
      <p><strong>Age:</strong> {selectedStudent.dob.age}</p>
      <p><strong>Email:</strong> {selectedStudent.email}</p>
      <p><strong>Location:</strong> {selectedStudent.location.street.number} {selectedStudent.location.street.name}, {selectedStudent.location.city}, {selectedStudent.location.state}, {selectedStudent.location.country} {selectedStudent.location.postcode}</p>
      <p><strong>Phone:</strong> {selectedStudent.phone}</p>
      <p><strong>Cell:</strong> {selectedStudent.cell}</p>
      <button onClick={handleBackToTiles} className="button-spacing">Back to Tile View</button>
      <button onClick={handleSwitchToGrid}>Switch to Grid View</button>
    </div>
  </div>
);

export default DetailView;
