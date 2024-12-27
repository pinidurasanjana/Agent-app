import "./filter.scss";

function Filter(){
    return(
        <div className="filter">
            <h1>Search results for <b>London</b></h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input type="text" id="city" name="city" placeholder="Location"/>
                </div>
            </div>
            <div className="bottom">
                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="house">House</option>
                        <option value="flat">Flat</option>
                        <option value="any">Any</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="minprice">Min Price</label>
                    <input type="number" id="minprice" min={0} name="minprice" placeholder="Minimum Price"/>
                </div>
                <div className="item">
                    <label htmlFor="maxprice">Max Price</label>
                    <input type="number" id="maxprice" min={0} name="maxprice" placeholder="Maximum Price"/>
                </div>
                <div className="item">
                    <label htmlFor="minbedrooms">Min Bedrooms</label>
                    <input type="number" id="minbedrooms" min={0} name="minbedrooms" placeholder="Minimum Bedrooms"/>
                </div>
                <div className="item">
                    <label htmlFor="maxbedrooms">Max Bedrooms</label>
                    <input type="number" id="maxbedrooms" min={0} name="maxbedrooms" placeholder="Maximum Bedrooms"/>
                </div>
                <div className="item">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="date" placeholder=""/>
                </div>
                <div className="item">
                    <label htmlFor="postcode">Postcode Area</label>
                    <input type="number" id="postcode" min={0} name="postcode" placeholder="Postcode"/>
                </div>
                <button>
                    <img src="./search.png" alt="search" />
                </button>
            </div>
        </div>
        
    )
}
export default Filter;