import "./auth.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ItemContext } from "../../ContextProvider/ContextProvider";

const UserMenu = ({ setIsLoggedIn, setShowMyPage }) => {
  const email = localStorage.getItem("email");
  // const id = email.match(/\w+/)[0];
  const { setOrder } = useContext(ItemContext);
  return (
    <div className="user-menu">
      {email && <h3>Hello, {email.match(/\w+/)[0]}!</h3>}
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
          localStorage.clear();
          localStorage.setItem("login", false);
          setOrder([]);
        }}
      >
        SIGN OUT
      </Link>
    </div>
  );
};

export default UserMenu;
