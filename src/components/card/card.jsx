import "./card.scss";
import { Link } from "react-router-dom";

function Card({property}){
    return(
        <div className="card">
            <Link to={`/${property.id}`} className="imgContainer">
                <img src={property.picture} alt={property.title}/>
            </Link>
            <div className="textContainer"></div>
        </div>
    )
}
export default Card;