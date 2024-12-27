import "./singlepage.scss";
import Slider from "../../components/slider/slider";
import properties from "../../lib/properties";
import { useParams } from "react-router-dom";
import Map from "../../components/map/map";

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
                <div className="wrapper">
                    <p className="title">General</p>
                    <div className="general">
                        <div className="item">
                            <img src="/size.png" alt=""/>
                            <span>{property.size} sq ft</span>
                        </div>
                        <div className="item">
                            <img src="/bed.png" alt=""/>
                            <span>{property.bedrooms} Bedrooms</span>
                        </div>
                    </div>
                    <p className="title">Location</p>
                    <div className="mapContainer">
                        <Map items={properties}/>
                    </div>
                    <button>
                        <img src="/save.png" alt=""/>
                        Save the Place
                    </button>
                </div>
            </div>
        </div>
    );

};
export default SinglePage;