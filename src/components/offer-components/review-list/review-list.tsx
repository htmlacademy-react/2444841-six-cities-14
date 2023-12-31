import Review from '../review/review.tsx';
import ReviewForm from '../review-form/review-form.tsx';
import { AuthorizationStatus, MAX_VISIBLE_REVIEWS } from '../../../const.ts';
import { useAppSelector } from '../../../hooks/index.tsx';
import { TReviewProps } from '../../../types/index.ts';
import Spinner from '../../spinner/spinner.tsx';
import { getReviews, getReviewsError } from '../../../store/reviews/selectors.ts';
import { getAuthStatus } from '../../../store/user/selectors.ts';
import { getLoadingReviews } from '../../../store/reviews/selectors.ts';

export default function ReviewList({id}: TReviewProps): JSX.Element {

  const reviewList = useAppSelector(getReviews);
  const reviews = reviewList.slice(0, MAX_VISIBLE_REVIEWS);
  const status = useAppSelector(getAuthStatus);
  const isLoading = useAppSelector(getLoadingReviews);
  const hasError = useAppSelector(getReviewsError);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="offer__reviews reviews">
      {hasError ?
        <h2 className="reviews__title">Reviews not found, sorry</h2>
        :
        <>
          <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewList.length}</span></h2>
          <ul className="reviews__list">
            {reviews.map((item) => (
              <Review
                key={item.id}
                review={item}
              />
            ))}
          </ul>
        </>}
      {status === AuthorizationStatus.Auth ? <ReviewForm id={id}/> : ''}
    </section>
  );
}
