import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App/App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Move } from '../Pages/Move';
import { Search } from '../Pages/Search';
import { App } from './App/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Move" element={<Move />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
