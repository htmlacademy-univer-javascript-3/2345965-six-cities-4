import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { City } from '../types/city';
import { Offer } from '../types/offer';

export const changeCity = createAction<City>('changeCity');

export const loadOffers = createAction<Offer[]>('loadOffers');

export const setSelectedOffer = createAction<Offer | null>('selectOffer');

export const setSortType = createAction<string>('setSortType');

export const setLoadingStatus = createAction<boolean>('setLoadingStatus');

export const setError = createAction<string | null>('setError');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('setAuthorizationStatus');
