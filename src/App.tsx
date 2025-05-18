import { Routes, Route } from 'react-router-dom';
import TopPage from './pages/TopPage';
import BeforePage from './pages/BeforePage';
import AfterPage from './pages/AfterPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/before" element={<BeforePage />} />
      <Route path="/after" element={<AfterPage />} />
    </Routes>
  );
}

export default App;
