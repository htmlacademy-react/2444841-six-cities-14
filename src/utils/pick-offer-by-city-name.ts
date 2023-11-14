import { TOfferCard } from '../types/index.ts';
import { SixCities } from '../const.ts';

export default function pickOffersByCityName(city: SixCities, offers: TOfferCard[]): TOfferCard[] {

  return offers.filter((offer) => offer.city.name === city);
}
