import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import { PIN_MARKER_CURRENT, PIN_MARKER_DEFAULT } from '../../const.ts';
import { TMapProps } from '../../types/index.ts';
import 'leaflet/dist/leaflet.css';

const defaultCustomIcon = new Icon({
  iconUrl: PIN_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [14, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: PIN_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [14, 39]
});

export default function Map(props: TMapProps): JSX.Element {
  const {city, points, activePoint, page} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  //console.log(city.name)

  if (page === 'offer' && activePoint !== null) {
    points.push(activePoint);
  }

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            activePoint !== undefined && point.id === activePoint?.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, activePoint]);

  return <section className={`${page}__map map`} style={{height: '540px'}} ref={mapRef}></section>;
}
