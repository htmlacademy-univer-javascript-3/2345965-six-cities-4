import { Offer } from '../../../types/offer';

export const updateFavorites = (nearby: Offer[], updatedOffer: Offer) => {
  const offerNearbyIndex = nearby.findIndex((element) => element.id === updatedOffer.id);
  if (offerNearbyIndex !== -1) {
    nearby[offerNearbyIndex].isFavorite = !nearby[offerNearbyIndex].isFavorite;
  }
};
