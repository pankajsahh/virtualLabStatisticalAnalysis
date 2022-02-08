import './App.css';
import {Routes,Route} from 'react-router-dom'

import Experiment from './components/experiment/Expermient';

import Navbar from './components/Header/Navbar.jsx';
import Home from './components/home/Home.jsx';
import Footer from './components/footer/Footer.jsx';
import ListExp from './container/listExperiments/listExp';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes >
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/exp' element ={<Experiment/>}/>
          <Route exact path='/experiments' element ={<ListExp/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}


export default App;
