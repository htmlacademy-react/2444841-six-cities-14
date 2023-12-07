import { ChangeEvent, useCallback, useState } from 'react';
import { CONSTANT_VALUES } from '../../../const.ts';
import { useAppDispatch, useAppSelector } from '../../../hooks/index.tsx';
import { postComment } from '../../../store/api-actions.ts';
import { TReviewProps } from '../../../types/index.ts';
import MemoRating from '../rating/rating.tsx';
import { getLoadingReviewForm, getReviewFormError } from '../../../store/reviews/selectors.ts';
import { toast } from 'react-toastify';
import { undoError } from '../../../store/reviews/reviews.ts';

export default function ReviewForm({id}: TReviewProps): JSX.Element {

  const [rating, setRating] = useState<number> (0);
  const [comment, setComment] = useState<string>('');
  const hasError = useAppSelector(getReviewFormError);
  const isLoading = useAppSelector(getLoadingReviewForm);
  const dispatch = useAppDispatch();

  function handleChange(evt: ChangeEvent<HTMLTextAreaElement>) {
    setComment(evt.target.value);
  }

  const handleRating = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  }, []);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();

    dispatch(postComment({id, comment, rating}))
      .then((response) => {
        if(response.meta.requestStatus !== 'rejected' && !isLoading) {
          setComment('');
          setRating(0);
        }
      });
  };

  if (hasError) {
    toast.warn('Somthing went wrong, please, try again');
    dispatch(undoError());
  }

  const isValid = comment.length > CONSTANT_VALUES.MIN_COMMENT_LENGTH && comment.length < CONSTANT_VALUES.MAX_COMMENT_LENGTH && rating !== 0 && !isLoading && !hasError;

  return (
    <form className="reviews__form form" onSubmit={handleSubmit} action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <MemoRating starsCount={handleRating} rating={rating} />
      <textarea onChange={handleChange} disabled={isLoading} value={comment} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{CONSTANT_VALUES.MIN_COMMENT_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid}>Submit</button>
      </div>
    </form>
  );
}
