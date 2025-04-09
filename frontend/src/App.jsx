import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Add from "./components/Add";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";



const App = () => {
  return (
    <div>
      <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Watchlist/>} />
        <Route path='/watched' element={<Watched/>} />
        <Route path='/add' element={<Add/>} />
      </Routes>
      </Router>
     
    </div>
  );
};

export default App;
