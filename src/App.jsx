import React from 'react'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Events from "./pages/Events";
import MyEvents from "./pages/MyEvents";
import Profile from "./pages/Profile";
import Authenticate from "./pages/Authenticate";
import MissingRoute from './pages/MissingRoute';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/myEvents" element={<MyEvents />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/authenticate" element={<Authenticate />} />
          <Route path="*" element={<MissingRoute/>} /> 
        </Routes>
    </>
  )
}
