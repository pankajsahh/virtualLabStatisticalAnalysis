import './App.css';
import {Routes,Route} from 'react-router-dom'

import Experiment from './components/Expermient';

import Navbar from './components/Header/Navbar';
import Home from './components/Home/Home.jsx';
import Footer from './components/footer/Footer.jsx';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes >
      <Route exact path='*' element={<Home/>} />
      <Route exact path='/ex' element ={<Experiment/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}


export default App;
