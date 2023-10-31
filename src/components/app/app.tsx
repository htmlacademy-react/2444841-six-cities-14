import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page.tsx';
import MainEmpty from '../../pages/main-empty/main-empty.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import ProtectedRoute from '../protected-route/protected-route.tsx';
import { TAppProps } from '../../types/index.ts';
import { AppRoute, AuthorizationStatus } from '../../const.ts';

export default function App({ offers, reviews}: TAppProps) {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {offers ? <Route path={AppRoute.Root} index element={<MainPage offers={offers} />} />
            :
            <Route path={AppRoute.Root} index element={<MainEmpty />} />}
          <Route path={AppRoute.Login} element={<ProtectedRoute status={AuthorizationStatus.Auth} redirectPage={AppRoute.Root}><LoginPage /></ProtectedRoute>}/>
          <Route path={AppRoute.Favorites} element={<ProtectedRoute status={AuthorizationStatus.NoAuth} redirectPage={AppRoute.Login}><FavoritesPage /></ProtectedRoute>}/>
          <Route path={AppRoute.NotFoundPage} element={<NotFoundPage />} />
          <Route path={AppRoute.Offer} element={<OfferPage offers={offers} reviews={reviews} />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
