import React from 'react';
import Tile from './Tile';

const TileView = ({ students, handleTileClick, handleEditClick, handleFlagClick, handleDeleteClick, setView }) => (
  <div className="Tile-view">
    <h2>Student Tile View</h2>
    <div className="tiles">
      {students.map((student, index) => (
        <Tile
          key={index}
          student={student}
          handleEditClick={handleEditClick}
          handleTileClick={handleTileClick}
          handleFlagClick={handleFlagClick}
          handleDeleteClick={handleDeleteClick}
        />
      ))}
    </div>
    <button onClick={() => setView('grid')}>Switch to Grid View</button>
  </div>
);

export default TileView;
