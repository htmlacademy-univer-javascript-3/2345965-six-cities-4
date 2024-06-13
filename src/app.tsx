import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainPage from './pages/main-page';
import LoginPage from './pages/login-page';
import FavoritesPage from './pages/favorites-page';
import OfferPage from './pages/offer-page';
import Page404 from './pages/page404';
import PrivateRoute from './components/private-route';
import { AuthorizationStatus } from './const';
import { DetailedOffer } from './types/detailed-offer';
import { Review } from './types/review';
import { useAppSelector } from './hooks';
import LoadingScreen from './pages/loading-screen';


type AppProps = {
  detailedOffers: DetailedOffer[];
  reviews: Review[];
};

function App({detailedOffers, reviews}: AppProps): JSX.Element {
  const isOffersDataLoading = useAppSelector((state) => state.isOffersLoading);
  return isOffersDataLoading ? <LoadingScreen /> : (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<MainPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='offer/:id' element={<OfferPage detailedOffers={detailedOffers} reviews={reviews} />} />
          <Route
            path='favorites'
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
