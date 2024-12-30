import "./listPage.scss";
import Properties from "../../lib/properties";
import Filter from "../../components/filter/filter";
import Card from "../../components/card/card";
import Map from "../../components/map/map";
import { useEffect, useState } from "react";

function ListPage(){
    const [filteredProperties, setFilteredProperties] = useState(Properties);
    const [savedProperties, setSavedProperties] = useState(() => {
        const saved = localStorage.getItem("savedProperties");
        return saved ? JSON.parse(saved) : [];
    });
    

    const handleFilter = (filters) => {
        const results = Properties.filter((property) => {

            const city = property.location.split(",")[1]?.trim();
            const extractedPostcode = property.location.split(" ").pop();
            const propertyDate = new Date(`${property.added.year}-${property.added.month}-${property.added.day}`);
            
            return (
                (filters.city === "" || city?.toLowerCase().includes(filters.city.toLowerCase())) &&
                (filters.type === "" || 
                    (filters.type === "any" && property.type === "Any") || 
                    (filters.type !== "any" && property.type.toLowerCase() === filters.type.toLowerCase())) &&
                (filters.minprice === "" || property.price >= Number(filters.minprice)) &&
                (filters.maxprice === "" || property.price <= Number(filters.maxprice)) &&
                (filters.minbedrooms === "" || property.bedrooms >= Number(filters.minbedrooms)) &&
                (filters.maxbedrooms === "" || property.bedrooms <= Number(filters.maxbedrooms)) &&
                (filters.date === "" || propertyDate >= new Date(filters.date)) &&
                (filters.postcode === "" || extractedPostcode.toLowerCase() === filters.postcode.toLowerCase())
            );
        });
        setFilteredProperties(results);
    };

     const handleSaveProperty = (property) => {
        if (!savedProperties.some((saved) => saved.id === property.id)) {
            const updatedSavedProperties = [...savedProperties, property];
            setSavedProperties(updatedSavedProperties);
            localStorage.setItem("savedProperties", JSON.stringify(updatedSavedProperties));
        }
    };

    useEffect(() => {
        const saved = localStorage.getItem("savedProperties");
        if (saved) {
            setSavedProperties(JSON.parse(saved));
        }
    }, []);


    return(
        <div className="listPage">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter onFilter={handleFilter}/>
                    {filteredProperties.map((property)=>(
                        <Card key={property.id} property={property} onSave={handleSaveProperty}/>
                    ))}
                </div>
            </div>   
            <div className="mapContainer">
                <Map items={filteredProperties}/>
            </div>
        </div>
    )
}
export default ListPage;