export type TFlatInfo = {
  id: number;
  title: string;
  price: number;
  previewImage: string;
  desc: string;
};

export type TCardLocation = 'cities' | 'favorites' | 'near-places';

export type TCardList = {
  offers: TFlatInfo[];
  page: TCardLocation;
};

export type TCardInfo = {
  offer: TFlatInfo;
  page: TCardLocation;
};
