import React from 'react';
import './App.css';
import Home from './pages/Home';
import Products from './components/Products';
import { Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <Home />
      <Products />
    </>
  );
};

export default App;
