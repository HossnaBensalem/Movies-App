import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Add from "./components/Add";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import ContextProvider from './components/context/GlobalContext';


const App = () => {
  return (
    <div>
      <Router>
        <ContextProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Watchlist/>} />
        <Route path='/watched' element={<Watched/>} />
        <Route path='/add' element={<Add/>} />
      </Routes>
      </ContextProvider>
      </Router>
     
    </div>
  );
};

export default App;
