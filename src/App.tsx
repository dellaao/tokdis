import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from './container/home/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
