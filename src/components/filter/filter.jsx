import "./filter.scss";
import { useState } from "react";

function Filter({onFilter}){
    
    const [filters, setFilters] = useState({
        city: "",
        type: "",
        minprice: "",
        maxprice: "",
        minbedrooms: "",
        maxbedrooms: "",
        date: "",
        postcode: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const handleSearch = () => {
        onFilter(filters); // Pass filters to the parent
    };

    return(
        <div className="filter">
            <h1>Search results for <b>{filters.city || "All Cities"}</b></h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input 
                        type="text" 
                        id="city" 
                        name="city" 
                        placeholder="Location" 
                        value={filters.city}
                        onChange={handleChange}/>
                </div>
            </div>
            <div className="bottom">
                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type" value={filters.type} onChange={handleChange}>
                        <option value="">All Types</option>
                        <option value="House">House</option>
                        <option value="Flat">Flat</option>
                        <option value="any">Any</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="minprice">Min Price</label>
                    <input 
                        type="number" 
                        id="minprice" 
                        min={0} 
                        name="minprice" 
                        placeholder="Minimum Price"
                        value={filters.minprice} 
                        onChange={handleChange}
                    />
                </div>
                <div className="item">
                    <label htmlFor="maxprice">Max Price</label>
                    <input 
                        type="number" 
                        id="maxprice" 
                        min={0} 
                        name="maxprice" 
                        placeholder="Maximum Price"
                        value={filters.maxprice}
                        onChange={handleChange}
                        />
                </div>
                <div className="item">
                    <label htmlFor="minbedrooms">Min Bedrooms</label>
                    <input 
                        type="number" 
                        id="minbedrooms" 
                        min={0} 
                        name="minbedrooms" 
                        placeholder="Minimum Bedrooms"
                        value={filters.minbedrooms}
                        onChange={handleChange}
                        />
                </div>
                <div className="item">
                    <label htmlFor="maxbedrooms">Max Bedrooms</label>
                    <input 
                        type="number" 
                        id="maxbedrooms" 
                        min={0} 
                        name="maxbedrooms" 
                        placeholder="Maximum Bedrooms"
                        value={filters.maxbedrooms}
                        onChange={handleChange}
                        />
                </div>
            </div>
            
            <div className="bottom">
                <div className="item1">
                    <label htmlFor="date">Date</label>
                    <input 
                        type="date" 
                        id="date" 
                        name="date" 
                        placeholder=""
                        value={filters.date}
                        onChange={handleChange}
                        />
                </div>
                <div className="item1">
                    <label htmlFor="postcode">Postcode Area</label>
                    <input 
                        type="text" 
                        id="postcode" 
                        name="postcode" 
                        placeholder="Postcode"
                        value={filters.postcode}
                        onChange={handleChange}
                        />
                </div>
                <button onClick={handleSearch}>
                    <img src="../search.png" alt="search" />
                </button>
            </div>
        </div>
        
    )
}
export default Filter;