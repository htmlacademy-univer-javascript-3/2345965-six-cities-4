import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  loadOffers,
  setSelectedOffer,
  setSortType,
  setLoadingStatus,
  setError,
  setAuthorizationStatus
} from './action';
import { CITIES, SORT_TYPES, AuthorizationStatus } from '../const';
import { City } from '../types/city';
import { Offer } from '../types/offer';

type InitialState = {
  city: City;
  offers: Offer[];
  selectedOffer: Offer | null;
  selectedSortType: string;
  isOffersLoading: boolean;
  error: string | null;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitialState = {
  city: CITIES.Paris,
  offers: [],
  selectedOffer: null,
  selectedSortType: SORT_TYPES.Popular,
  isOffersLoading: false,
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
