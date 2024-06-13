import { createAsyncThunk } from '@reduxjs/toolkit';
import { DetailedOffer } from '../../../types/detailed-offer';
import { APIRoute, ROUTES, NameSpace } from '../../../const';
import { redirectToRoute } from '../../action';
import { AppDispatch, State } from '../../../types/state';
import { AxiosInstance } from 'axios';

export const fetchOfferAction = createAsyncThunk<
DetailedOffer | null,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.SingleOfferData}/fetchOffer`,
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<DetailedOffer>(`${APIRoute.Offers}/${id}`);
      return data;
    } catch (e) {
      dispatch(redirectToRoute(ROUTES.NotFound));
      return null;
    }
  }
);
