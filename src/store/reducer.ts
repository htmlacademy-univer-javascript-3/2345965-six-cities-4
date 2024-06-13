import { NameSpace } from '../const';
import { combineReducers } from '@reduxjs/toolkit';
import { userData } from './slices/user';
import { multipleOffersData } from './slices/multiple-offers';
import { singleOfferData } from './slices/single-offer';
import { nearbyOffersData } from './slices/nearby-offers';
import { reviewsData } from './slices/reviews';
import { favoritesData } from './slices/favorites';
import { globalState } from './slices/global';

export const reducer = combineReducers({
  [NameSpace.App]: globalState.reducer,
  [NameSpace.User]: userData.reducer,
  [NameSpace.MultipleOffersData]: multipleOffersData.reducer,
  [NameSpace.SingleOfferData]: singleOfferData.reducer,
  [NameSpace.FavoritesData]: favoritesData.reducer,
  [NameSpace.NearbyOffersData]: nearbyOffersData.reducer,
  [NameSpace.ReviewsData]: reviewsData.reducer,
});
