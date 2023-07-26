import {map as createMap, tileLayer as createTileLayer, icon as createIcon, marker as createMarker} from '../../vendor/leaflet-src.esm';

export const initContactsMap = () => {
  const CONTAINER_SELECTOR = '.contacts__map';
  const COORDINATES = [55.774864, 37.632545];
  const ZOOM = 17;
  const URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const MARKER_TEXT = 'г. Москва, пр-т Мира, д.&nbsp;14, офис 101';
  const ICON_URL = './img/svg/map-icon.svg';
  const ICON_SIZE = [48, 48];

  const mapContainer = document.querySelector(CONTAINER_SELECTOR);
  mapContainer.replaceChildren();

  const map = createMap(mapContainer, {
    center: COORDINATES,
    zoom: ZOOM,
    scrollWheelZoom: false,
    dragging: false,
  });

  const icon = createIcon({
    iconUrl: ICON_URL,
    iconSize: ICON_SIZE,
  });

  createTileLayer(URL).addTo(map);
  createMarker(COORDINATES, {icon}).bindPopup(MARKER_TEXT).addTo(map);
};
