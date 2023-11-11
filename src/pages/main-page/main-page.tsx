import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header.tsx';
import LocationsHeader from '../../components/locations-header/locations-header.tsx';
import CardList from '../../components/card-list/card-list.tsx';
import Map from '../../components/map/map.tsx';
import MainPageEmpty from '../../components/main-page-empty/main-page-empty.tsx';
import pickOffersByCityName from '../../utils/pick-offer-by-city-name.ts';
import pluralize from '../../utils/pluralize.ts';
import markerPoints from '../../utils/marker-points.ts';
import { SixCities } from '../../const.ts';
import { City } from '../../mocks/cities.ts';
import { TMainPageProps, TPoint } from '../../types/index.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/index.tsx';
import { changeCity } from '../../store/actions.ts';

export default function MainPage({offers}: TMainPageProps): JSX.Element {

  const [activeOffer, setActiveOffer] = useState<TPoint | null>(null);
  const activeCity = useAppSelector((state) => state.city);

  const dispatch = useAppDispatch();

  function handleCardHover(point: TPoint | null) {
    setActiveOffer(point);
  }

  function handleClick(city: SixCities) {
    dispatch(changeCity(city));
  }

  const activeCityOffers = pickOffersByCityName(activeCity, offers);

  const points: TPoint[] = markerPoints(offers);

  return (
    <div className="page page--gray page--main">
      <Header />
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsHeader pickCity={handleClick} activeCity={activeCity} />
        </div>
        <div className="cities">
          {activeCityOffers.length === 0 ?
            <MainPageEmpty activeCity={activeCity} />
            :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{activeCityOffers.length} place{pluralize(activeCityOffers.length)} to stay in {activeCity}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <div className="cities__places-list places__list tabs__content">
                  <CardList offers={activeCityOffers} page={'cities'} onCardHover={handleCardHover} />
                </div>
              </section>
              <div className="cities__right-section">
                <Map city={City} points={points} activePoint={activeOffer} page={'cities'} />
              </div>
            </div>}
        </div>
      </main>
    </div>
  );
}
