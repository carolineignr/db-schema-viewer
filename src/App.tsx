import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Sign from './pages/Sign/Sign';
import Home from './pages/Home/Home';
import Tables from './pages/Tables/Tables';

function App(): React.ReactElement {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/home" element={<Home />} />
        <Route path="/table/:id" element={<Tables />} />
      </Routes>
    </div>
  );
}

export default App;
