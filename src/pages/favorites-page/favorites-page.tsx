import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header.tsx';
import CardList from '../../components/card-list/card-list.tsx';
import Footer from '../../components/footer/footer.tsx';
import pickOffersBYCityName from '../../services/pick-offer-by-city-name.ts';
import { TFavoritePageProps } from '../../types/index.ts';

export default function FavoritesPage({offers}: TFavoritePageProps): JSX.Element {

  const favoritePlaces = offers.filter((place) => place.isFavorite);
  const favoriteCities = favoritePlaces.map((city) => city.city.name);

  return (
    <div className="page">
      <Header />
      <Helmet>
        <title>6 Cities: Your Favorites</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoritePlaces.length !== 0 ?
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Array.from(new Set(favoriteCities)).map((city) => (
                  <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to="#">
                          <span>{city}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      <CardList offers={pickOffersBYCityName(city, offers)} page={'favorites'} />
                    </div>
                  </li>
                ))}
              </ul>
            </section> :
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>}
        </div>
      </main>
      <Footer />
    </div>
  );
}
