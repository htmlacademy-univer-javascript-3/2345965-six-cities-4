import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';

export const changeCity = createAction('CHANGE_CITY',
  (city: City) => ({
    payload: city
  })
);

export const setOffersList = createAction('SET_OFFERS_LIST');

export const setSelectedOffer = createAction('SELECT_OFFER',
  (offer: Offer | null) => ({
    payload: offer
  })
);

export const setSortType = createAction('SET_SORT_TYPE',
  (sortType: string) => ({
    payload: sortType
  })
);
