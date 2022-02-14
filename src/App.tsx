import React, { ReactElement } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Sign from './pages/Sign/Sign';
import Home from './pages/Home/Home';
import Tables from './pages/Tables/Tables';

function App(): ReactElement {
  const navigate = useNavigate();

  return (
    <div>
      <button type="button" onClick={() => navigate(-1)}>
        go back
      </button>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/home" element={<Home />} />
        <Route path="/table/:id" element={<Tables />} />
      </Routes>
      <a
        href="https://www.flaticon.com/free-icons/virtual-reality"
        title="virtual reality icons"
      >
        Virtual reality icons created by Freepik - Flaticon
      </a>
    </div>
  );
}

export default App;
