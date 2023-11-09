import { TPoint, TOffer } from '../types';

export default function markerPoints(offers: TOffer[]): TPoint[] {
  const markers: TPoint[] = [];

  offers.forEach((offer) => markers.push({
    id: offer.id,
    location: offer.location
  }));

  return markers;
}
