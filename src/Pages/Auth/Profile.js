import "./auth.css";
import profile1 from "../../imgs/profile1.svg";
import { useContext } from "react";
import { ItemContext } from "../../ContextProvider/ContextProvider";

const Profile = () => {
  const { order } = useContext(ItemContext);
  const info = JSON.parse(localStorage.getItem("info"));
  const email = localStorage.getItem("email");
  let id = email.match(/\w+/)[0];
  return (
    <div className="container">
      <div className="profile-section">
        <img src={profile1} className="profile-photo" alt="profile" />
        <h2>'{id}'s Order History</h2>
        <div>
          <h3>Information</h3>
          <p>Name: {info.name}</p>
          <p>Address: {info.address}</p>
          <h3>Ordered Item</h3>
          <ul className="ordered-item">
            {order &&
              order.map((item) => {
                return <li key={item.id}>{item.title}</li>;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
