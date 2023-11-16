
import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { FitBoundsOptions, LatLngExpression, LatLngBoundsExpression } from 'leaflet';
import DropPopup from './DropPopup';
import L from 'leaflet';
import { MapProps, MarkerProps } from '../types';

function SetBoundsRectangles({bounds}: {bounds: L.LatLngBoundsExpression}) {
  const fitBoundsOptions: FitBoundsOptions = {
    paddingTopLeft: [100, 100],
    paddingBottomRight: [100, 100],
  };
  const map = useMap()
  map.fitBounds(bounds, fitBoundsOptions)
  return null
}

const CustomTileLayer = () =>  
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

const DropMarker = ({drop}: MarkerProps) => 
  <Marker key={drop.id} position={[drop.lat, drop.lng]}>
    <DropPopup drop={drop} />
  </Marker>

const DropMarkers = ({drops}: MapProps) => drops.map(drop => <DropMarker key={drop.id} drop={drop}/> )


export default function Map({drops}: MapProps) {

  if (!drops.length) {
    // If empty, return null or any other placeholder content
    return null;
  }

  const bounds: LatLngBoundsExpression = L.latLngBounds(drops.map(drop => [drop.lat, drop.lng]));

  return (
    <MapContainer zoom={7} style={{ height: '100vh' }} >
      <SetBoundsRectangles bounds={bounds}/>
      <CustomTileLayer />
      <DropMarkers drops={drops}/>
    </MapContainer>)
  
}

