import { Review } from './review';
import { Offer } from './offer';
import { DetailedOffer } from './detailed-offer';

export type OfferPageData = {
  detailedOffer: DetailedOffer | null;
  nearestOffers: Offer[];
  reviews: Review[];
}
