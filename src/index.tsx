import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import ErrorMessage from './components/error-message/error-message';
import { DetailedOffers } from './mocks/detailed-offers';
import { Reviews } from './mocks/reviews';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchOffersAction } from './store/api-actions';
import {checkAuthAction} from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        detailedOffers = {DetailedOffers}
        reviews = {Reviews}
      />
    </Provider>
  </React.StrictMode>
);
