import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Experiment from './components/Expermient';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes >
      <Route exact path='*' element={<Home/>} />
      <Route exact path='/ex' element ={<Experiment/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
