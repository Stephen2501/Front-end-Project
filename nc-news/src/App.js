
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Users from './Components/Users';
import Articles from './Components/Articles'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Users" element={<Users/>} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
