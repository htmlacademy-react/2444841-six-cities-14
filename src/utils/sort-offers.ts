import { TCard } from '../types/index.ts';
import { Sorting } from '../const.ts';

export default function sortOffers(offers: TCard[], sorting: Sorting): TCard[] {
  if(sorting === Sorting.TopRated) {
    return offers.sort((best, worst) => worst.rating - best.rating);
  } else if(sorting === Sorting.HighToLow) {
    return offers.sort((high, low) => low.price - high.price);
  } else if (sorting === Sorting.LowToHigh) {
    return offers.sort((high, low) => high.price - low.price);
  } else {
    return offers;
  }
}
