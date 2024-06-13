import { useAppSelector } from '../hooks';
import { Offer } from '../types/offer';
import { PointLocation } from '../types/point-location';
import { sortOffers } from '../utils';
import Card from './card';

type OffersListProps = {
  offers: Offer[];
  onMouseOver: (point: PointLocation | null) => void;
};

function OffersList({offers, onMouseOver: handlePointLocationChange}: OffersListProps): JSX.Element {
  const selectedSortType = useAppSelector((state) => state.selectedSortType);
  return (
    <div className="cities__places-list places__list tabs__content">
      {sortOffers(offers, selectedSortType).map((offer) => (
        <Card key={offer.id} offer={offer} onMouseOver={handlePointLocationChange} />
      ))}
    </div>
  );
}

export default OffersList;
