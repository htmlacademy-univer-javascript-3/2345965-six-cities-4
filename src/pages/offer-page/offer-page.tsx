import { Link, useParams } from 'react-router-dom';
import HeaderLogo from '../../components/header-logo';
import Page404 from '../page404/page404';
import CommentForm from '../../components/comment-form';
import { DetailedOffer } from '../../types/detailed-offer';
import ReviewList from '../../components/review-list';
import { Review } from '../../types/review';
import Map from '../../components/map';
import { Offer } from '../../types/offer';
import OffersList from '../../components/offers-list';

type OfferProps = {
  offers: Offer[];
  detailedOffers: DetailedOffer[];
  reviews: Review[];
};

function OfferPage({offers, detailedOffers, reviews}: OfferProps): JSX.Element {
  const params = useParams();
  const currentDetailedOffer = detailedOffers.find((offer) => offer.id === params.id);
  const offersAmsterdam = offers.filter((offer) => offer.city.name === 'Amsterdam');

  const premiumBlock = (
    <div className="offer__mark">
      <span>Premium</span>
    </div>
  );

  return currentDetailedOffer ? (
    <div className="page">
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

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                <img className="offer__image" src={currentDetailedOffer.images[0]} alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src={currentDetailedOffer.images[1]} alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src={currentDetailedOffer.images[2]} alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src={currentDetailedOffer.images[3]} alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src={currentDetailedOffer.images[4]} alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src={currentDetailedOffer.images[5]} alt="Photo studio" />
              </div>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentDetailedOffer.isPremium ? premiumBlock : null}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentDetailedOffer.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${currentDetailedOffer.rating / 5 * 100}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{currentDetailedOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {currentDetailedOffer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {currentDetailedOffer.bedrooms} Bedroom{currentDetailedOffer.bedrooms === 1 || 's'}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {currentDetailedOffer.maxAdults} adult{currentDetailedOffer.maxAdults === 1 || 's'}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentDetailedOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {currentDetailedOffer.goods.map(
                    (good) => (<li key={good} className="offer__inside-item">{good}</li>)
                  )}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={currentDetailedOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {currentDetailedOffer.host.name}
                  </span>
                  {currentDetailedOffer.host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {currentDetailedOffer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewList reviews={reviews.sort((a: Review, b: Review) => (a.date < b.date) ? 1 : -1)}/>
                <CommentForm />
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map
              city={offersAmsterdam[0].city}
              points={offersAmsterdam.slice(0, 3).map((offer) => offer.location)}
              selectedPoint={currentDetailedOffer.location}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList cardsCount={3} offers={offersAmsterdam} />
            </div>
          </section>
        </div>
      </main>
    </div>
  ) : (<Page404 />);
}

export default OfferPage;
