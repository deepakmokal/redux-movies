
import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MoviDetails from './components/MovieDetails/MovieDetails';



function App() {
  return (
    <div className="App">
 
      <Router>
      
        <Header />
        <div className='container'>
          <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" element={<MoviDetails />} />
          <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      
      </Router>
    </div>
  );
}

export default App;
