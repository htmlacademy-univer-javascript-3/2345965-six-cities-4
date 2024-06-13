import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../../../types/offer';
import { APIRoute, NameSpace } from '../../../const';
import { AppDispatch, State } from '../../../types/state';
import { AxiosInstance } from 'axios';


export const fetchNearbyAction = createAsyncThunk<
  Offer[],
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.NearbyOffersData}/fetchNearby`,
  async (id, { extra: api }) => {
    const { data } = await api.get<Offer[]>(
      `${APIRoute.Offers}/${id}${APIRoute.Nearby}`
    );
    return data;
  });
