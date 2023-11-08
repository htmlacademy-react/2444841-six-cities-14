import { Link } from 'react-router-dom';
import { AppRoute, SixCities } from '../../const.ts';
import { TLocationsHeader } from '../../types/index.ts';

const cities = Object.values(SixCities);

export default function LocationsHeader(props: TLocationsHeader): JSX.Element {

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li className="locations__item" key={city}>
            <Link className={props.activeCity === city ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} onClick={() => props.pickCity(city)} to={AppRoute.Root}>
              <span>{city}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
