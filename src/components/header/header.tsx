import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/index.tsx';
import { logout } from '../../store/api-actions.ts';
import { getAuthStatus, getUserData } from '../../store/user/selectors.ts';
import { memo, useCallback } from 'react';

export function Header(): JSX.Element {
  const status = useAppSelector(getAuthStatus);
  const userData = useAppSelector(getUserData);
  const dispatch = useAppDispatch();

  const handleClick = useCallback((): void => {
    dispatch(logout());
  }, [dispatch]);

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
            {status === AuthorizationStatus.Auth ?
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper" style={{'backgroundImage': `url(${userData?.avatarUrl})`}}>
                    </div>
                    <span className="header__user-name user__name">{userData?.name}</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link onClick={handleClick} className="header__nav-link" to={AppRoute.Root}>
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
