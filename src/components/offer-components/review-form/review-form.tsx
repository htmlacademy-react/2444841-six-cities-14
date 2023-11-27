import { ChangeEvent, useState } from 'react';
import Rating from '../rating/rating.tsx';
import { ConstantValues } from '../../../const.ts';
import { useAppDispatch } from '../../../hooks/index.tsx';
import { postComment } from '../../../store/api-actions.ts';
import { TReviewProps } from '../../../types/index.ts';

export default function ReviewForm({id}: TReviewProps): JSX.Element {

  const [rating, setRating] = useState<number> (0);
  const [comment, setComment] = useState<string>('');

  const dispatch = useAppDispatch();

  function handleChange(evt: ChangeEvent<HTMLTextAreaElement>) {
    setComment(evt.target.value);
  }

  function handleRating(evt: ChangeEvent<HTMLInputElement>){
    setRating(Number(evt.target.value));
  }

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(postComment({id, comment, rating}));
    e.target.reset();
  };

  const isValid = comment.length > ConstantValues.MinCommentLength && comment.length < ConstantValues.MaxCommentLength && rating !== 0;

  return (
    <form className="reviews__form form" onSubmit={handleSubmit} action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <Rating starsCount={handleRating} />
      <textarea onChange={handleChange} value={comment} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid}>Submit</button>
      </div>
    </form>
  );
}
