import './location-header.css';
import { SixCities } from '../../const.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/index.tsx';
import { changeCity } from '../../store/main-page/main-page.ts';
import { getCity } from '../../store/main-page/selectors.ts';
import { memo } from 'react';

export function LocationsHeader(): JSX.Element {
  const activeCity = useAppSelector(getCity);
  const dispatch = useAppDispatch();
  const cities = Object.values(SixCities);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li className="locations__item" key={city}>
            <button className={`locations__item-link tabs__item ${activeCity === city && 'tabs__item--active'}`} onClick={() => dispatch(changeCity(city))}>
              <span>{city}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

const MemorizedLocationsHeader = memo(LocationsHeader);
export default MemorizedLocationsHeader;
