import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Sign from './views/Sign/Sign';
import Home from './views/Home/Home';
import { Footer } from './components/Footer/Footer';

function App(): React.ReactElement {
  return (
    <div className="app__container">
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
