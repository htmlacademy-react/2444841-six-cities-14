import { useState } from 'react';
import { Sorting } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSorting } from '../../store/actions';


export default function SortBy(): JSX.Element {

  const [opened, setOpened] = useState<boolean>(false);
  const activeSorting = useAppSelector((state) => state.sorting);
  const dispatch = useAppDispatch();

  function handleToggle() {
    setOpened(!opened);
  }

  function handleChangeSorting(item: Sorting) {
    dispatch(changeSorting(item));
    setOpened(false);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => handleToggle()}>
        {activeSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${opened ? 'places__options--opened' : ''}`}>
        {Object.values(Sorting).map((item) => (
          <li
            key={item}
            className={`places__option ${activeSorting === item ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => handleChangeSorting(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
}