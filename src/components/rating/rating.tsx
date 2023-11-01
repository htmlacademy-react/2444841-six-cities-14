import { ChangeEvent } from 'react';
import { Fragment } from 'react';
import { TRating } from '../../types/index.ts';

export type TStarsCount = {
  starsCount: (evt: ChangeEvent<HTMLInputElement>) => void;
};

const stars: TRating[] = [
  {
    id: 5,
    title: 'perfect'
  },
  {
    id: 4,
    title: 'good'
  },
  {
    id: 3,
    title: 'not bad'
  },
  {
    id: 2,
    title: 'badly'
  },
  {
    id: 1,
    title: 'terribly'
  },
];

export default function Rating({starsCount}: TStarsCount): JSX.Element {

  return (
    <div className="reviews__rating-form form__rating">
      {stars.map((star) => (
        <Fragment key={star.id}>
          <input className="form__rating-input visually-hidden" name="rating" onChange={starsCount} value={star.id} id={`${star.id}-star`} type="radio" />
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
