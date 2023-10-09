import {
  Route,
  Routes
} from 'react-router-dom';
import Layout from './Components/Layout';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import './App.scss';
import Services from './Components/Services';

function App() {



  return (
    <div className="App">
      <header className="App-header">

        <Home/>
        <Services/>
        <About/>
        <Projects/>

      </header>
    </div>
  );
}

export default App;
