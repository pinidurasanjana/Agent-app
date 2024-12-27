import "./slider.scss";
import {useState} from "react";

function Slider({images}){
    const[imageIndex, setImageIndex] = useState(null);

    const changeSlide = (direction) => {
        if(direction === "left"){
            if(imageIndex === 0){
                setImageIndex(images.length - 1);
            }else{
                setImageIndex(imageIndex - 1);
            }
        }else{
            if(imageIndex === images.length - 1){
                setImageIndex(0);
            }else{
                setImageIndex(imageIndex + 1);
            }
        }
    }

    return(
        <div className="slider">
            {imageIndex !== null && (<div className="fullSlider">
                <div className="arrow" onClick={()=>changeSlide("left")}>
                    <img src="./arrow.png" alt="arrow" />
                </div>

                <div className="imgContainer">
                    <img src={images[imageIndex]} alt="imgContainer"/>
                </div>

                <div className="arrow" onClick={()=>changeSlide("right")}>
                    <img src="./arrow.png" className="right" alt="arrow"/>
                </div>
                <div className="close" onClick={()=>setImageIndex(null)}>X</div>
            </div>)}
            <div className="bigImg">
                <img src={images[0]} alt="bigImg" onClick={()=>setImageIndex(0)}/>
            </div>
            <div className="smallImg">
                {images.slice(1).map((image, index) => (
                    <img key={index} src={image} alt="smallImg" onClick={()=>setImageIndex(index+1)}/>
                ))}
            </div>
        </div>
    );

}
export default Slider;