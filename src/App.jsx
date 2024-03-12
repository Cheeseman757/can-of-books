<<<<<<< HEAD
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
=======
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';

class BestBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    // Make a GET request to the server's /books route
    axios.get('/books')
      .then(response => {
        // Store the book data in the application state
        this.setState({ books: response.data });
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }

  renderBooks() {
    // Check if there are more than 0 books stored in the application state
    if (this.state.books.length > 0) {
      // Render Bootstrap Carousel with books
      return (
        <Carousel>
          {this.state.books.map(book => (
            <Carousel.Item key={book.id}>
              <img
                className="d-block w-100"
                src={book.imageUrl}
                alt={book.title}
              />
              <Carousel.Caption>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      );
    } else {
      // Render message when no books are available
      return <p>Book collection is empty.</p>;
    }
  }

  render() {
    return (
      <div>
        {this.renderBooks()}
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>Project developed by Kawika & Justin</p>
        <p>
          Find me on GitHub: <a href="https://github.com/your-github-username">GitHub</a>
        </p>
      </div>
    );
  }
}
>>>>>>> ea105e780164264a800d0e9c93edb29fff57ee18

>>>>>>> e4a5ddfc3fdc178f2ef575b58bded8bff0e0c556
class App extends React.Component {
  render() {
    return (
<<<<<<< HEAD
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
=======
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          <hr />

          <Route exact path="/" component={BestBooks} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
>>>>>>> ea105e780164264a800d0e9c93edb29fff57ee18
  }
}

export default App;
<<<<<<< HEAD
=======















<<<<<<< HEAD

>>>>>>> e4a5ddfc3fdc178f2ef575b58bded8bff0e0c556
=======
>>>>>>> ea105e780164264a800d0e9c93edb29fff57ee18
