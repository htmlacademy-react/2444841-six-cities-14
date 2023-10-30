import { TRating } from '../../types/index.ts';

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

export default function Rating(): JSX.Element {

  return (
    <div className="reviews__rating-form form__rating">
      {stars.map((star) => (
        <div key={star.id} className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating" value={star.id} id={`${star.id}-star`} type="radio" />
          <label htmlFor={`${star.id}-star`} className="reviews__rating-label form__rating-label" title={star.title}>
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
      ))}
    </div>
  );
}
