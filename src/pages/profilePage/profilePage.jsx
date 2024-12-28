
import "./profilePage.scss";
import Properties from "../../lib/properties";
import Card from "../../components/card/card";

function ProfilePage() {
  return (
    <div className="profilePage">
        <div className="details">
            <div className="wrapper">
                <div className="list">
                    <h1>My List</h1>
                    <div className="wrapper">
                        {Properties.map(property=>(
                            <Card key={property.id} property={property}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="save">
            <div className="wrapper">
                <h1>Saved Items</h1>
                <button className="edit">Edit Profile</button>
                <div className="list">
                    
                </div>
            </div>
        </div>
    </div>
  );
}
export default ProfilePage;