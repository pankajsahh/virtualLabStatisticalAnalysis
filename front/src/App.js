import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Experiment from './components/Expermient';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header/>
      <Routes >
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/ex' element ={<Experiment/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
