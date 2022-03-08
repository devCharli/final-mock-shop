import { useHistory } from "react-router";

const Favorite = ({ setShowFavorite }) => {
  const savedFav = JSON.parse(sessionStorage.getItem("favorites"));
  const history = useHistory();
  const handleClick = (item) => {
    history.push(`/products/${item.id}`);
    setShowFavorite(false);
  };
  return (
    <div className="user-menu">
      <ul>
        {savedFav.map((item) => {
          return (
            <li
              className="favorite-list"
              key={item.title}
              onClick={() => handleClick(item)}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favorite;
