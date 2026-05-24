import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import DhikrPage from './pages/DhikrPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage onCategorySelect={(id) => console.log('Selected:', id)} />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/dhikr/:id" element={<DhikrPage />} />
      </Routes>
    </Router>
  );
}

export default App;
