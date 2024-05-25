import React from 'react';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './Header';
import Footer from './Footer';
import LogementSheet from './pages/LogementSheet';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  return (
    <HashRouter>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/logement/:id" element={<LogementSheet/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/404" element={<Navigate to="/404"/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
  );
};

export default App;