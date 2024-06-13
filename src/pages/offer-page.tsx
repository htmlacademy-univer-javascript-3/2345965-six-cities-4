import { useParams } from 'react-router-dom';
import Page404 from './page404';
import CommentForm from '../components/comment-form';
import ReviewList from '../components/review-list';
import Map from '../components/map';
import { useAppDispatch, useAppSelector } from '../hooks';
import NearOffersList from '../components/near-offers-list';
import Header from '../components/header';
import { fetchOfferPageDataAction } from '../store/api-actions';
import { useEffect } from 'react';
import LoadingScreen from './loading-screen';
import { AuthorizationStatus } from '../const';

function OfferPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOfferPageDataAction({ id: id ?? '' }));
  }, [id, dispatch]);

  const isOfferExist = useAppSelector((state) => state.offers).find((offer) => offer.id === id);
  const { detailedOffer, nearestOffers, reviews } = useAppSelector(
    ({ offerPageData }) => ({
      detailedOffer: offerPageData.detailedOffer,
      nearestOffers: offerPageData.nearestOffers,
      reviews: offerPageData.reviews,
    })
  );
  const city = useAppSelector((state) => state.city);

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuthed = (authorizationStatus === AuthorizationStatus.Auth);

  if (!isOfferExist) {
    return <Page404 />;
  }

  return detailedOffer ? (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {detailedOffer.images.map((image) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image" src={image} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {detailedOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {detailedOffer.title}
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
                  <span style={{width: `${detailedOffer.rating / 5 * 100}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{detailedOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {detailedOffer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {detailedOffer.bedrooms} Bedroom{detailedOffer.bedrooms === 1 || 's'}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {detailedOffer.maxAdults} adult{detailedOffer.maxAdults === 1 || 's'}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{detailedOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {detailedOffer.goods.map(
                    (good) => (<li key={good} className="offer__inside-item">{good}</li>)
                  )}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={detailedOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {detailedOffer.host.name}
                  </span>
                  {detailedOffer.host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {detailedOffer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewList
                  reviews={reviews.slice().sort((a, b) => {
                    const dateA = new Date(a.date).getTime();
                    const dateB = new Date(b.date).getTime();
                    return dateB - dateA;
                  }).slice(0, 10)}
                />
                { isAuthed && <CommentForm id={id!} />}
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map
              city={city}
              points={nearestOffers.slice(0, 3).map((offer) => offer.location)}
              selectedPoint={detailedOffer.location}
            />
          </section>
        </section>
        <div className="container">
          <NearOffersList offers={nearestOffers.slice(0, 3)} />
        </div>
      </main>
    </div>
  ) : <LoadingScreen />;
}

export default OfferPage;
