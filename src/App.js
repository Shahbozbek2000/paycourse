import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
const Register = lazy(() => import('pages/auth/container/page'))
const Home = lazy(() => import('pages/home/container/page'))

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
