import CardList from '../../card-list/card-list.tsx';
import { TNearPlaces } from '../../../types/index.ts';

export default function PlacesNear({offers}: TNearPlaces): JSX.Element {

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          <CardList offers={offers} page={'near-places'} />
        </div>
      </section>
    </div>
  );
}
