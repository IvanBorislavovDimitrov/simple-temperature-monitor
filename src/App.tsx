import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from './components/navbar';
import MeasurementsComponent from './components/measurements-component';

function App() {

  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<MeasurementsComponent />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
