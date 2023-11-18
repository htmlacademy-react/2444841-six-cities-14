import { Link } from 'react-router-dom';
import { AppRoute, SixCities } from '../../const.ts';
import { TLocationsHeader } from '../../types/index.ts';
import { useAppSelector } from '../../hooks/index.tsx';

export default function LocationsHeader(props: TLocationsHeader): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(SixCities).map((city) => (
          <li className="locations__item" key={city}>
            <Link className={`locations__item-link tabs__item ${activeCity === city && 'tabs__item--active'}`} onClick={() => props.pickCity(city)} to={AppRoute.Root}>
              <span>{city}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
