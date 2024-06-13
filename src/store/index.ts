export { store } from './store';

export {
  fetchOfferAction,
  updateSingleOffer,
  getOffer,
  getIsOfferLoading,
} from './slices/single-offer';

export {
  fetchReviewsAction,
  postReviewAction,
  setReviewsErrorStatus,
  getReviewsHasError,
  getHasError,
  getReviews,
  getIsReviewsLoading,
  getIsReviewsStatusSubmitting,
} from './slices/reviews';

export {
  fetchNearbyAction as fetchNearbyAction,
  updateMultipleNearby as updateMultipleNearby,
  getNearbyOffers,
  getIsNearbyOffersLoading,
} from './slices/nearby-offers';

export {
  fetchFavoritesAction,
  changeFavoriteStatusAction,
  updateMultipleFavorites,
  getFavorites,
  getIsFavoriteStatusSubmitting,
  getFavoritesCount,
  getIsFavoritesLoading,
} from './slices/favorites';

export {
  changeSortingType,
  changeCity,
  getSelectedSortType,
  getSelectedCity,
} from './slices/global';

export {
  fetchOffersAction,
  updateMultipleOffers,
  getOffers,
  getIsOffersLoading,
} from './slices/multiple-offers';

export {
  checkAuthAction,
  loginAction,
  logoutAction,
  getIsSubmittingLogin,
  getAuthCheckedStatus,
  getUserInfo,
  getAuthorizationStatus,
} from './slices/user';
