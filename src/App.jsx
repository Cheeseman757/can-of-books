import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { Carousel, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


const SERVER_URL = import.meta.env.VITE_SERVER_URL; 
// const REACT_APP_BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

class BestBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    console.log('Best Books Loaded!!!')
    // Make a GET request to the server's /books route
    axios.get(SERVER_URL + '/books')
      .then(response => {
        console.log('BOOK DATA!!', response.data);
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
                src={`https://placehold.it/300x300`}
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

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">My Favorite Books</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <hr />
          <Routes>
            <Route exact path="/" element={<BestBooks />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
