import "./singlepage.scss";
import Slider from "../../components/slider/slider";
import properties from "../../lib/properties";
import { useParams } from "react-router-dom";

function SinglePage(){
    const { id } = useParams();
    const property = properties.find((property) => property.id === id);

    return(
        <div className="singlePage">
            <div className="details">
                <div className="wrapper">
                    <Slider images={property.images}/>
                    <div className="info">
                        <div className="post">
                            <h1>{property.title}</h1>
                            <div className="address">
                                <img src="/pin.png" alt=""/>
                                <span>{property.location}</span>
                            </div>
                            <div className="price">
                                <span>$ {property.price}</span>
                            </div>
                            <div className="description">
                                <p>{property.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="wrapper"></div>
            </div>
        </div>
    );

};
export default SinglePage;