import { MAX_IMAGES } from '../../../const.ts';
import { TImages } from '../../../types/index.ts';

export default function OfferGallery(props: TImages): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {props.images.slice(0, MAX_IMAGES).map((pic) => (
          <div className="offer__image-wrapper" key={pic}>
            <img className="offer__image" src={pic} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
}
