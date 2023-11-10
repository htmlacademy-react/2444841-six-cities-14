import { TOffer } from '../types/index.ts';
import { SixCities } from '../const.ts';

export default function pickOffersByCityName(city: SixCities | undefined, offers:TOffer[]): TOffer[] {

  return offers.filter((offer) => offer.city.name === city);
}
