import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReviewList from '../../components/offer-components/review-list/review-list.tsx';
import OfferGallery from '../../components/offer-components/offer-gallery/offer-gallery.tsx';
import OfferInfo from '../../components/offer-components/offer-info/offer-info.tsx';
import OfferHostInfo from '../../components/offer-components/offer-host-info/offer-host-info.tsx';
import PlacesNear from '../../components/offer-components/places-near/places-near.tsx';
import NotFoundPage from '../not-found-page/not-found-page.tsx';
import Map from '../../components/map/map.tsx';
import Spinner from '../../components/spinner/spinner.tsx';
import markerPoints from '../../utils/marker-points.ts';
import { TPoint, TCity } from '../../types/index.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/index.tsx';
import { fetchNearPlaces, fetchOffer, fetchReviewList } from '../../store/api-actions.ts';
import { useEffect } from 'react';
import { getLoadingOfferPage } from '../../store/offer-page/selectors.ts';
import { getOffer } from '../../store/offer-page/selectors.ts';
import { getNearPlaces } from '../../store/near-places/selectors.ts';
import { unmountOffer } from '../../store/offer-page/offer-page.ts';
import { unmountNearPlaces } from '../../store/near-places/near-places.ts';
import { unmountReviews } from '../../store/reviews/reviews.ts';
import MemorizedHeader from '../../components/header/header.tsx';

export default function OfferPage(): JSX.Element {

  const isLoading = useAppSelector(getLoadingOfferPage);
  const { id } = useParams<{id: string}>();
  const dispatch = useAppDispatch();
  const data = useAppSelector(getOffer);
  const nearPlaces = useAppSelector(getNearPlaces);

  useEffect(() => {
    if (id) {
      dispatch(fetchOffer(id));
      dispatch(fetchNearPlaces(id));
      dispatch(fetchReviewList(id));
    }

    return () => {
      dispatch(unmountOffer());
      dispatch(unmountNearPlaces());
      dispatch(unmountReviews());
    };
  }, [id, dispatch]);

  if (!data) {
    if (isLoading) {
      return (
        <div className="page">
          <MemorizedHeader />
          <Helmet>
            <title>Loading offer...</title>
          </Helmet>
          <Spinner />
        </div>
      );
    }
    return (
      <NotFoundPage />
    );
  }

  const nearPoints: TPoint[] = markerPoints(nearPlaces);

  const mapCenter: TCity = {
    name: data?.city.name,
    location: data?.location,
  };

  const mapCenterMarker: TPoint = {
    id: data?.id,
    location: data?.location,
  };

  return (
    <div className="page">
      <MemorizedHeader />
      <Helmet>
        <title>{data.title}</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={data.images}/>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferInfo offer={data} />
              <OfferHostInfo
                host={data.host}
                description={data.description}
              />
              <ReviewList id={data.id}/>
            </div>
          </div>
          <Map city={mapCenter} points={nearPoints} activePoint={mapCenterMarker} page={'offer'} />
        </section>
        <PlacesNear />
      </main>
    </div>
  );
}
