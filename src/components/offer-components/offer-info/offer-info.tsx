import starsRender from '../../../services/stars-render.ts';
import { TOfferInfoProps } from '../../../types/index.ts';

export default function OfferInfo({ isPremium, title, isFavorite, rating, type, bedrooms, maxAdults, price, good }: TOfferInfoProps): JSX.Element {
  return (
    <>
      {
        isPremium &&
        <div className="offer__mark">
          <span>Premium</span>
        </div>
      }
      <div className="offer__name-wrapper">
        <h1 className="offer__name">
          {title}
        </h1>
        {
          isFavorite ?
            <button className="offer__bookmark-button offer__bookmark-button--active button" type="button">
              <svg className="offer__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button> :
            <button className="offer__bookmark-button button" type="button">
              <svg className="offer__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
        }
      </div>
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">
          <span style={{width: starsRender(rating)}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="offer__rating-value rating__value">{rating}</span>
      </div>
      <ul className="offer__features">
        <li className="offer__feature offer__feature--entire">
          {type}
        </li>
        <li className="offer__feature offer__feature--bedrooms">
          {bedrooms}
        </li>
        <li className="offer__feature offer__feature--adults">
          {maxAdults}
        </li>
      </ul>
      <div className="offer__price">
        <b className="offer__price-value">&euro;{price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>
      <div className="offer__inside">
        <h2 className="offer__inside-title">What&apos;s inside</h2>
        <ul className="offer__inside-list">
          {good.map((item) => (
            <li className="offer__inside-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
