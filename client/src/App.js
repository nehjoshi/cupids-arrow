import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import "./App.css";
import "./scss/Global.module.scss";
import ConfirmRegistration  from './pages/ConfirmRegistration';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirmRegistration/:token" element={<ConfirmRegistration />} />
      </Routes>
    </BrowserRouter>
  )
}
