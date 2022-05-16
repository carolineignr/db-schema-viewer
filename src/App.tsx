import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Sign from './views/Sign/Sign';
import Home from './views/Home/Home';

function App(): React.ReactElement {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
