import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollWrapper from './components/ScrollWrapper';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ScrollWrapper><Home /></ScrollWrapper>} />
        <Route path="/about" element={<ScrollWrapper><About /></ScrollWrapper>} />
        <Route path="/experience" element={<ScrollWrapper><Experience /></ScrollWrapper>} />
        <Route path="/projects" element={<ScrollWrapper><Projects /></ScrollWrapper>} />
        <Route path="/contact" element={<ScrollWrapper><Contact /></ScrollWrapper>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
