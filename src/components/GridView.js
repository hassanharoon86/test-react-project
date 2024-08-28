import React from 'react';

const GridView = ({ students, setView }) => (
  <div className="Grid-view">
    <h2>Student Grid View</h2>
    <table>
      <thead>
        <tr>
          {/* <th>ID</th> */}
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Email</th>
          <th>Location</th>
          <th>Phone</th>
          <th>Cell</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            {/* <td>{student.login.uuid}</td> */}
            <td>{student.name.first} {student.name.last}</td>
            <td>{student.gender}</td>
            <td>{student.dob.age}</td>
            <td>{student.email}</td>
            <td>{student.location.city}, {student.location.state}, {student.location.country}</td>
            <td>{student.phone}</td>
            <td>{student.cell}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <button onClick={() => setView('tile')}>Switch to Tile View</button>
  </div>
);

export default GridView;
