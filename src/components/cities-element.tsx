import { useAppSelector } from '../hooks';
import { City } from '../types/city';

type CitiesElementProps = {
  city: City;
  onCityChange: (city: City) => void;
};

function CitiesElement ({city, onCityChange}: CitiesElementProps): JSX.Element {
  return (
    <li className="locations__item" onClick={(evt) => {
      evt.preventDefault();
      onCityChange(city);
    }}
    >
      <a className={
        `locations__item-link
        tabs__item
        ${useAppSelector((state) => state.city) === city ? 'tabs__item--active' : ''}`
      } href="#"
      >
        <span>{city.name}</span>
      </a>
    </li>
  );
}

export default CitiesElement;
