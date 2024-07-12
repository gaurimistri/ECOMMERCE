import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
function App() {
    return (
        <BrowserRouter>
        {/* <Navbar /> */}

        <Routes>

          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/blog' element={<Blog />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    );
}

export default App;
