import MainPage from "../../pages/main-page/main-page";

type FlatInfo = {
    id: number,
    title: string,
    price: number,
    previewImage: string,
    desc: string
};

type TAppProps = {
    offers: FlatInfo[],
    cities: string[]
};

export default function App({ offers, cities }: TAppProps) {
    return <MainPage 
        offers={offers}
        cities={cities} />
};
