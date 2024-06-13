import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainPage from './pages/main-page/main-page';
import LoginPage from './pages/login-page/login-page';
import FavoritesPage from './pages/favorites-page/favorites-page';
import OfferPage from './pages/offer-page/offer-page';
import Page404 from './pages/page404/page404';
import PrivateRoute from './components/private-route';
import { AuthorizationStatus } from './const';
import { Offer } from './types/offer';
import { DetailedOffer } from './types/detailed-offer';
import { Review } from './types/review';


type AppProps = {
  cardsCount: number;
  offers: Offer[];
  detailedOffers: DetailedOffer[];
  reviews: Review[];
};

function App({cardsCount, offers, detailedOffers, reviews}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<MainPage cardsCount = {cardsCount} offers={offers} />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='offer/:id' element={<OfferPage offers={offers} detailedOffers={detailedOffers} reviews={reviews} />} />
          <Route
            path='favorites'
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesPage offers={offers} />
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
