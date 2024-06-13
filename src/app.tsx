import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainPage from './pages/main-page/main-page';
import LoginPage from './pages/login-page/login-page';
import FavoritesPage from './pages/favorites-page/favorites-page';
import OfferPage from './pages/offer-page/offer-page';
import Page404 from './pages/page404/page404';
import PrivateRoute from './components/private-route/private-route';
import { AuthorizationStatus } from './const';
import { Offer } from './types/offers';


type AppProps = {
  cardsCount: number;
  offers: Offer[];
};

function App({cardsCount, offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<MainPage cardsCount = {cardsCount} offers={offers} />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='offer/:id' element={<OfferPage offers={offers} />} />
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
