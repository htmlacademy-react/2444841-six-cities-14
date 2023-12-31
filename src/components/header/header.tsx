import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/index.tsx';
import { fetchCards, fetchFavorites, logout } from '../../store/api-actions.ts';
import { getAuthStatus, getUserData } from '../../store/user/selectors.ts';
import { memo, useCallback, useEffect } from 'react';
import { getFavoritesPage } from '../../store/favorites-page/selectors.ts';

export function Header(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  const favorites = useAppSelector(getFavoritesPage);
  const userData = useAppSelector(getUserData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavorites());
    }
  }, [dispatch, authStatus]);

  const handleClick = useCallback((): void => {
    dispatch(logout())
      .then(() => dispatch(fetchCards()))
      .then(() => navigate(AppRoute.Login));
  }, [dispatch, navigate]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Root}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            {authStatus === AuthorizationStatus.Auth ?
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper" style={{'backgroundImage': `url(${userData?.avatarUrl})`}}>
                    </div>
                    <span className="header__user-name user__name">{userData?.email}</span>
                    <span className="header__favorite-count">{favorites.length}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link onClick={handleClick} className="header__nav-link" to="#">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
              :
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>}
          </nav>
        </div>
      </div>
    </header>
  );
}
const MemorizedHeader = memo(Header);
export default MemorizedHeader;
