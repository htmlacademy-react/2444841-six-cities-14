import Card from "../../components/card/card.tsx";
import MainHeader from "../../components/main-header/main-header.tsx";
import LocationsHeader from "../../components/locations-header/locations-header.tsx";
//import CardList from "../../components/card-list/card-list.tsx";

type FlatInfo = {
  id: number;
  title: string;
  price: number;
  previewImage: string;
  desc: string;
};

type TCities = string[]

type TAppProps = {
  offers: FlatInfo[];
  cities: TCities;
};

export default function MainPage({offers, cities}: TAppProps): JSX.Element {
  console.log(cities.length, cities)
  return (
    <div className="page page--gray page--main">
      <MainHeader />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsHeader cities={cities}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {offers.map((item) => 
                  <Card 
                    key={item.id} 
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    previewImage={item.previewImage}
                    desc={item.desc}
                  />
                )}
                
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
};

//<CardList offers={offers} />
//<LocationsHeader cities={cities}/>