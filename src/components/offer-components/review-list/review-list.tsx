import Review from '../review/review.tsx';
import ReviewForm from '../review-form/review-form.tsx';
import { TReviewList } from '../../../types/index.ts';
import { AuthorizationStatus } from '../../../const.ts';

export default function ReviewList(props: TReviewList): JSX.Element {

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{props.reviews.length}</span></h2>
      <ul className="reviews__list">
        {props.reviews.map((item) => (
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
