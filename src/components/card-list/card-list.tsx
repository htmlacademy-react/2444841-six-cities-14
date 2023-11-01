import Card from '../card/card.tsx';
import { TCardList } from '../../types/index.ts';

export default function CardList({offers, page, onCardHover}: TCardList): JSX.Element {

  return (
    <>
      {offers.map((item) => (
        <Card
          key={item.id}
          offer={item}
          page={page}
          onCardHover={onCardHover}
        />
      ))}
    </>
  );
}
