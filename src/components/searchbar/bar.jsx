import { Link } from "react-router-dom";
import "./bar.scss";
import { useState } from "react";


const types =["Buy","Rent"];  //Array of types

function Bar() {

  const [query,setQuery] = useState({
    type: 'Buy',
    location: '',
    minprice: 0,
    maxprice: 0
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
        <input type="text" name='location' placeholder='City Location' onChange={handleChange}/>
        <input type="number" name='minprice' min={0} placeholder='Minimum Price' onChange={handleChange}/>
        <input type="number" name='maxprice' min={0} placeholder='Maximum Price' onChange={handleChange}/>
        <button>
          <Link to={`./list?type=${query.type}&location=${query.location}&minprice=${query.minprice}&maxprice=${query.maxprice}`}>
            <img src="./search.png" alt="search" />
          </Link>
        </button>
      </form>
    </div>
  );
}
export default Bar;