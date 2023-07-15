import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Form from './components/Form/Form';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={Form} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
