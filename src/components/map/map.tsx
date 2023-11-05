import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from '../../hooks/use-map';
import { TMapProps } from '../../types/index.ts';
import 'leaflet/dist/leaflet.css';

function Map(props: TMapProps): JSX.Element {
  const {city} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  return <div className="cities__map" style={{height: '500px'}} ref={mapRef}></div>;
}

export default Map;