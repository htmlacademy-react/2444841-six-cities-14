import { Link } from 'react-router-dom';
import { TCardInfo } from '../../types/index.ts';

export default function Card({offer, page}: TCardInfo): JSX.Element {

  return (
    <article className={`${page}__card place-card`}>
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className={`${page}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width={`${page === 'favorites' ? '150' : '260'}`} height={`${page === 'favorites' ? '110' : '200'}`} alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className={`${page === 'favorites' ? 'favorites__card-info ' : ''}place-card__price`}>
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
            <span style={{width: '100%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.id}{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.desc}</p>
      </div>
    </article>
  );
}
