import { ChangeEvent, useState } from 'react';
import Rating from '../rating/rating.tsx';
import { ConstantValues } from '../../../const.ts';

export default function ReviewForm(): JSX.Element {

  const [starsCount, setStarsCount] = useState<string> ('');

  function handleRating(evt: ChangeEvent<HTMLInputElement>){
    setStarsCount(evt.target.value);
  }

  const [comment, setComment] = useState<string>('');

  function handleChange(evt: ChangeEvent<HTMLTextAreaElement>) {
    setComment(evt.target.value);
  }

  const isValid = comment.length > ConstantValues.MinCommentLength && comment.length < ConstantValues.MaxCommentLength && starsCount !== '';

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <Rating starsCount={handleRating} />
      <textarea onChange={handleChange} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid}>Submit</button>
      </div>
    </form>
  );
}
