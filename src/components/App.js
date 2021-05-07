import React from 'react';
import Header from './Header';
import MainExchange from './MainExchange';
import MainProductDetail from './MainProductDetail';
import BitcoinImgContainer from './bitcoinImgContainer';
import MainPlansContainer from './MainPlansContainer';
import Footer from './Footer';

import '../styles/App.css';

const App = () => (
  <>
   <Header />
   <main>
    <MainExchange />
    <MainProductDetail />
    <BitcoinImgContainer />
    <MainPlansContainer />
    <Footer />
   </main>
  </>
)

export default App;