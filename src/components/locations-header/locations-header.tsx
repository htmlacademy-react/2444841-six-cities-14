import './location-header.modules.css';
import { CITIES, SixCities } from '../../const.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/index.tsx';
import { changeCity } from '../../store/main-page/main-page.ts';
import { getCity } from '../../store/main-page/selectors.ts';
import { memo, useCallback } from 'react';

export function LocationsHeader(): JSX.Element {
  const activeCity = useAppSelector(getCity);
  const dispatch = useAppDispatch();

  const handleClick = useCallback((city: SixCities) => {
    dispatch(changeCity(city));
  }, [dispatch]);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <li className="locations__item" key={city}>
            <button className={`locations__item-link tabs__item ${activeCity === city && 'tabs__item--active'}`} onClick={() => handleClick(city)}>
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
