import React from 'react';
import SharedLayout from './components/SharedLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Journey from './components/Journey';
import Home from './components/Home'
import Packages from './components/Packages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route path="/" element = {<Home/>}/>
          <Route path='/journey' element={<Journey/>} />
          <Route path='/packages' element={<Packages/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
