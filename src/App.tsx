import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Config from './Pages/Config_page/Config';


function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Config/>} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
