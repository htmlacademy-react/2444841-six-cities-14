import CardList from '../../card-list/card-list.tsx';
import { TFlatInfo } from '../../../types/index.ts';

const nearPlaces: TFlatInfo[] = [
  {
    id: 6,
    title: 'title 6',
    price: 600,
    previewImage: 'img/room.jpg',
    desc: 'desc6'
  },
  {
    id: 7,
    title: 'title 7',
    price: 700,
    previewImage: 'img/room.jpg',
    desc: 'desc7'
  },
  {
    id: 8,
    title: 'title 8',
    price: 800,
    previewImage: 'img/room.jpg',
    desc: 'desc8'
  }
];

export default function PlacesNear(): JSX.Element {
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
