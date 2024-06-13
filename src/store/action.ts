import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';

export const changeCity = createAction('CHANGE_CITY',
  (city: City) => ({
    payload: city
  })
);

export const setOffersList = createAction('SET_OFFERS_LIST');
