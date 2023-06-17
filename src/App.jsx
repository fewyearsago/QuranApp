import Home from './pages/Home';
import Read from './pages/Read';
import FullSurah from './pages/FullSurah';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="read" element={<Read />} />
        <Route path="/surah/:id" element={<FullSurah />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
