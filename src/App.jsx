import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home  from './Pages/Home/home';
import { Archive } from './Pages/Archive';
import { Important } from './Pages/Important';
import { Bin } from './Pages/Bin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/archive' element={<Archive />} />
      <Route path='/important' element={<Important/>} />
      <Route path='/bin' element={<Bin />} />
    </Routes>
  );
}

export default App;