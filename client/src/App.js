import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import "./App.css";
import Login from './pages/Login';
import Gender from './pages/Gender';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gender" element={<Gender />} />
      </Routes>
    </BrowserRouter>
  )
}
