import { TBookmarkButton } from '../../types';
import { memo, useMemo } from 'react';

export function BookmarkButton({ status, element, bookmarkToggle }: TBookmarkButton): JSX.Element {

  const isActive = useMemo(
    (() => {
      if (status) {
        return `${element}__bookmark-button ${element}__bookmark-button--active button`;
      } else {
        return `${element}__bookmark-button button`;
      }
    }), [status, element]);

  return (
    <button onClick={bookmarkToggle} className={isActive} type="button">
      <svg className={`${element}__bookmark-icon`} width={element === 'offer' ? '31' : '18'} height={element === 'offer' ? '33' : '19'}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{status ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

const MemoBookmarkButton = memo(BookmarkButton);
export default MemoBookmarkButton;
