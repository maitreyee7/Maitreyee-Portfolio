
import React from 'react';
import { MapContainer,Marker,TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import './map.scss';

const position = [28.4595, 77.0266]
        
function Map({items}) {
  return (
  <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="map">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      
    </Marker>
  </MapContainer>
);
  }

export default Map;



