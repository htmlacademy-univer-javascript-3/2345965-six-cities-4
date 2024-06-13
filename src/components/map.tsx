import React, { useEffect } from 'react';
import leaflet from 'leaflet';
import useMap from '../hooks/use-map';
import { City } from '../types/city';
import 'leaflet/dist/leaflet.css';
import { PointLocation } from '../types/point-location';

type MapProps = {
  city: City;
  points: PointLocation[];
  selectedPoint?: PointLocation;
}

function Map({city, points, selectedPoint}: MapProps): JSX.Element {

  const mapRef = React.useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          })
          .addTo(map);
      });
      if (selectedPoint) {
        map.setView({
          lat: selectedPoint.latitude,
          lng: selectedPoint.latitude
        }, selectedPoint.zoom);
      }
    }

  }, [map, points, selectedPoint]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
