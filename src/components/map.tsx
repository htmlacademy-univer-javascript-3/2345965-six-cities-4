import { useEffect, useRef } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../hooks/use-map';
import { City } from '../types/city';
import 'leaflet/dist/leaflet.css';
import { Offer } from '../types/offer';
import { DetailedOffer } from '../types/detailed-offer';

type MapProps = {
  city: City;
  points: Offer[];
  selectedPoint: Offer | DetailedOffer | null;
}

function Map({city, points, selectedPoint}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markersRef = useRef<Marker[]>([]);

  useEffect(() => {
    if (map) {
      markersRef.current.forEach((marker) => map.removeLayer(marker));
      markersRef.current = [];

      const defaultIcon = new Icon({
        iconUrl: 'img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      const activeIcon = new Icon({
        iconUrl: 'img/pin-active.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      points
        .filter((point) => point !== selectedPoint)
        .forEach((point) => {
          const marker = new Marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {icon: defaultIcon}).addTo(map);
          markersRef.current.push(marker);
        });

      if (selectedPoint) {
        const selectedMarker = new Marker({
          lat: selectedPoint.location.latitude,
          lng: selectedPoint.location.longitude,
        }, {icon: activeIcon}).addTo(map);
        markersRef.current.push(selectedMarker);
        map.setView({
          lat: selectedPoint.location.latitude,
          lng: selectedPoint.location.longitude
        }, selectedPoint.location.zoom);
      }
    }

  }, [map, points, selectedPoint]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
