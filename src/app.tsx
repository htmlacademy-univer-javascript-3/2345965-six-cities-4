import {Route, Routes} from 'react-router-dom';
import MainPage from './pages/main-page';
import LoginPage from './pages/login-page';
import FavoritesPage from './pages/favorites-page';
import OfferPage from './pages/offer-page';
import Page404 from './pages/page404';
import PrivateRoute from './components/private-route';
import { AuthorizationStatus, ROUTES } from './const';
import { useAppDispatch, useAppSelector } from './hooks';
import LoadingScreen from './pages/loading-screen';
import HistoryRouter from './components/history-route';
import browserHistory from './browser-history';
import { getAuthCheckedStatus, getAuthorizationStatus, getIsOffersLoading } from './store';
import { useEffect } from 'react';
import { fetchFavoritesAction } from './store/slices/favorites';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isOffersDataLoading = useAppSelector(getIsOffersLoading);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isAuthChecked) {
      dispatch(fetchFavoritesAction());
    }
  }, [dispatch, isAuthChecked]);

  return (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading)
    ? <LoadingScreen /> : (
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={ROUTES.Main}>
            <Route index element={<MainPage />} />
            <Route path={ROUTES.Login} element={<LoginPage />} />
            <Route path={ROUTES.Offer} element={<OfferPage />} />
            <Route
              path={ROUTES.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
            <Route path={ROUTES.NotFound} element={<Page404 />} />
          </Route>
        </Routes>
      </HistoryRouter>
    );
}

export default App;
