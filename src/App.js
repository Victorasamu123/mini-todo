import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Todo from './components/Todo';
function App() {
  
  return (
   <>
     <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/todos' element={<Todo/>}/>
     </Routes>
   </>
  );
}

export default App;
