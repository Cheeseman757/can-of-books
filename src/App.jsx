import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
<<<<<<< HEAD
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


=======
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

>>>>>>> e4a5ddfc3fdc178f2ef575b58bded8bff0e0c556
class App extends React.Component {
  render() {
    return (
      <>
<<<<<<< HEAD
=======
        <nav>
        </nav>
>>>>>>> e4a5ddfc3fdc178f2ef575b58bded8bff0e0c556
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={<BestBooks />}
            >
            </Route>
<<<<<<< HEAD
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
=======
            <Route 
              exact path="/about"
              element={<About />}
            >
            </Route>
>>>>>>> e4a5ddfc3fdc178f2ef575b58bded8bff0e0c556
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
<<<<<<< HEAD
=======
















>>>>>>> e4a5ddfc3fdc178f2ef575b58bded8bff0e0c556
