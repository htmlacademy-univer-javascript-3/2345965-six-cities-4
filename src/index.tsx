import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { DetailedOffers } from './mocks/detailed-offers';
import { Reviews } from './mocks/reviews';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        detailedOffers = {DetailedOffers}
        reviews = {Reviews}
      />
    </Provider>
  </React.StrictMode>
);
