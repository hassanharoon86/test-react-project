import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import GridView from './components/GridView';
import TileView from './components/TileView';
import DetailView from './components/DetailView';
import ConfirmPopup from './components/ConfirmPopup';
import EditView from './components/EditView';
import './App.css';

function App() {
  const [view, setView] = useState('grid');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);
  const [editingStudent, setEditingStudent] = useState(null);
  const [editForm, setEditForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cell: '',
  });

  const handleEditClick = (student) => {
    setEditingStudent(student);
    setEditForm({
      firstName: student?.name?.first,
      lastName: student?.name?.last,
      email: student?.email,
      phone: student?.phone,
      cell: student?.cell,
    });
    setView('edit');
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSaveEdit = () => {
    const updatedStudents = students.map(s =>
      s.login.uuid === editingStudent.login.uuid
        ? {
            ...s,
            name: { ...s.name, first: editForm.firstName, last: editForm.lastName },
            email: editForm.email,
            phone: editForm.phone,
            cell: editForm.cell,
          }
        : s
    );
    setStudents(updatedStudents);
    setEditingStudent(null);
    setView('tile');
  };

  const handleCancelEdit = () => {
    setEditingStudent(null);
    setView('tile');
  };

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=10');
        setStudents(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching students:', error);
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  const handleTileClick = (student) => {
    setSelectedStudent(student);
    setView('detail');
  };

  const handleFlagClick = (event, student) => {
    event.stopPropagation();
    const updatedStudents = students.map(s =>
      s.login.uuid === student.login.uuid ? { ...s, flagged: !s.flagged } : s
    );
    setStudents(updatedStudents);
    const action = student.flagged ? 'Unflagged' : 'Flagged';
    alert(`${student.name.first} ${student.name.last} ${action}`);
  };

  const handleDeleteClick = (event, student) => {
    event.stopPropagation();
    setStudentToDelete(student);
    setShowConfirmPopup(true);
  };

  const handleConfirmDelete = () => {
    const updatedStudents = students.filter(s => s.login.uuid !== studentToDelete.login.uuid);
    setStudents(updatedStudents);
    setShowConfirmPopup(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmPopup(false);
  };

  const handleBackToTiles = () => {
    setView('tile');
    setSelectedStudent(null);
  };

  const handleSwitchToGrid = () => {
    setView('grid');
  };

  return (
    <div className="App">
      <Header setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      {loading ? (
        <p>Loading...</p>
      ) : view === 'grid' ? (
        <GridView students={students} setView={setView} />
      ) : view === 'tile' ? (
        <TileView
          students={students}
          handleTileClick={handleTileClick}
          handleEditClick={handleEditClick}
          handleFlagClick={handleFlagClick}
          handleDeleteClick={handleDeleteClick}
          setView={setView}
        />
      ) : view === 'detail' && selectedStudent ? (
        <DetailView
          selectedStudent={selectedStudent}
          handleBackToTiles={handleBackToTiles}
          handleSwitchToGrid={handleSwitchToGrid}
        />
      ) : view === 'edit' && editingStudent ? (
        <EditView
          editForm={editForm}
          handleEditChange={handleEditChange}
          handleSaveEdit={handleSaveEdit}
          handleCancelEdit={handleCancelEdit}
        />
      ) : null}
      {showConfirmPopup && (
        <ConfirmPopup
          studentToDelete={studentToDelete}
          handleConfirmDelete={handleConfirmDelete}
          handleCancelDelete={handleCancelDelete}
        />
      )}
    </div>
  );
}

export default App;
