import { ChangeEvent, memo } from 'react';
import { Fragment } from 'react';
import { STARS } from '../../../const';
import { useAppSelector } from '../../../hooks';
import { getLoadingReviewForm } from '../../../store/reviews/selectors';

export type TStarsCount = {
  starsCount: (evt: ChangeEvent<HTMLInputElement>) => void;
  rating: number;
};

export function Rating({starsCount, rating}: TStarsCount): JSX.Element {

  const isLoading = useAppSelector(getLoadingReviewForm);

  return (
    <div className="reviews__rating-form form__rating">
      {STARS.map((star) => (
        <Fragment key={star.id}>
          <input className="form__rating-input visually-hidden" onChange={starsCount} name="rating" value={star.id} id={`${star.id}-stars`} type="radio" checked={star.id === rating} disabled={isLoading} />
          <label htmlFor={`${star.id}-stars`} className="reviews__rating-label form__rating-label" title={star.title}>
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
