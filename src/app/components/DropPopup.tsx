import {Popup } from 'react-leaflet';
import {PopupProps } from '../types';

const DropPopup = ({ drop }:PopupProps) => (
    <Popup position={[drop.lat, drop.lng]}>
      <div>
        <h2>{drop.name}</h2>
        <p>{drop.date}</p>
        <iframe
          width="300"
          height="200"
          src={`https://www.youtube.com/embed/${drop.media}`}
          title="YouTube Video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Popup>
  );

export default DropPopup