import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Show from './pages/Show';
import Navbar from './components/Navbar';
import stocks from './data';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home stocks={stocks} />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/stocks/:symbol" element={<Show stocks={stocks}/>} />
      </Routes>
    </div>
  );
}

export default App;
