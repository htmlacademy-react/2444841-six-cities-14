type TCities = string[]

export default function LocationsHeader(cities: TCities): JSX.Element {
  return <>
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => 
          <li className="locations__item" key={city}>
            <a className="locations__item-link tabs__item" href="#">
              <span>{city}</span>
            </a>
          </li>
        )}
      </ul>
    </section>
  </>
};
  