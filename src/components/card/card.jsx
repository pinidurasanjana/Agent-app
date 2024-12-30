import "./card.scss";
import { Link } from "react-router-dom";


function Card({property,onSave}){
    const save = () => {
        if (onSave) {onSave(property)};
    };
    
    return(
        <div className="card">
            <Link to={`/${property.id}`} className="imgContainer">
                <img src={property.picture} alt={property.title}/>
            </Link>
            <div className="textContainer">
                <h2 className="title">
                    <Link to={`/${property.id}`}>{property.title}</Link>
                </h2>
                <p className="location">
                    <img src="/pin.png" alt=""/>
                    <span>{property.location}</span>
                </p>
                <p className="price">$ {property.price}</p>
                <div className="bottom">
                    <div className="feature">
                        <img src="/bed.png" alt=""/>
                        <span>{property.bedrooms} Bedrooms</span>
                    </div>
                    <div className="icon" onClick={save}>
                        <img src="/save.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;