import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login'
import Register from './Pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Pages/Contact';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/beranda' element={<Home />} />
      <Route path='/tentang' element={<About />} />
      <Route path='/kontak' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App;
