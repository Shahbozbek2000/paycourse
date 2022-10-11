import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from 'pages/auth/container/page';
import Home from 'pages/home/container/page';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/auth' element={<Register/>} />
        <Route index path='/' element={<Home />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </Router>
  );
}

export default App;
