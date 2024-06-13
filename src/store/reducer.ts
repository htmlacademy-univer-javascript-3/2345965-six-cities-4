import { createReducer } from '@reduxjs/toolkit';
import { Offers } from '../mocks/offers';
import { changeCity, setOffersList, setSelectedOffer, setSortType } from './action';
import { CITIES, SORT_TYPES } from '../const';
import { City } from '../types/city';
import { Offer } from '../types/offer';

type InitialState = {
  city: City;
  offers: Offer[];
  selectedOffer: Offer | null;
  selectedSortType: string;
}

const initialState: InitialState = {
  city: CITIES[0],
  offers: Offers,
  selectedOffer: null,
  selectedSortType: SORT_TYPES.Popular,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffersList, (state) => {
      state.offers = Offers;
    })
    .addCase(setSelectedOffer, (state, action) => {
      state.selectedOffer = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.selectedSortType = action.payload;
    });
});

export {reducer};
