import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import CardList from '../../components/card-list/card-list.tsx';
import Footer from '../../components/footer/footer.tsx';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty.tsx';
import pickOffersByCityName from '../../utils/pick-offer-by-city-name.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/index.tsx';
import { AppRoute, SixCities } from '../../const.ts';
import { changeCity } from '../../store/main-page/main-page.ts';
import { getFavoritesPage, getFavoritesPageError, getLoadingFavoritesPage } from '../../store/favorites-page/selectors.ts';
import Spinner from '../../components/spinner/spinner.tsx';
import { useCallback, useEffect } from 'react';
import { fetchFavorites } from '../../store/api-actions.ts';
import MemorizedHeader from '../../components/header/header.tsx';

export default function FavoritesPage(): JSX.Element {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  const favoriteCards = useAppSelector(getFavoritesPage);
  const isLoading = useAppSelector(getLoadingFavoritesPage);
  const hasError = useAppSelector(getFavoritesPageError);
  const favoriteCities = Array.from(new Set(favoriteCards.map((city) => city.city.name)));

  const handleClick = useCallback((city: SixCities) => {
    dispatch(changeCity(city));
  }, [dispatch]);

  return (
    <div className={`page${favoriteCards.length === 0 ? ' page--favorites-empty' : ''}`}>
      <MemorizedHeader />
      <Helmet>
        <title>6 Cities: Your Favorites</title>
      </Helmet>
      <main className={`page__main page__main--favorites ${favoriteCards.length === 0 ? 'page__main--favorites-empty' : ''}`}>
        {isLoading ?
          <div className="page__favorites-container container">
            <Spinner />
          </div>
          :
          <div className="page__favorites-container container">
            {favoriteCards.length !== 0 ?
              <section className="favorites">
                {hasError ?
                  <h1 className="favorites__title">Saved listing not found, please refresh</h1>
                  :
                  <>
                    <h1 className="favorites__title">Saved listing</h1>
                    <ul className="favorites__list">
                      {favoriteCities.map((city) => (
                        <li className="favorites__locations-items" key={city}>
                          <div className="favorites__locations locations locations--current">
                            <div className="locations__item">
                              <Link className="locations__item-link" onClick={() => handleClick(city)} to={AppRoute.Root}>
                                <span>{city}</span>
                              </Link>
                            </div>
                          </div>
                          <div className="favorites__places">
                            <CardList offers={pickOffersByCityName(city, favoriteCards)} page={'favorites'} />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>}
              </section> :
              <FavoritesEmpty />}
          </div>}
      </main>
      <Footer />
    </div>
  );
}
