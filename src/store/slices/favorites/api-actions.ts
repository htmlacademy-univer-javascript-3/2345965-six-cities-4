import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../../../types/offer';
import { FavoriteData } from '../../../types/favorite-data';
import { APIRoute, NameSpace } from '../../../const';
import { updateMultipleOffers } from '../multiple-offers/multiple-offers-data';
import { updateSingleOffer } from '../single-offer/single-offer-data';
import { updateMultipleFavorites } from './favorites-data';
import { updateMultipleNearby } from '../nearby-offers';
import { AppDispatch, State } from '../../../types/state';
import { AxiosInstance } from 'axios';

export const fetchFavoritesAction = createAsyncThunk<
  Offer[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.FavoritesData}/fetchFavorites`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Favorite);
    return data;
  }
);

export const changeFavoriteStatusAction = createAsyncThunk<
  Offer,
  FavoriteData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.FavoritesData}/changeFavoriteStatus`,
  async ({ status, offerId }, { rejectWithValue, extra: api, dispatch }) => {
    try {
      const { data } = await api.post<Offer>(
        `${APIRoute.Favorite}/${offerId}/${status ? 0 : 1}`
      );

      dispatch(updateMultipleOffers(data));
      dispatch(updateSingleOffer(data));
      dispatch(updateMultipleFavorites(data));
      dispatch(updateMultipleNearby(data));

      return data;
    } catch (e) {
      return rejectWithValue(e as Error);
    }
  }
);
