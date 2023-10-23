import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import { TAppProps } from '../../types/index.ts';
import { TOffer } from '../../types/index.ts';

const offersData: TOffer[] = [
  {
    city: {
      name: "Dusseldorf",
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    previewImage: "https://14.react.pages.academy/static/offer/3.jpg",
    images: [
      "https://14.react.pages.academy/static/offer/16.jpg",
      "https://14.react.pages.academy/static/offer/13.jpg",
      "https://14.react.pages.academy/static/offer/6.jpg",
      "https://14.react.pages.academy/static/offer/11.jpg",
      "https://14.react.pages.academy/static/offer/14.jpg",
      "https://14.react.pages.academy/static/offer/9.jpg",
      "https://14.react.pages.academy/static/offer/2.jpg",
      "https://14.react.pages.academy/static/offer/15.jpg",
      "https://14.react.pages.academy/static/offer/7.jpg",
      "https://14.react.pages.academy/static/offer/17.jpg",
      "https://14.react.pages.academy/static/offer/4.jpg",
      "https://14.react.pages.academy/static/offer/8.jpg",
      "https://14.react.pages.academy/static/offer/10.jpg",
      "https://14.react.pages.academy/static/offer/5.jpg"
    ],
    title: "Waterfront with extraordinary view",
    isFavorite: false,
    isPremium: false,
    rating: 4.8,
    type: "room",
    bedrooms: 1,
    maxAdults: 2,
    price: 142,
    good: [
      "Laptop friendly workspace",
      "Breakfast"
    ],
    host: {
      id: 25,
      name: "Angelina",
      isPro: true,
      avatarUrl: "img/avatar-angelina.jpg"
    },
    description: "A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.",
    location: {
      latitude: 51.237402,
      longitude: 6.779314,
      zoom: 16
    },
    id: 1
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: "Amsterdam"
    },
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    good: [
      "Heating"
    ],
    host: {
      avatarUrl: "img/1.png",
      id: 3,
      isPro: true,
      name: "Angelina"
    },
    id: 1,
    images: [
      "img/1.png"
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: "img/1.png",
    price: 120,
    rating: 4.8,
    title: "Beautiful & luxurious studio at great location",
    type: "apartment"
  }
]

export default function App({ offers, cities }: TAppProps) {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<MainPage offers={offers} cities={cities} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/offer/:id" element={<OfferPage />} />
      </Routes>
    </BrowserRouter>
  );
}
