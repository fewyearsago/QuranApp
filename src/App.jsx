import React from 'react';
import Home from './pages/Home';
import Read from './pages/Read';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="read" element={<Read />} />
      </Routes>
    </>
  );
}

export default App;
