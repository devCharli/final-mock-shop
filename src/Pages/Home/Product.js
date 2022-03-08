import { useState, useEffect } from "react";
import Sort from "../../Components/Sort/Sort";
import Loading from "../../imgs/loading/Loading";
import ProductItem from "./ProductItem";

const Product = ({ products, error, isPending }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFav = sessionStorage.getItem("favorites");
    if (savedFav) {
      return JSON.parse(savedFav);
    } else {
      return [];
    }
  });

  useEffect(() => {
    sessionStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="container">
      <Sort />
      <div className="items">
        {error && <div>{error}</div>}
        {isPending && (
          <div>
            <Loading />
          </div>
        )}
        {products &&
          products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              setFavorites={setFavorites}
              favorites={favorites}
            />
          ))}
      </div>
    </div>
  );
};

export default Product;
