import { TPoint, TOfferCard } from '../types';

export default function markerPoints(offers: TOfferCard[]): TPoint[] {
  const markers: TPoint[] = [];

  offers.forEach((offer) => markers.push({
    id: offer.id,
    location: offer.location
  }));

  return markers;
}
