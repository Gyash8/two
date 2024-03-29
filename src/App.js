
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Upload from './components/Upload';
import Videos from './components/Videos';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/Videos' element={<Videos/>}/>
        <Route  path='/Upload' element={<Upload/>}/>
        <Route  path='/Login' element={<Login/>}/>
        <Route  path='/Signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
