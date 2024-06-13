import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, setSelectedOffer, setSortType, setLoadingStatus, setError } from './action';
import { CITIES, SORT_TYPES } from '../const';
import { City } from '../types/city';
import { Offer } from '../types/offer';

type InitialState = {
  city: City;
  offers: Offer[];
  selectedOffer: Offer | null;
  selectedSortType: string;
  isOffersLoading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  city: CITIES.Paris,
  offers: [],
  selectedOffer: null,
  selectedSortType: SORT_TYPES.Popular,
  isOffersLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSelectedOffer, (state, action) => {
      state.selectedOffer = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.selectedSortType = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
