import "./listPage.scss";
import Properties from "../../lib/properties";
import Filter from "../../components/filter/filter";
import Card from "../../components/card/card";
import Map from "../../components/map/map";

function ListPage(){
    return(
        <div className="listPage">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter />
                    {Properties.map(property=>(
                        <Card key={property.id} property={property}/>
                    ))}
                </div>
            </div>   
            <div className="mapContainer">
                <Map items={Properties}/>
            </div>
        </div>
    )

}
export default ListPage;