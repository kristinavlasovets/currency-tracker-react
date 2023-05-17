import { useEffect, useRef } from 'react';
import { Map, Marker } from 'maplibre-gl';

import MyMarkerIconSvg from '@assets/svg/icons/bankcardPage/marker.svg';
import { envVariables } from '@constants/envVariables';

const { maptilerApiUrl, maptilerApiKey } = envVariables;

export const useMap = (searchCode: string) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map = new Map({
      container: mapContainerRef.current as HTMLDivElement,
      style: `${maptilerApiUrl}/streets/style.json?key=${maptilerApiKey}`,
      center: [27.5589176, 53.8977799],
      zoom: 13,
    });

    const customMarker = document.createElement('div');
    const markerIcon = document.createElement('img');
    markerIcon.src = `${MyMarkerIconSvg}`;
    customMarker.style.width = '38px';
    customMarker.style.height = '50px';
    markerIcon.style.width = '100%';
    markerIcon.style.height = '100%';
    customMarker.style.background = 'transparent';
    markerIcon.style.background = 'transparent';
    customMarker.style.backgroundSize = 'contain';
    customMarker.append(markerIcon);
    customMarker.style.cursor = 'pointer';

    switch (searchCode) {
      case 'BYN':
        new Marker(customMarker, {
          anchor: 'bottom',
          offset: [0, 5],
        })
          .setLngLat([27.5451778, 53.9017282])
          .addTo(map);
        new Marker({
          color: '#185CFF',
        })
          .setLngLat([27.5160956, 53.8962595])
          .addTo(map);
        new Marker({
          color: '#185CFF',
        })
          .setLngLat([27.5595258, 53.9000003])
          .addTo(map);
        break;
      case 'USD':
        new Marker({
          color: '#2eb82e',
        })
          .setLngLat([27.5451778, 53.9017282])
          .addTo(map);
        new Marker({
          color: '#2eb82e',
        })
          .setLngLat([27.5160956, 53.8962595])
          .addTo(map);
        new Marker({
          color: '#2eb82e',
        })
          .setLngLat([27.5595258, 53.9000003])
          .addTo(map);

        break;
      case 'ARS':
        new Marker({
          color: '#ff6600',
        })
          .setLngLat([27.5318751, 53.8907369])
          .addTo(map);
        new Marker({
          color: '#ff6600',
        })
          .setLngLat([27.5451778, 53.9017282])
          .addTo(map);
        new Marker({
          color: '#ff6600',
        })
          .setLngLat([27.5160956, 53.8962595])
          .addTo(map);

        break;
      case 'AUD':
        new Marker({
          color: '#7733ff',
        })
          .setLngLat([27.5318751, 53.8907369])
          .addTo(map);
        new Marker({
          color: '#7733ff',
        })
          .setLngLat([27.5451778, 53.9017282])
          .addTo(map);
        new Marker({
          color: '#7733ff',
        })
          .setLngLat([27.5160956, 53.8962595])
          .addTo(map);

        break;
      case 'JPY':
        new Marker({
          color: '#ff3300',
        })
          .setLngLat([27.5595258, 53.9000003])
          .addTo(map);

        break;
      case 'CAD':
        new Marker({
          color: '#800040',
        })
          .setLngLat([27.5451778, 53.9017282])
          .addTo(map);
        new Marker({
          color: '#800040',
        })
          .setLngLat([27.5160956, 53.8962595])
          .addTo(map);
        new Marker({
          color: '#800040',
        })
          .setLngLat([27.5595258, 53.9000003])
          .addTo(map);

        break;
      case 'CNY':
        new Marker({
          color: '#cc9900',
        })
          .setLngLat([27.5160956, 53.8962595])
          .addTo(map);

        break;
      case 'EUR':
        new Marker({
          color: '#2eb82e',
        })
          .setLngLat([27.5451778, 53.9017282])
          .addTo(map);
        new Marker({
          color: '#2eb82e',
        })
          .setLngLat([27.5160956, 53.8962595])
          .addTo(map);
        new Marker({
          color: '#2eb82e',
        })
          .setLngLat([27.5595258, 53.9000003])
          .addTo(map);

        break;
      default:
        null;
    }

    return () => {
      map.remove();
    };
  }, [searchCode]);

  return mapContainerRef;
};
