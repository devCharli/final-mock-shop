import "./auth.css";
import { Link } from "react-router-dom";

const UserMenu = ({ setIsLoggedIn, setShowMyPage }) => {
  const email = localStorage.getItem("email");
  let id = email.match(/\w+/)[0];

  return (
    <div className="user-menu">
      <h3>Welcome back {id}</h3>
      <Link
        to="/profile"
        onClick={() => setShowMyPage(false)}
        className="user-menu-link"
      >
        My Account
      </Link>
      <Link
        to="/"
        className="user-menu-link"
        onClick={() => {
          setIsLoggedIn(false);
          setShowMyPage(false);
          localStorage.setItem("login", false);
          localStorage.clear();
        }}
      >
        SIGN OUT
      </Link>
    </div>
  );
};

export default UserMenu;
