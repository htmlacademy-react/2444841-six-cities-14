import { Link } from 'react-router-dom';

const cities: string[] = ['Paris', 'Cologne', 'Brussels', 'Amstardam', 'Hamburg', 'Dusseldorf'];

export default function LocationsHeader(): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li className="locations__item" key={city}>
            <Link className="locations__item-link tabs__item" to="#">
              <span>{city}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
