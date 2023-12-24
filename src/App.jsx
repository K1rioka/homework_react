import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

const NotFound404 = () => {
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" component={<Home/>} />
        <Route path="/about" component={<AboutUs/>} />
        <Route path="/contact" component={<Contact/>} />
        <Route component={NotFound404} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
