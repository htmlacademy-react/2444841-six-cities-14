import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header.tsx';
import LocationsHeader from '../../components/locations-header/locations-header.tsx';
import CardList from '../../components/card-list/card-list.tsx';
import Map from '../../components/map/map.tsx';
import MainPageEmpty from '../../components/main-page-empty/main-page-empty.tsx';
import SortBy from '../../components/sort-by/sort-by.tsx';
import Spinner from '../../components/spinner/spinner.tsx';
import pickOffersByCityName from '../../utils/pick-offer-by-city-name.ts';
import pluralize from '../../utils/pluralize.ts';
import markerPoints from '../../utils/marker-points.ts';
import sortedOffers from '../../utils/sorted-offers.ts';
import { SixCities } from '../../const.ts';
import { City } from '../../mocks/cities.ts';
import { TPoint } from '../../types/index.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/index.tsx';
import { changeCity } from '../../store/actions.ts';

export default function MainPage(): JSX.Element {

  const [activeOffer, setActiveOffer] = useState<TPoint | null>(null);
  const activeCity = useAppSelector((state) => state.city);
  const isLoading = useAppSelector((state) => state.loadingMainPage);
  const offersCard = useAppSelector((state) => state.cards);
  const sorting = useAppSelector((state) => state.sorting);
  const dispatch = useAppDispatch();
  const activeCityOffers = pickOffersByCityName(activeCity, offersCard);
  const points: TPoint[] = markerPoints(activeCityOffers);

  function handleCardHover(point: TPoint | null) {
    setActiveOffer(point);
  }

  function handleClick(city: SixCities) {
    dispatch(changeCity(city));
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsHeader pickCity={handleClick} />
        </div>
        {isLoading ?
          <Spinner />
          :
          <div className="cities">
            {activeCityOffers.length === 0 ?
              <MainPageEmpty />
              :
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{activeCityOffers.length} place{pluralize(activeCityOffers.length)} to stay in {activeCity}</b>
                  <SortBy />
                  <div className="cities__places-list places__list tabs__content">
                    <CardList offers={sortedOffers(activeCityOffers, sorting)} page={'cities'} onCardHover={handleCardHover} />
                  </div>
                </section>
                <div className="cities__right-section">
                  <Map city={City} points={points} activePoint={activeOffer} page={'cities'} />
                </div>
              </div>}
          </div>}
      </main>
    </div>
  );
}
