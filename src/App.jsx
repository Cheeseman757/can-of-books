import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={<BestBooks />}
            >
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
