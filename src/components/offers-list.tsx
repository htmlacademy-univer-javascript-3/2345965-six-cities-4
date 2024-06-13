import { memo } from 'react';
import { useAppSelector } from '../hooks';
import { Offer } from '../types/offer';
import { sortOffers } from '../utils';
import Card from './card';
import { getSelectedSortType } from '../store';

type OffersListProps = {
  offers: Offer[];
  onMouseOver: (point: Offer | null) => void;
};

function OffersList({offers, onMouseOver}: OffersListProps): JSX.Element {
  const selectedSortType = useAppSelector(getSelectedSortType);
  return (
    <div className="cities__places-list places__list tabs__content">
      {sortOffers(offers, selectedSortType).map((offer) => (
        <Card key={offer.id} offer={offer} onMouseOver={onMouseOver} />
      ))}
    </div>
  );
}

const memoizedOffersList = memo(OffersList);

export default memoizedOffersList;
