import MainHeader from "../../components/main-header/main-header.tsx";
import OfferGallery from "../../components/offer-components/offer-gallery/offer-gallery.tsx";
import OfferInfo from "../../components/offer-components/offer-info/offer-info.tsx";
import OfferHostInfo from "../../components/offer-components/offer-host-info/offer-host-info.tsx";
import PlacesNear from "../../components/offer-components/places-near/places-near.tsx";

export default function OfferNotLoggedPage(): JSX.Element {

  return (
    <div className="page">
      <MainHeader />

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery />
          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferInfo />
              <OfferHostInfo />
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ul className="reviews__list">
                  <li className="reviews__item">
                    <div className="reviews__user user">
                      <div className="reviews__avatar-wrapper user__avatar-wrapper">
                        <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
                      </div>
                      <span className="reviews__user-name">
                        Max
                      </span>
                    </div>
                    <div className="reviews__info">
                      <div className="reviews__rating rating">
                        <div className="reviews__stars rating__stars">
                          <span style={{width: '80%'}}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <p className="reviews__text">
                        A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                      </p>
                      <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                    </div>
                  </li>
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
