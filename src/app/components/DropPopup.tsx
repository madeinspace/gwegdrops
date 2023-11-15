import {Popup } from 'react-leaflet';
import { Drop } from '../types';

const DropPopup = ({ drop }:{drop:Drop}) => (
    <Popup position={[drop.lat, drop.lng]}>
      <div>
        <h2>{drop.name}</h2>
        <p>{drop.date.toLocaleDateString()}</p>
        <iframe
          width="300"
          height="200"
          src={`https://www.youtube.com/embed/${drop.media}`}
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Popup>
  );

export default DropPopup