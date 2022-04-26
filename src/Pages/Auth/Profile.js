import "./auth.css";
import profile1 from "../../imgs/profile2.svg";
import { useContext } from "react";
import { ItemContext } from "../../ContextProvider/ContextProvider";

const Profile = () => {
  const { order } = useContext(ItemContext);
  const info = JSON.parse(localStorage.getItem("info"));
  const email = localStorage.getItem("email");
  let name = email.match(/\w+/)[0];
  return (
    <div className="container">
      <div className="profile-section">
        <img src={profile1} className="profile-photo" alt="profile" />
        <h2>Hi, {name} </h2>
        <div>
          <ul className="ordered-item">
            {order &&
              order.map((item) => {
                return <li key={item.id}>{item.title}</li>;
              })}
          </ul>
          {info && (
            <p>
              Your orders will be Shipped to "{info.address}" soon, {info.name}!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
