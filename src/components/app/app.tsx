import MainPage from "../../pages/main-page/main-page.tsx";

type FlatInfo = {
    id: number;
    title: string;
    price: number;
    previewImage: string;
    desc: string;
};

type TCities = string[]

type TAppProps = {
  offers: FlatInfo[];
  cities: TCities;
};

export default function App({ offers, cities }: TAppProps) {

    return <MainPage 
        offers={offers}
        cities={cities} />
};
