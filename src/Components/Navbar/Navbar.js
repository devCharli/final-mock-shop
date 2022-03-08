import "./navbar.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import {
  FaSearch,
  FaRegHeart,
  FaRegUser,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";
import SearchBar from "../Navbar/SearchParams";
import Favorite from "../Navbar/Favorite";
import Categories from "../Category/Categories";
import UserMenu from "../../Pages/Auth/UserMenu";
import { ItemContext } from "../../ContextProvider/ContextProvider";

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showMyPage, setShowMyPage] = useState(false);
  const [showFavorite, setShowFavorite] = useState(false);
  const history = useHistory();
  const { isLoggedIn, setIsLoggedIn } = useContext(ItemContext);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link
            to="/"
            className="title"
            onClick={() => {
              setShowSearchBar(false);
              setShowFavorite(false);
            }}
          >
            SHOP
          </Link>
        </div>
        <div className="navbar-right">
          <FaSearch
            className="navbar-icon"
            onClick={() => {
              setShowSearchBar(!showSearchBar);
              setShowFavorite(false);
              setShowMyPage(false);
            }}
          />
          <FaRegHeart
            className="navbar-icon"
            onClick={() => {
              setShowFavorite(!showFavorite);
              setShowSearchBar(false);
              setShowMyPage(false);
            }}
          />
          {isLoggedIn ? (
            <>
              <FaShoppingCart
                className="navbar-icon"
                onClick={() => {
                  history.push("/cart");
                  setShowSearchBar(false);
                  setShowFavorite(false);
                  setShowMyPage(false);
                }}
              />
              <FaUser
                className="navbar-icon"
                onClick={() => {
                  setShowMyPage(!showMyPage);
                  setShowSearchBar(false);
                  setShowFavorite(false);
                }}
              />
            </>
          ) : (
            <FaRegUser
              className="navbar-icon"
              onClick={() => {
                history.push("/login");
                setShowSearchBar(false);
                setShowFavorite(false);
              }}
            />
          )}
        </div>
      </nav>
      <div>{showSearchBar ? <SearchBar /> : null}</div>
      <div>
        {showMyPage ? (
          <UserMenu
            setIsLoggedIn={setIsLoggedIn}
            setShowMyPage={setShowMyPage}
          />
        ) : null}
        {showFavorite ? <Favorite setShowFavorite={setShowFavorite} /> : null}
      </div>
      <Categories />
    </>
  );
};

export default Navbar;
