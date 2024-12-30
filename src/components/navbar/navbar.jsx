import "./navbar.scss";
import {useState} from "react";
import { Link } from "react-router-dom";

function Navbar(){
    const [open,setOpen] = useState(false);

   return (
    <nav>
        <div className="left">
                <Link to="/" className="logo">
                    <img src="/logo.png" alt="Logo" />
                    <span>Propify</span>
                </Link>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            
        </div>
        <div className="right">
            <a href="./profile" className="register">Profile</a>            

            <div className="menuIcon">
                <img src="/menu.png" alt="" onClick={() => setOpen((prev) => !prev)}/>
            </div>

            <div className={open ? "menuList active" : "menuList"}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/profile">Profile</Link>
            </div>
        </div>
    </nav>
   );
}
export default Navbar;