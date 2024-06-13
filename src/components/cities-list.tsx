import { CITIES } from '../const';
import { useAppDispatch } from '../hooks';
import { changeCity } from '../store';
import { City } from '../types/city';
import CitiesElement from './cities-element';

function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleCityChange = (city: City) => {
    dispatch(changeCity(city));
  };
  return (
    <ul className="locations__list tabs__list">
      {Object.values(CITIES).map((city) => (
        <CitiesElement
          key={city.name}
          city={city}
          onCityChange={handleCityChange}
        />
      ))}
    </ul>
  );
}

export default CitiesList;
