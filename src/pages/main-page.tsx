import { Link } from 'react-router-dom';
import OffersList from '../components/offers-list';
import HeaderLogo from '../components/header-logo';
import { Offer } from '../types/offer';
import Map from '../components/map';
import { useAppSelector } from '../hooks';
import { useEffect, useState } from 'react';
import CitiesList from '../components/cities-list';
import OffersSorting from '../components/offers-sorting';
import { PointLocation } from '../types/point-location';

function MainPage(): JSX.Element {
  const offers: Offer[] = useAppSelector((state) => state.offers);
  const city = useAppSelector((state) => state.city);
  const [currentCityOffers, setCurrentCityOffers] = useState<Offer[]>(offers);
  const [selectedOfferLocation, setSelectedOfferLocation] = useState<PointLocation | null>(null);

  useEffect(() => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city.name);
    setCurrentCityOffers(filteredOffers);
  }, [city, offers]);

  const handlePointLocationChange = (point: PointLocation | null) => {
    setSelectedOfferLocation(point);
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <HeaderLogo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">{offers.length}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="#todo">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
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
        </div>
      </main>
    </div>
  );
}

export default MainPage;
