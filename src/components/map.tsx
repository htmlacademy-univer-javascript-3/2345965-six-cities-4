import { useEffect, useRef } from 'react';
import { Marker } from 'leaflet';
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
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markersRef = useRef<Marker[]>([]);

  useEffect(() => {
    if (map) {
      markersRef.current.forEach((marker) => map.removeLayer(marker));
      markersRef.current = [];

      points
        .filter((point) => point !== selectedPoint)
        .forEach((point) => {
          const marker = new Marker({
            lat: point.latitude,
            lng: point.longitude,
          }).addTo(map);
          markersRef.current.push(marker);
        });

      if (selectedPoint) {
        const selectedMarker = new Marker({
          lat: selectedPoint.latitude,
          lng: selectedPoint.longitude,
        }).addTo(map);
        markersRef.current.push(selectedMarker);
        map.setView({
          lat: selectedPoint.latitude,
          lng: selectedPoint.longitude
        }, selectedPoint.zoom);
      }
    }

  }, [map, points, selectedPoint]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
