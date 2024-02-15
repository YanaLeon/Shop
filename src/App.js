import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './redux/store'

import PagesRouter from './routes/PagesRouter';
import Header from './components/Header';
import Footer from './components/Footer';


export function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
       <div className='wrapper'>
            <Header />
            <PagesRouter />
            <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}
