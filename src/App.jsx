import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss'; // Remplace App.css par App.scss pour utiliser Sass
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Layout from './components/Layout.js';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;