import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchCards, fetchFavorites } from '../../store/api-actions.ts';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/index.tsx';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from '../scroll-to-top/scroll-to-top.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import ProtectedRoute from '../protected-route/protected-route.tsx';
import { AppRoute } from '../../const.ts';
import MainPage from '../../pages/main-page/main-page.tsx';

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCards());
    dispatch(fetchFavorites());
  }, [dispatch]);

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
