import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Bored from './pages/Bored';

function App() {
    return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/bored' element={<Bored/>} />
    </Routes>
    </>
  )
}

export default App;
