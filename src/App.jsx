import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const API_KEY = import.meta.env.VITE_API_KEY;
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function BestBooks() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/books');
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('There was an error!', error);
      }
    };

    fetchData();
  }, []); // Empty array means this effect runs once after the initial render

  return (
    <div>
      <h1>Data from API:</h1>
      <Carousel>
        {data.length > 0 ? (
          data.map((book, idx) => (
            <Carousel.Item key={idx}>
              <div>
                <p>{book.title}</p>
                <p>{book.description}</p>
                <p>{book.status}</p>
              </div>
            </Carousel.Item>
          ))
        ) : (
          <p>No results found</p>
        )}
      </Carousel>
    </div>
  );
}

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


export default BestBooks;
