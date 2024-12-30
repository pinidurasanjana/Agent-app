import "./pin.scss";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function Pin({item}){
    return(
        <Marker position={[item.lat, item.lng]}>
            <Popup>
                <div className="popupContainer">
                    <img src={item.picture} alt=""/>
                    <div className="textContainer">
                        <Link to={`/${item.id}`} className="link">{item.title}</Link>
                        <span>{item.bedrooms} Bedrooms</span>
                        <b>$ {item.price}</b>
                    </div>
                </div>
            </Popup>
        </Marker>
    );
}
export default Pin;