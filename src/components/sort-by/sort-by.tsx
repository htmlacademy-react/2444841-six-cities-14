import { useState } from 'react';
import { Sorting } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSorting } from '../../store/main-page/main-page';
import { getSorting } from '../../store/main-page/selectors';


export default function SortBy(): JSX.Element {

  const [opened, setOpened] = useState<boolean>(false);
  const activeSorting = useAppSelector(getSorting);
  const dispatch = useAppDispatch();
  const sorting = Object.values(Sorting);

  function handleToggle(): void {
    setOpened(!opened);
  }

  function handleChangeSorting(item: Sorting): void {
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
        {sorting.map((item) => (
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
