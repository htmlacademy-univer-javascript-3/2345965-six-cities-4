import { City } from './city';
import { PointLocation } from './point-location';
import { User } from './user';

export type DetailedOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: PointLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
  };
