import "./singlepage.scss";
import Slider from "../../components/slider/slider";
import Properties from "../../lib/properties";

function SinglePage(){
    return(
        <div className="singlePage">
            <div className="details">
                <div className="wrapper">
                    {Properties.map(property=>(
                        <Slider images={property.images}/>
                    ))}
                    <div className="info">
                        <div className="top">
                            <div className="postInfo">
                                
                            </div>
                        </div>
                        <div className="bottom"></div>
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