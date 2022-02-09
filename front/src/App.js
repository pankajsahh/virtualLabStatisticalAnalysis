import './App.css';
import { Routes, Route } from 'react-router-dom'

import Aim from './components/pages/Experiment-1-Content/Aim';
import PostTest from './components/pages/Experiment-1-Content/Post-test';
import Objective from './components/pages/Experiment-1-Content/Objective';
import FeedBack from './components/pages/Experiment-1-Content/Feed-Back';
import Theory from './components/pages/Experiment-1-Content/Theory';
import Procedure from './components/pages/Experiment-1-Content/procedure/Procedure';
import Reference from './components/pages/Experiment-1-Content/References';
import Simulation_exp1 from './components/pages/Experiment-1-Content/Simulation_exp1';
import Practice_exp1 from './components/pages/Experiment-1-Content/Practice_exp1';



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
          <Route path='/Experiments/*' element={<ListExp />} />
            <Route path='DataAnalysis/' element={<ExpNav />}>
              <Route path='Aim/' element={<Aim />} />
              <Route path='PostTest/' element={<PostTest />} />
              <Route path='Objective/' element={<Objective />} />
              <Route path='FeedBack/' element={<FeedBack />} />
              <Route path='Theory/' element={<Theory />} />
              <Route path='Procedure/' element={<Procedure />} />
              <Route path='Reference/' element={<Reference />} />
              <Route path='Simulation/' element={<Simulation_exp1 />} />
              <Route path='Practice/' element={<Practice_exp1 />} />
            </Route>
        </Routes>
        <Footer />
      </Store>
    </div>
  );
}


export default App;
