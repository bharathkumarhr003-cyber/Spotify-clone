import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Player from './components/Player';
import LoginModal from './components/LoginModal';

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [view, setView] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app">
      <Sidebar setView={setView} user={user} setShowModal={setShowModal} />
      <MainContent
        setCurrentSong={setCurrentSong}
        view={view}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Player currentSong={currentSong} />
      {showModal && <LoginModal setUser={setUser} setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
