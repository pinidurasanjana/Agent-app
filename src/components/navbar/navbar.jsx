import "./navbar.scss";

function Navbar(){
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
        </div>
    </nav>
   ) 
}
export default Navbar;