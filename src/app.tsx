import {Route, Routes} from 'react-router-dom';
import MainPage from './pages/main-page';
import LoginPage from './pages/login-page';
import FavoritesPage from './pages/favorites-page';
import OfferPage from './pages/offer-page';
import Page404 from './pages/page404';
import PrivateRoute from './components/private-route';
import { AuthorizationStatus } from './const';
import { useAppSelector } from './hooks';
import LoadingScreen from './pages/loading-screen';
import HistoryRouter from './components/history-route';
import browserHistory from './browser-history';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersLoading);
  return (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading)
    ? <LoadingScreen /> : (
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path='/'>
            <Route index element={<MainPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='offer/:id' element={<OfferPage />} />
            <Route
              path='favorites'
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
            <Route path='*' element={<Page404 />} />
          </Route>
        </Routes>
      </HistoryRouter>
    );
}

export default App;
