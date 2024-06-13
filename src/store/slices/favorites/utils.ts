import { Offer } from '../../../types/offer';

export const updateFavorites = (favorites: Offer[], updatedOffer: Offer) => {
  const favoriteOfferIndex = favorites.findIndex(
    (element) => element.id === updatedOffer.id
  );

  if (updatedOffer.isFavorite && favoriteOfferIndex === -1) {
    favorites.push(updatedOffer);
  } else if (!updatedOffer.isFavorite && favoriteOfferIndex !== -1) {
    favorites.splice(favoriteOfferIndex, 1);
  }
};
