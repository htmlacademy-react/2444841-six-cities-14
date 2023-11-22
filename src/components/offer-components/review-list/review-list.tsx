import Review from '../review/review.tsx';
import ReviewForm from '../review-form/review-form.tsx';
import { TReviewList } from '../../../types/index.ts';
import { AuthorizationStatus } from '../../../const.ts';
import { useAppSelector } from '../../../hooks/index.tsx';

export default function ReviewList(props: TReviewList): JSX.Element {

  const reviewList = useAppSelector((state) => state.reviewList);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewList.length}</span></h2>
      <ul className="reviews__list">
        {reviewList.map((item) => (
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
