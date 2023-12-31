import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AppRoute, SixCities } from '../../const.ts';

export default function NotFoundPage(): JSX.Element {

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>404 Cities: Page not found</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Root}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Root}>
                <span>Page not found:404</span>
                <span>Back to main page</span>
              </Link>
            </div>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Root}>
                <span>{SixCities.Amsterdam}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
