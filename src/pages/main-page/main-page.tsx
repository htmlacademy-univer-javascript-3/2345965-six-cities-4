import { Link } from 'react-router-dom';
import OffersList from '../../components/offers-list/offers-list';
import HeaderLogo from '../../components/header-logo/header-logo';
import { Offer } from '../../types/offers';

type MainProps = {
  cardsCount: number;
  offers: Offer[];
};

function MainPage({cardsCount, offers}: MainProps): JSX.Element {
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
                  <Link className="header__nav-link header__nav-link--profile" to="#todo">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
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
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="#todo">
                  <span>Paris</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="#todo">
                  <span>Cologne</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="#todo">
                  <span>Brussels</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item tabs__item--active" to="#todo">
                  <span>Amsterdam</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="#todo">
                  <span>Hamburg</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="#todo">
                  <span>Dusseldorf</span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <OffersList cardsCount={cardsCount} offers={offers}/>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
