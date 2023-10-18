import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Router from './router';

function App() {
  return (
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  );
}

export default App;
