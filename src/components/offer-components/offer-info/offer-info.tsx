import starsRender from '../../../utils/stars-render.ts';
import pluralize from '../../../utils/pluralize.ts';
import { TFavoriteData, TOfferInfoProps } from '../../../types/index.ts';
import BookmarkButton from '../../bookmark-button/bookmark-button.tsx';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/index.tsx';
import { getAuthStatus } from '../../../store/user/selectors.ts';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const.ts';
import { addFavorite } from '../../../store/api-actions.ts';
import { refreshCards } from '../../../store/main-page/main-page.ts';

export default function OfferInfo({ offer }: TOfferInfoProps): JSX.Element {

  const [favoriteStatus, setFavoriteStatus] = useState<boolean>(offer.isFavorite);
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);
  const navigate = useNavigate();


  function handleToggle(): void {
    if (authStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    }
    setFavoriteStatus(!favoriteStatus);
    const data: TFavoriteData = {
      id: offer.id,
      isFavorite: !favoriteStatus,
    };

    dispatch(addFavorite(data));
    dispatch(refreshCards(data));
  }

  return (
    <>
      {
        offer.isPremium &&
        <div className="offer__mark">
          <span>Premium</span>
        </div>
      }
      <div className="offer__name-wrapper">
        <h1 className="offer__name">
          {offer.title}
        </h1>
        <BookmarkButton status={favoriteStatus} element='offer' bookmarkToggle={handleToggle} />
      </div>
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">
          <span style={{width: starsRender(offer.rating)}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="offer__rating-value rating__value">{offer.rating}</span>
      </div>
      <ul className="offer__features">
        <li className="offer__feature offer__feature--entire">
          {offer.type}
        </li>
        <li className="offer__feature offer__feature--bedrooms">
          {offer.bedrooms} bedroom{pluralize(offer.bedrooms)}
        </li>
        <li className="offer__feature offer__feature--adults">
          {offer.maxAdults} Adult{pluralize(offer.maxAdults)}
        </li>
      </ul>
      <div className="offer__price">
        <b className="offer__price-value">&euro;{offer.price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>
      <div className="offer__inside">
        <h2 className="offer__inside-title">What&apos;s inside</h2>
        <ul className="offer__inside-list">
          {offer.goods.map((item) => (
            <li className="offer__inside-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
