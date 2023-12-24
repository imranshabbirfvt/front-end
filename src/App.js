import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Errorpage from './components/Errorpage';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Userlist from './components/Userlist';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App">
      <Toaster />
     <Router>
      <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/list' element={<Userlist />} />
            <Route path='*' element={<Errorpage />} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
