import { Offer } from '../types/offer';
import { Link } from 'react-router-dom';
import { formatRating } from '../utils';
import { useAppDispatch } from '../hooks';
import { setSelectedOffer } from '../store/action';

type NearOfferCardProps = {
  offer: Offer;
};

function NearOfferCard({offer}: NearOfferCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <article
      onClick={(evt) => {
        evt.preventDefault();
        dispatch(setSelectedOffer(offer));
      }}
      className="near-places__card place-card"
    >
      <Link to={`/offer/${offer.id}`}>
        {offer.isPremium && <div className="place-card__mark"> <span>Premium</span> </div>}
        <div className="cities__image-wrapper place-card__image-wrapper">

          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: formatRating(offer.rating)}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            {offer.title}
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </Link>
    </article>
  );
}

export default NearOfferCard;
