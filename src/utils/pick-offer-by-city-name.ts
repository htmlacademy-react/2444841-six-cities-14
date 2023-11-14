import { TCard } from '../types/index.ts';
import { SixCities } from '../const.ts';

export default function pickOffersByCityName(city: SixCities, offers: TCard[]): TCard[] {

  return offers.filter((offer) => offer.city.name === city);
}
