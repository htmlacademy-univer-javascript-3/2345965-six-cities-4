import OffersList from '../components/offers-list';
import { Offer } from '../types/offer';
import Map from '../components/map';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useEffect, useState } from 'react';
import CitiesList from '../components/cities-list';
import OffersSorting from '../components/offers-sorting';
import { PointLocation } from '../types/point-location';
import Header from '../components/header';
import { clearOfferPageData } from '../store/action';

function MainPage(): JSX.Element {
  const offers: Offer[] = useAppSelector((state) => state.offers);
  const city = useAppSelector((state) => state.city);
  const [currentCityOffers, setCurrentCityOffers] = useState<Offer[]>(offers);
  const [selectedOfferLocation, setSelectedOfferLocation] = useState<PointLocation | null>(null);

  const dispatch = useAppDispatch();
  dispatch(clearOfferPageData());

  useEffect(() => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city.name);
    setCurrentCityOffers(filteredOffers);
  }, [city, offers]);

  const handlePointLocationChange = (point: PointLocation | null) => {
    setSelectedOfferLocation(point);
  };

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          {currentCityOffers.length ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentCityOffers.length} places to stay in {city.name}</b>
                <OffersSorting />
                <OffersList offers={currentCityOffers} onMouseOver={handlePointLocationChange} />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    points={currentCityOffers.map((offer) => offer.location)}
                    city={city}
                    selectedPoint={selectedOfferLocation}
                  />
                </section>
              </div>
            </div>
          ) : (
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in {city.name}</p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
