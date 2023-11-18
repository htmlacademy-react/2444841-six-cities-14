import { Link } from 'react-router-dom';
import { AppRoute, SixCities } from '../../const.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/index.tsx';
import { changeCity } from '../../store/actions.ts';

export default function LocationsHeader(): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(SixCities).map((city) => (
          <li className="locations__item" key={city}>
            <Link className={`locations__item-link tabs__item ${activeCity === city && 'tabs__item--active'}`} onClick={() => dispatch(changeCity(city))} to={AppRoute.Root}>
              <span>{city}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
