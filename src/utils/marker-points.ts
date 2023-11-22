import { TPoint, TCard } from '../types';

export default function markerPoints(offers: TCard[]): TPoint[] {
  const markers: TPoint[] = [];

  offers.forEach((offer) => markers.push({
    id: offer.id,
    location: offer.location
  }));

  return markers;
}
