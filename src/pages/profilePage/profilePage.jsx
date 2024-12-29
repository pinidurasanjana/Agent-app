
import "./profilePage.scss";
import Properties from "../../lib/properties";
import Card from "../../components/card/card";
import { useEffect, useState } from "react";

function ProfilePage() {
    
    const [savedProperties, setSavedProperties] = useState(() => {
        const saved = localStorage.getItem("savedProperties");
        return saved ? JSON.parse(saved) : [];
    });

    const handleSaveProperty = (property) => {
        // Avoid duplicate entries
        if (!savedProperties.some((saved) => saved.id === property.id)) {
            const updatedSavedProperties = [...savedProperties, property];
            setSavedProperties(updatedSavedProperties);
            localStorage.setItem("savedProperties", JSON.stringify(updatedSavedProperties));
        }
    };

    const clearSavedProperties = () => {
        setSavedProperties([]);
        localStorage.removeItem("savedProperties");
    };

    useEffect(() => {
        // Synchronize with local storage
        const saved = localStorage.getItem("savedProperties");
        if (saved) {
            setSavedProperties(JSON.parse(saved));
        }
    }, []);
  return (
    <div className="profilePage">
        <div className="details">
            <div className="wrapper">
                <div className="list">
                    <h1>My List</h1>
                    <div className="wrapper">
                        {Properties.map(property=>(
                            <Card key={property.id} property={property} onSave={handleSaveProperty}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="save">
            <div className="wrapper">
                <h1>Saved Items</h1>
                <button className="edit" onClick={clearSavedProperties}>Clear Saved Items</button> 
            </div>
            <div className="list">
                    {savedProperties.map((property) => (
                        <Card key={property.id} property={property} />
                    ))}
            </div>
        </div>
    </div>
  );
}
export default ProfilePage;