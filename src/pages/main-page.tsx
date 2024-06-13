import Header from '../components/header';
import CityOffers from '../components/city-offers';
import { getOffers, getSelectedCity } from '../store';
import CitiesList from '../components/cities-list';
import { useAppSelector } from '../hooks';
import { useMemo } from 'react';

function MainPage(): JSX.Element {
  const selectedCity = useAppSelector(getSelectedCity);
  const offers = useAppSelector(getOffers);
  const currentCityOffers = useMemo(
    () => offers.filter((offer) => offer.city.name === selectedCity.name),
    [offers, selectedCity]
  );

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
        <CityOffers
          city={selectedCity}
          currentCityOffers={currentCityOffers}
        />
      </main>
    </div>
  );
}

export default MainPage;
