import React, { useState } from 'react';
// import "./styles/index.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Gallery from './components/Gallery';
import Buttons from './components/Buttons';
import Home from './components/Home/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import ContactUs from './components/ContactUs';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [isRegistering, setIsRegistering] = useState(true);

  const switchToLogin = () => {
    setIsRegistering(false);
  };

  const switchToRegister = () => {
    setIsRegistering(true);
  };
  return (
    <>
      <Router>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="*" element={<Navigate to="/register"/>} />
            <Route path="/contactus" element={<ContactUs/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;