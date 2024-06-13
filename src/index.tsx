import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { Setting } from './const';
import { Offers } from './mocks/offers';
import { DetailedOffers } from './mocks/detailed-offers';
import { Reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      cardsCount = {Setting.CardsCount}
      offers = {Offers}
      detailedOffers = {DetailedOffers}
      reviews = {Reviews}
    />
  </React.StrictMode>
);
