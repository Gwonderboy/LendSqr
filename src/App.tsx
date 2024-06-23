import React from 'react';
import logo from './logo.svg';
import './App.scss';
import './fonts.scss';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import UserPage from './pages/userPage';
import DetailsPage from './pages/detailsPAge';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="user/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
