import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Config from './Pages/Config_page/Config';
import Sortition from './Pages/Sortition/Sortition';


function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Config/>} />
          <Route path='/sort' element={<Sortition/>} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
