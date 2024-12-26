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
        <input type="text" name='location' placeholder='City Location' />
        <input type="number" name='minprice' min={0} placeholder='Minimum Price' />
        <input type="number" name='maxprice' min={0} placeholder='Maximum Price' />
        <button>
          <img src="./search.png" alt="search" />
        </button>
      </form>
    </div>
  );
}
export default Bar;