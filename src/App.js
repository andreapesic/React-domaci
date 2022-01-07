import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import React from 'react';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Appointments from './components/pages/Appointments';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/" element={<Appointments />}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
