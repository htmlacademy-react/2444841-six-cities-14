import CardList from '../../card-list/card-list.tsx';
import { useAppSelector } from '../../../hooks/index.tsx';

export default function PlacesNear(): JSX.Element {

  const nearPlaces = useAppSelector((state) => state.nearPlaces);


  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          <CardList offers={nearPlaces} page={'near-places'} />
        </div>
      </section>
    </div>
  );
}
