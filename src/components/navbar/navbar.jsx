import "./navbar.scss";
import {useState} from "react";

function Navbar(){
const [open,setOpen] = useState(false);
   return (
    <nav>
        <div className="left">
            <a href="#home" className="logo">
                <img src="/logo.png" alt=""/>
                <span>Propify</span>                
            </a>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            
        </div>
        <div className="right">
            <a href="#login">Login</a>
            <a href="#signup" className="register">Sign Up</a>

            <div className="menuIcon">
                <img src="/menu.png" alt="" onClick={() => setOpen((prev) => !prev)}/>
            </div>

            <div className={open ? "menuList active" : "menuList"}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
                <a href="#login">Login</a>
                <a href="#signup">Sign Up</a>
            </div>
        </div>
    </nav>
   );
}
export default Navbar;