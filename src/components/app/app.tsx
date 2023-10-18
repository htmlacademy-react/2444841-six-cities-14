import MainPage from "../../pages/main-page/main-page";

type FlatInfo = {
    id: number,
    title: string,
    price: number,
    previewImage: string,
    desc: string
  }

type TAppProps = {
    offersCount: number,
    offers: FlatInfo[]
}

export default function App({ offersCount ,offers }: TAppProps) {
    return <MainPage offersCount={offersCount} offers={offers}/>
}