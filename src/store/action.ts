import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';

export const changeCity = createAction<City>('CHANGE_CITY');

export const loadOffers = createAction<Offer[]>('LOAD_OFFERS');

export const setSelectedOffer = createAction<Offer | null>('SELECT_OFFER');

export const setSortType = createAction<string>('SET_SORT_TYPE');

export const setLoadingStatus = createAction<boolean>('SET_LOADING_STATUS');

export const setError = createAction<string | null>('SET_ERROR');
