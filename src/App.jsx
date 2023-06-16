import React from 'react';
import Home from './pages/Home';
import Read from './pages/Read';
import FullSurah from './pages/FullSurah';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="read" element={<Read />} />
        <Route path="/surah/:id" element={<FullSurah />} />
      </Routes>
    </>
  );
}

export default App;
