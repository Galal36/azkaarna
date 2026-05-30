import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AzkarProvider } from './data/AzkarContext';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import DhikrPage from './pages/DhikrPage';

function App() {
  return (
    <AzkarProvider>
      <Router>
        <Routes>
          <Route path="/"               element={<HomePage />} />
          <Route path="/category/:id"   element={<CategoryPage />} />
          <Route path="/dhikr/:id"      element={<DhikrPage />} />
        </Routes>
      </Router>
    </AzkarProvider>
  );
}

export default App;