import './App.css';
import { Routes, Route } from 'react-router-dom'

import Aim from './components/pages/Experiment-Content/Aim';
import PostTest from './components/pages/Experiment-Content/Post-test';
import Objective from './components/pages/Experiment-Content/Objective';
import FeedBack from './components/pages/Experiment-Content/Feed-Back';
import Theory from './components/pages/Experiment-Content/Theory';
import Procedure from './components/pages/Experiment-Content/Procedure';
import Reference from './components/pages/Experiment-Content/References';
import Simulation from './components/pages/Experiment-Content/Simulation';
import Practice from './components/pages/Experiment-Content/Practice';



import ExpNav from './components/pages/Experiment-Nav/ExpNav';
import Navbar from './components/Header/Navbar.jsx';
import Home from './components/pages/Home/Home.jsx';
import Footer from './components/footer/Footer.jsx';
import ListExp from './components/pages/listExperiments/listExp';
import Store from './components/context/store';


function App() {
  return (
    <div className="App">
      <Store>
        <Navbar />
        <Routes >
          <Route exact path='/' element={<Home />} />
          <Route path='/Experiments/*' element={<ListExp />}/ >
            <Route path='DataAnalysis/' element={<ExpNav />}>
              <Route path='Aim/' element={<Aim />} />
              <Route path='PostTest/' element={<PostTest />} />
              <Route path='Objective/' element={<Objective />} />
              <Route path='FeedBack/' element={<FeedBack />} />
              <Route path='Theory/' element={<Theory />} />
              <Route path='Procedure/' element={<Procedure />} />
              <Route path='Reference/' element={<Reference />} />
              <Route path='Simulation/' element={<Simulation />} />
              <Route path='Practice/' element={<Practice />} />
            </Route>
        </Routes>
        <Footer />
      </Store>
    </div>
  );
}


export default App;
