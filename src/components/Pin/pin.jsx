import "./pin.scss";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";


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