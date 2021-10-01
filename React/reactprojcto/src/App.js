import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';

import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
        <GlobalStyles />
        <ToastContainer autoClose={1700} className="toas-container" />
      </BrowserRouter>
    </>
  );
}

export default App;
