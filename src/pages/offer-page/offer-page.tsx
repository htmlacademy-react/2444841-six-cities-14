import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header.tsx';
import ReviewList from '../../components/offer-components/review-list/review-list.tsx';
import OfferGallery from '../../components/offer-components/offer-gallery/offer-gallery.tsx';
import OfferInfo from '../../components/offer-components/offer-info/offer-info.tsx';
import OfferHostInfo from '../../components/offer-components/offer-host-info/offer-host-info.tsx';
import PlacesNear from '../../components/offer-components/places-near/places-near.tsx';
import NotFoundPage from '../not-found-page/not-found-page.tsx';
import Map from '../../components/map/map.tsx';
import Spinner from '../../components/spinner/spinner.tsx';
import markerPoints from '../../utils/marker-points.ts';
import { TOfferPageProps, TPoint, TCity } from '../../types/index.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/index.tsx';
import { loadNearPlaces, loadOffer, loadReviewList } from '../../store/api-actions.ts';
import { useEffect } from 'react';
import { unmountOffer } from '../../store/actions.ts';

export default function OfferPage(props: TOfferPageProps): JSX.Element {

  const isLoading = useAppSelector((state) => state.loadingOfferPage);
  const { id } = useParams<{id: string}>();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.offer);
  const nearPlaces = useAppSelector((state) => state.nearPlaces);

  useEffect(() => {
    if (id) {
      dispatch(loadOffer(id));
      dispatch(loadNearPlaces(id));
      dispatch(loadReviewList(id));
    }

    return () => {
      dispatch(unmountOffer());
    };
  }, [id, dispatch]);

  if (!data) {
    if (isLoading) {
      return <Spinner />;
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
  //console.log(mapCenter, nearPoints, mapCenterMarker)

  return (
    <div className="page">
      <Header />
      <Helmet>
        <title>{data.title}</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={data.images}/>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferInfo
                isPremium={data.isPremium}
                title={data.title}
                isFavorite={data.isFavorite}
                rating={data.rating}
                type={data.type}
                bedrooms={data.bedrooms}
                maxAdults={data.maxAdults}
                price={data.price}
                goods={data.goods}
              />
              <OfferHostInfo
                host={data.host}
                description={data.description}
              />
              <ReviewList status={props.status} />
            </div>
          </div>
          <Map city={mapCenter} points={nearPoints} activePoint={mapCenterMarker} page={'offer'} />
        </section>
        <PlacesNear />
      </main>
    </div>
  );
}
