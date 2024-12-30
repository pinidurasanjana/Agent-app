import { Link } from "react-router-dom";
import "./bar.scss";
import { useState } from "react";

const tenures = ["Freehold", "Leasehold"]; //Array of types

function Bar() {

  const [query,setQuery] = useState({
    tenure: 'Freehold',
    location: '',
  }); // State for the search query
  
  const switchType = (val) =>{
    setQuery(prev => ({...prev, tenure: val}))
  }; // Function to switch between buy and rent

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setQuery(prev => ({...prev, [name]: value}))
  }

  return (
    <div className="searchbar">
      <div className="type">
        {tenures.map((tenure)=>(
          <button key={tenure} onClick={()=>switchType(tenure)} 
            className={query.tenure === tenure ? "active" : ""}
          >
            {tenure}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name='location' placeholder='Location' onChange={handleChange}/>
        <button>
          <Link to={`./list?tenure=${query.tenure}&location=${query.location}`}>
            <img src="./search.png" alt="search" />
          </Link>
        </button>
      </form>
    </div>
  );
}
export default Bar;