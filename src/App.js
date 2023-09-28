import './App.css';
import Character from './components/character/Character';
import Location from './components/location/Location';
import Episode from './components/episode/Episode';
import { Navbar } from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

        function App() {
      return (
  <div className="App">
    <Router>
        <Navbar />
        <Routes>
        <Route exact path='/' element={<Character />} />
        <Route path='/location' element={<Location />} />
        <Route path='/episode' element={<Episode />} />
        </Routes>
    </Router>
  </div>
       
      );
    }
    
    export default App;