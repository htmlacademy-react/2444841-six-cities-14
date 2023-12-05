import { ChangeEvent, memo } from 'react';
import { Fragment } from 'react';
import { STARS } from '../../../const';

export type TStarsCount = {
  starsCount: (evt: ChangeEvent<HTMLInputElement>) => void;
  rating: number;
};

export function Rating({starsCount, rating}: TStarsCount): JSX.Element {

  return (
    <div className="reviews__rating-form form__rating">
      {STARS.map((star) => (
        <Fragment key={star.id}>
          <input className="form__rating-input visually-hidden" onChange={(e) => starsCount(e)} name="rating" value={star.id} id={`${star.id}-star`} type="radio" checked={star.id <= rating} />
          <label htmlFor={`${star.id}-star`} className="reviews__rating-label form__rating-label" title={star.title}>
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </Fragment>
      ))}
    </div>
  );
}

const MemoRating = memo(Rating);
export default MemoRating;
