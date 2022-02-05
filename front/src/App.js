import './App.css';
import {Routes,Route} from 'react-router-dom'

import Experiment from './components/experiment/Expermient';

import Navbar from './components/Header/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Footer from './components/footer/Footer.jsx';
// import ExperimentsList from './components/pages/ExperimentList/ExperimentsList';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes >
      {/* <Route exact path='*' element={<Home/>} />
      <Route exact path='/ex' element ={<Experiment/>}/> */}
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/experiment' element ={<Experiment/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}


export default App;
