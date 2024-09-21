import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import LogementDetails from './pages/LogementDetails'; 
import Layout from './components/Layout/Layout.jsx';
import NotFound from './components/NotFound/NotFound.jsx';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<LogementDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
