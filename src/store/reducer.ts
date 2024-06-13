import { createReducer } from '@reduxjs/toolkit';
import { Offers } from '../mocks/offers';
import { changeCity, setOffersList } from './action';
import { CITIES } from '../const';

const initialState = {
  city: CITIES[0],
  offers: Offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffersList, (state) => {
      state.offers = Offers;
    });
});

export {reducer};
