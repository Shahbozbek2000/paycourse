import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Routers } from 'routers/router';

function App() {
  return (
    <Router>
      <Routers/>
      <Toaster position="top-center" reverseOrder={false} />
    </Router>
  );
}

export default App;
