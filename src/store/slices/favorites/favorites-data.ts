import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Offer } from '../../../types/offer';
import { NameSpace } from '../../../const';
import {
  changeFavoriteStatusAction,
  fetchFavoritesAction,
} from './api-actions';

import { updateFavorites } from './utils';

type FavoritesData = {
  favorites: Offer[];
  isFavoritesLoading: boolean;
  isFavoriteStatusSubmitting: boolean;
  hasError: boolean;
};

const initialState: FavoritesData = {
  favorites: [],
  isFavoritesLoading: false,
  isFavoriteStatusSubmitting: false,
  hasError: false,
};

export const favoritesData = createSlice({
  name: NameSpace.FavoritesData,
  initialState,
  reducers: {
    updateMultipleFavorites: (state, action: PayloadAction<Offer>) => {
      updateFavorites(state.favorites, action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.hasError = false;
        state.isFavoritesLoading = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoritesLoading = false;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.hasError = true;
        state.isFavoritesLoading = false;
      })
      .addCase(changeFavoriteStatusAction.pending, (state) => {
        state.isFavoriteStatusSubmitting = true;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state) => {
        state.isFavoriteStatusSubmitting = false;
      })
      .addCase(changeFavoriteStatusAction.rejected, (state) => {
        state.isFavoriteStatusSubmitting = false;
      });
  },
});

export const { updateMultipleFavorites } = favoritesData.actions;
