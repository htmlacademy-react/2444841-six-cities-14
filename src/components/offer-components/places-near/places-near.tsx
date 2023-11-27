import CardList from '../../card-list/card-list.tsx';
import { useAppSelector } from '../../../hooks/index.tsx';
import Spinner from '../../spinner/spinner.tsx';
import { getLoadingNearPlaces, getNearPlaces, getNearPlacesError } from '../../../store/near-places/selectors.ts';

export default function PlacesNear(): JSX.Element {
  const nearPlaces = useAppSelector(getNearPlaces);
  const isLoading = useAppSelector(getLoadingNearPlaces);
  const hasError = useAppSelector(getNearPlacesError);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      {hasError ?
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood not found, sorry</h2>
        </section>
        :
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <CardList offers={nearPlaces} page={'near-places'} />
          </div>
        </section>}
    </div>
  );
}
