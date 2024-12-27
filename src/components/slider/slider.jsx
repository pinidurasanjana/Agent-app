import "./slider.scss";
import {useState} from "react";

function Slider({images}){
    const[imageIndex, setImageIndex] = useState(null);
    return(
        <div className="slider">
            {imageIndex !== null && (<div className="fullSlider">
                <div className="arrow">
                    <img src="./arrow.png" alt="arrow"/>
                </div>

                <div className="imgContainer">
                    <img src={images[0]} alt="imgContainer"/>
                </div>

                <div className="arrow">
                    <img src="./arrow.png" className="right" alt="arrow"/>
                </div>
                <div className="close">X</div>
            </div>)}
            <div className="bigImg">
                <img src={images[0]} alt="bigImg" onClick={()=>setImageIndex(0)}/>
            </div>
            <div className="smallImg">
                {images.slice(1).map((image, index) => (
                    <img key={index} src={image} alt="smallImg"/>
                ))}
            </div>
        </div>
    );

}
export default Slider;