import Review from '../review/review.tsx';
import ReviewForm from '../review-form/review-form.tsx';
import { TReview, TReviewList } from '../../../types/index.ts';
import { AuthorizationStatus } from '../../../const.ts';

export default function ReviewList(props: TReviewList): JSX.Element {

  const reviews: TReview[] = props.reviews.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date))).slice(0, 10);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{props.reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((item) => (
          <Review
            key={item.id}
            review={item}
          />
        ))}
      </ul>
      {props.status === AuthorizationStatus.Auth ? <ReviewForm /> : ''}
    </section>
  );
}
