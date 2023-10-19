import Card from '../card/card.tsx';

type FlatInfo = {
    id: number;
    title: string;
    price: number;
    previewImage: string;
    desc: string;
};

type TCardList = {
  offers: FlatInfo[];
};

export default function CardList({offers}: TCardList): JSX.Element {

  return (
    <>
      {offers.map((item: FlatInfo) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          previewImage={item.previewImage}
          desc={item.desc}
        />
      ))}
    </>
  );
}
