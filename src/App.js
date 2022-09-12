import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
function App() {
  
  return (
   <>
     <Routes>
      <Route path='/mytodos' element={<LandingPage/>}/>
     </Routes>
   </>
  );
}

export default App;
