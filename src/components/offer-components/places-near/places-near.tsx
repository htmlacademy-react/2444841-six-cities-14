import CardList from '../../card-list/card-list.tsx';
import { useAppSelector } from '../../../hooks/index.tsx';
import { MAX_NEAR_PLACES } from '../../../const.ts';
import Spinner from '../../spinner/spinner.tsx';
import { getLoadingNearPlaces, getNearPlaces } from '../../../store/near-places/selectors.ts';

export default function PlacesNear(): JSX.Element {
  const nearPlaces = useAppSelector(getNearPlaces).slice(0, MAX_NEAR_PLACES);
  const isLoading = useAppSelector(getLoadingNearPlaces);

  if (isLoading) {
    return <Spinner />;
  }

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
