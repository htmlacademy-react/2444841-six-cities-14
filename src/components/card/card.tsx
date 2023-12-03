import starsRender from '../../utils/stars-render.ts';
import { Link, useNavigate } from 'react-router-dom';
import { TCardInfo, TFavoriteData } from '../../types/index.ts';
import { memo, useCallback, useState } from 'react';
import { addFavorite } from '../../store/api-actions.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/index.tsx';
import { refreshCards } from '../../store/main-page/main-page.ts';
import { getAuthStatus } from '../../store/user/selectors.ts';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import MemoBookmarkButton from '../bookmark-button/bookmark-button.tsx';

export function Card({offer, page, onCardHover}: TCardInfo): JSX.Element {

  const [favoriteStatus, setFavoriteStatus] = useState<boolean>(offer.isFavorite);
  const dispatch = useAppDispatch();
  const stars = starsRender(offer.rating);
  const authStatus = useAppSelector(getAuthStatus);
  const navigate = useNavigate();


  const handleToggle = useCallback((): void => {
    if (authStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    }
    setFavoriteStatus(!favoriteStatus);
    const data: TFavoriteData = {
      id: offer.id,// + 's',
      isFavorite: !favoriteStatus,
    };

    dispatch(addFavorite(data));
    dispatch(refreshCards(data));
  }, [dispatch, navigate, authStatus, favoriteStatus, offer]);

  return (
    <article
      className={`${page}__card place-card`}
      onMouseLeave={() => onCardHover?.(null)}
      onMouseEnter={() => onCardHover?.({
        id: offer.id,
        location: offer.location
      })}
    >
      { offer.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> :
        ''}
      <div className={`${page}__image-wrapper place-card__image-wrapper`}>
        <Link to="#">
          <img className="place-card__image" src={offer.previewImage} width={`${page === 'favorites' ? '150' : '260'}`} height={`${page === 'favorites' ? '110' : '200'}`} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className={`${page === 'favorites' ? 'favorites__card-info' : ''} place-card__price`}>
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <MemoBookmarkButton bookmarkToggle={handleToggle} status={favoriteStatus} element='place-card' />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: stars}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

function arePropsEqual(oldProps: TCardInfo, newProps: TCardInfo) {
  return oldProps.offer === newProps.offer;
}

const MemorizedCard = memo(Card, arePropsEqual);
export default MemorizedCard;
