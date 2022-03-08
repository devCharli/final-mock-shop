import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function ProductItem({ product, setFavorites, favorites }) {
  const [heartClicked, setHeartClicked] = useState(false);

  return (
    <div className="item">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt="product" />
      </Link>
      <div className="item-exclusive">
        <p>online exclusive</p>
        {heartClicked ? (
          <FaHeart className="item-heart-fill" />
        ) : (
          <FaRegHeart
            className="item-heart"
            onClick={() => {
              setFavorites([...favorites, product]);
              setHeartClicked(true);
            }}
          />
        )}
      </div>
      <hr />
      <Link to={`/products/${product.id}`} key={product.id}>
        <div className="item-info">
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
