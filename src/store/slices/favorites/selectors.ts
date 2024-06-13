import { NameSpace } from '../../../const';
import { Offer } from '../../../types/offer';
import { State } from '../../../types/state';

export const getFavorites = (state: State): Offer[] =>
  state[NameSpace.FavoritesData].favorites;

export const getFavoritesCount = (state: State): number =>
  state[NameSpace.FavoritesData].favorites.length;

export const getIsFavoritesLoading = (state: State): boolean =>
  state[NameSpace.FavoritesData].isFavoritesLoading;

export const getIsFavoriteStatusSubmitting = (state: State): boolean =>
  state[NameSpace.FavoritesData].isFavoriteStatusSubmitting;
