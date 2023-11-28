import MemorizedCard from '../card/card.tsx';
import { TCardList } from '../../types/index.ts';
import { memo } from 'react';

export function CardList({offers, page, onCardHover}: TCardList): JSX.Element {

  return (
    <>
      {offers.map((item) => (
        <MemorizedCard
          key={item.id}
          offer={item}
          page={page}
          onCardHover={onCardHover}
        />
      ))}
    </>
  );
}

const MemorizedCardList = memo(CardList);
export default MemorizedCardList;
