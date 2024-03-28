import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';


let CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID;
let DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
let REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;




function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      {/* Add content for the home page */}
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider>
    domain="dev-yg6tm22mcgqy3x3v.us.auth0.com"
    clientId="syZ2ix5kQ0yYU75fHFAlOSNzZhKuGFgg"
    authorizationParams={{
      redirect_uri: REDIRECT_URI



    <Home />
    <App />
    </Auth0Provider>
  </React.StrictMode>
);


// export default main;
