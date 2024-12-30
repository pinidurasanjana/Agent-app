import { Link } from "react-router-dom";
import "./bar.scss";
import { useState } from "react";

const types =["Buy","Rent"];  //Array of types

function Bar() {

  const [query,setQuery] = useState({
    type: 'Buy',
    location: ''
  }); // State for the search query
  
  const switchType = (val) =>{
    setQuery(prev => ({...prev, type: val}))
  }; // Function to switch between buy and rent

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setQuery(prev => ({...prev, [name]: value}))
  }

  return (
    <div className="searchbar">
      <div className="type">
        {types.map((type)=>(
          <button key={type} onClick={()=>switchType(type)} 
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name='location' placeholder='Location' onChange={handleChange}/>
        <button>
          <Link to={`./list?type=${query.type}&location=${query.location}`}>
            <img src="./search.png" alt="search" />
          </Link>
        </button>
      </form>
    </div>
  );
}
export default Bar;