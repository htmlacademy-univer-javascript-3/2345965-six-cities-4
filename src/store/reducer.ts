import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  loadOffers,
  setSelectedOffer,
  setSortType,
  setLoadingStatus,
  setError,
  setAuthorizationStatus,
  loadOfferPageData,
  clearOfferPageData,
  addReview
} from './action';
import { CITIES, SORT_TYPES, AuthorizationStatus } from '../const';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { OfferPageData } from '../types/offer-page-data';

type InitialState = {
  city: City;
  offers: Offer[];
  selectedOffer: Offer | null;
  selectedSortType: string;
  isOffersLoading: boolean;
  error: string | null;
  authorizationStatus: AuthorizationStatus;
  offerPageData: OfferPageData;
}

const initialState: InitialState = {
  city: CITIES.Paris,
  offers: [],
  selectedOffer: null,
  selectedSortType: SORT_TYPES.Popular,
  isOffersLoading: false,
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  offerPageData: {
    detailedOffer: null,
    nearestOffers: [],
    reviews: []
  },
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
    })
    .addCase(loadOfferPageData, (state, action) => {
      state.offerPageData = action.payload;
    })
    .addCase(clearOfferPageData, (state) => {
      state.offerPageData = {
        detailedOffer: null,
        nearestOffers: [],
        reviews: []
      };
    })
    .addCase(addReview, (state, action) => {
      state.offerPageData.reviews = [...state.offerPageData.reviews, action.payload];
    });
});

export { reducer };
