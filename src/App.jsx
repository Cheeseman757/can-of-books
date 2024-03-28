import React from 'react';
import { useState, useEffect } from 'react';
import About from './About.jsx';
import BestBooks from './BestBooks.jsx';
import Header from './Header';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import BookFormModal from './BookFormModal';
import AuthButtons from './auth/AuthButtons.jsx';
import { useAuth0 } from "@auth0/auth0-react";



function App() {
  let {getIdTokenClaims} = useAuth0();

    const fetchToken = async () => {
      let response = await getIdTokenClaims();
      console.log(response);
    }

      useEffect (() => {
        fetchToken();
      });
  const [show, setShow] = useState(false);
  const [moviesData, setMoviesData] = useState([])
  const [bookId, setBookId] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setBookId(id);
  }

  return (
    <>
      <BookFormModal bookId={bookId} handleClose={handleClose} show={show} />

      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<BestBooks movies={moviesData} setMovies={setMoviesData} handleShow={handleShow} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
      <LoginButton />
      <Footer />
    </>
  );
}



















export default App;




