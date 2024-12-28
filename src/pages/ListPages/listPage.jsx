import "./listPage.scss";
import Properties from "../../lib/properties";
import Filter from "../../components/filter/filter";
import Card from "../../components/card/card";
import Map from "../../components/map/map";
import { useEffect, useState } from "react";

function ListPage(){
    const [savedProperties, setSavedProperties] = useState(() => {
        const saved = localStorage.getItem("savedProperties");
        return saved ? JSON.parse(saved) : [];
    });
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
                    <Filter />
                    {Properties.map(property=>(
                        <Card key={property.id} property={property} onSave={handleSaveProperty}/>
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