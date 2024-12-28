import ListPage from "../ListPages/listPage";
import "./profilePage.scss";
import Properties from "../../lib/properties";
import Card from "../../components/card/card";

function ProfilePage() {
  return (
    <div className="profilePage">
        <div className="details">
            <div className="wrapper">
                <div className="title">
                    <h1>User Information</h1>
                    <button className="edit">Edit Profile</button>
                </div>
                <div className="info">
                    <div className="avator">
                        <span>Avator: </span><img src="./user.png" />
                    </div>
                    <span>User Name: <b>John Doe</b></span>
                    <span>E-mail: <b>abc@gmail.com</b></span>
                </div>
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
            </div>
        </div>
    </div>
  );
}
export default ProfilePage;