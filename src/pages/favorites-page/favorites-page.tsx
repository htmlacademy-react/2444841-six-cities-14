import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header.tsx';
import CardList from '../../components/card-list/card-list.tsx';
import Footer from '../../components/footer/footer.tsx';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty.tsx';
import pickOffersByCityName from '../../utils/pick-offer-by-city-name.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/index.tsx';
import { AppRoute, SixCities } from '../../const.ts';
import { changeCity } from '../../store/main-page/main-page.ts';
import { getFavoritesPage, getFavoritesPageError, getLoadingFavoritesPage } from '../../store/favorites-page/selectors.ts';
import Spinner from '../../components/spinner/spinner.tsx';

export default function FavoritesPage(): JSX.Element {

  const favoriteCards = useAppSelector(getFavoritesPage);
  const isLoading = useAppSelector(getLoadingFavoritesPage);
  const hasError = useAppSelector(getFavoritesPageError);
  const favoritePlaces = favoriteCards.filter((place) => place.isFavorite);
  const favoriteCities = favoritePlaces.map((city) => city.city.name);
  const dispatch = useAppDispatch();

  function handleClick(city: SixCities): void {
    dispatch(changeCity(city));
  }

  return (
    <div className="page">
      <Header />
      <Helmet>
        <title>6 Cities: Your Favorites</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        {isLoading ?
          <Spinner />
          :
          <div className="page__favorites-container container">
            {favoritePlaces.length !== 0 ?
              <section className="favorites">
                {hasError ?
                  <h1 className="favorites__title">Saved listing not found, please refresh</h1>
                  :
                  <>
                    <h1 className="favorites__title">Saved listing</h1>
                    <ul className="favorites__list">
                      {Array.from(new Set(favoriteCities)).map((city) => (
                        <li className="favorites__locations-items" key={city}>
                          <div className="favorites__locations locations locations--current">
                            <div className="locations__item">
                              <Link className="locations__item-link" onClick={() => handleClick(city)} to={AppRoute.Root}>
                                <span>{city}</span>
                              </Link>
                            </div>
                          </div>
                          <div className="favorites__places">
                            <CardList offers={pickOffersByCityName(city, favoritePlaces)} page={'favorites'} />
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
