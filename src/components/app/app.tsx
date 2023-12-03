import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from '../scroll-to-top/scroll-to-top.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import ProtectedRoute from '../protected-route/protected-route.tsx';
import { AppRoute } from '../../const.ts';
import MainPage from '../../pages/main-page/main-page.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/index.tsx';
import { getFetchingFavoriteError } from '../../store/favorites-page/selectors.ts';
import { toast } from 'react-toastify';
import { closeError } from '../../store/favorites-page/favorites-page.ts';

export default function App() {

  const hasError = useAppSelector(getFetchingFavoriteError);
  const dispatch = useAppDispatch();

  if (hasError) {
    toast.warn('Something went wrong');
    setTimeout(() => dispatch(closeError()), 5000);
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.Root} index element={<MainPage />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Favorites} element={<ProtectedRoute redirectPage={AppRoute.Login}><FavoritesPage /></ProtectedRoute>}/>
          <Route path={AppRoute.NotFoundPage} element={<NotFoundPage />} />
          <Route path={AppRoute.Offer} element={<OfferPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
