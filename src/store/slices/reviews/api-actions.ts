import { createAsyncThunk } from '@reduxjs/toolkit';
import { Review } from '../../../types/review';
import { ReviewData } from '../../../types/review-data';
import { APIRoute, NameSpace } from '../../../const';
import { AppDispatch, State } from '../../../types/state';
import { AxiosInstance } from 'axios';

export const fetchReviewsAction = createAsyncThunk<
  Review[],
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(`${NameSpace.ReviewsData}/fetchReviews`, async (id, { extra: api }) => {
  const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
  return data;
});

export const postReviewAction = createAsyncThunk<
  Review,
  ReviewData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.ReviewsData}/postReview`,
  async ({ comment, rating, offerId }, { extra: api }) => {
    const { data } = await api.post<Review>(`${APIRoute.Comments}/${offerId}`, {
      comment,
      rating,
    });
    return data;
  }
);
