import { Offer } from '../types/offer';
import Card from './card';
import { useState } from 'react';

type OffersListProps = {
  cardsCount: number;
  offers: Offer[];
};

function OffersList({cardsCount, offers}: OffersListProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState(offers[0]);

  const handleMouseOver = (id: string) => {
    const activeOffer = offers.find((offer) => offer.id === id);
    if (activeOffer !== undefined && activeOffer !== selectedOffer) {
      setSelectedOffer(activeOffer);
    }
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.slice(0, cardsCount).map((offer) => (
        <Card key={offer.id} onMouseOver={handleMouseOver} offerData={offer} />
      ))}
    </div>
  );
}

export default OffersList;
