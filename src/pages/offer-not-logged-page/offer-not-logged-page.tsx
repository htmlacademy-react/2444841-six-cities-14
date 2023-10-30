import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header.tsx';
import Review from '../../components/review/review.tsx';
import OfferGallery from '../../components/offer-components/offer-gallery/offer-gallery.tsx';
import OfferInfo from '../../components/offer-components/offer-info/offer-info.tsx';
import OfferHostInfo from '../../components/offer-components/offer-host-info/offer-host-info.tsx';
import PlacesNear from '../../components/offer-components/places-near/places-near.tsx';
import NotFoundPage from '../not-found-page/not-found-page.tsx';
import { TOffer } from '../../types/index.ts';

type TProps = {
  offersData: TOffer[];
}

export default function OfferNotLoggedPage(props: TProps): JSX.Element {

  const { id } = useParams<{id: string}>();

  const data = props.offersData.find((offer) => offer.id === id);

  if (!data) {
    return (
      <NotFoundPage />
    );
  }

  return (
    <div className="page">
      <Header />
      <Helmet>
        <title>{data?.title}</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={data?.images}/>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferInfo
                isPremium={data?.isPremium}
                title={data?.title}
                isFavorite={data?.isFavorite}
                rating={data?.rating}
                type={data?.type}
                bedrooms={data?.bedrooms}
                maxAdults={data?.maxAdults}
                price={data?.price}
                good={data?.good}
              />
              <OfferHostInfo
                host={data?.host}
                description={data?.description}
              />
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ul className="reviews__list">
                  <Review />
                </ul>
              </section>
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <PlacesNear />
      </main>
    </div>
  );
}
