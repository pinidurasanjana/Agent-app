import "./map.scss";
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import Pin from "../Pin/pin";

function Map({items}){
    return(
    <MapContainer center={[52.4984659, -1.9263812]} zoom={6} scrollWheelZoom={true} className="map">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map(item=>(
        <Pin item={item} key={item.id}/>
    ))}
    
  </MapContainer>
    );
}
export default Map;