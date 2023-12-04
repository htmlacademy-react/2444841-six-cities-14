import { useState, useCallback, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/map.tsx';
import MainPageEmpty from '../../components/main-page-empty/main-page-empty.tsx';
import Spinner from '../../components/spinner/spinner.tsx';
import pickOffersByCityName from '../../utils/pick-offer-by-city-name.ts';
import pluralize from '../../utils/pluralize.ts';
import markerPoints from '../../utils/marker-points.ts';
import sortOffers from '../../utils/sort-offers.ts';
import { CITY } from '../../const.ts';
import { TPoint } from '../../types/index.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/index.tsx';
import { getCards, getCity, getLoadingStatus, getSorting } from '../../store/main-page/selectors.ts';
import MemorizedLocationsHeader from '../../components/locations-header/locations-header.tsx';
import MemorizedHeader from '../../components/header/header.tsx';
import MemorizedCardList from '../../components/card-list/card-list.tsx';
import MemorizedSordBy from '../../components/sort-by/sort-by.tsx';
import { fetchCards } from '../../store/api-actions.ts';

export default function MainPage(): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const [activeOffer, setActiveOffer] = useState<TPoint | null>(null);
  const activeCity = useAppSelector(getCity);
  const isLoading = useAppSelector(getLoadingStatus);
  const offersCard = useAppSelector(getCards);
  const sorting = useAppSelector(getSorting);
  const offers = useMemo(
    (() => {
      const activeCityOffers = pickOffersByCityName(activeCity, offersCard);
      return sortOffers(activeCityOffers, sorting);
    }),
    [activeCity, offersCard, sorting]
  );
  const points: TPoint[] = markerPoints(offers);
  const cityMap = CITY.find((city) => city.name === activeCity);

  const handleCardHover = useCallback((point: TPoint | null) => {
    setActiveOffer(point);
  }, []);

  if (cityMap === undefined) {
    return <p>Map not found</p>;
  }

  return (
    <div className="page page--gray page--main">
      <MemorizedHeader />
      <Helmet>
        <title>6 Cities: {activeCity}</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <MemorizedLocationsHeader />
        </div>
        {isLoading ?
          <Spinner />
          :
          <div className="cities">
            {offers.length === 0 ?
              <MainPageEmpty />
              :
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offers.length} place{pluralize(offers.length)} to stay in {activeCity}</b>
                  <MemorizedSordBy />
                  <div className="cities__places-list places__list tabs__content">
                    <MemorizedCardList offers={offers} page={'cities'} onCardHover={handleCardHover} />
                  </div>
                </section>
                <div className="cities__right-section">
                  <Map city={cityMap} points={points} activePoint={activeOffer} page={'cities'} />
                </div>
              </div>}
          </div>}
      </main>
    </div>
  );
}
