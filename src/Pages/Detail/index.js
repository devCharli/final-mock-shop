import "./detail.css";
import { useContext } from "react";
import { useHistory, useParams } from "react-router";
import { FaArrowCircleLeft } from "react-icons/fa";
import { ItemContext } from "../../ContextProvider/ContextProvider";
import useFetch from "../../Hook/useFetch";
import Loading from "../../imgs/loading/Loading";

const Detail = () => {
  const { isLoggedIn, cart, setCart } = useContext(ItemContext);
  const { id } = useParams();
  const {
    data: product,
    isPending,
    error,
  } = useFetch(`https://fakestoreapi.com/products/${id}`);

  const history = useHistory();

  const handleClick = () => {
    if (isLoggedIn) {
      history.push("/cart");
      const found = cart.find((item) => item.id === product.id);

      if (!found) {
        setCart((curr) => [...curr, { ...product, count: 1 }]);
      } else {
        let copy = [...cart];
        let updated = copy.find((item) => item.id === found.id);
        let index = copy.indexOf(updated);
        copy[index] = { ...copy[index], count: copy[index].count++ };
        return copy;
      }
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="detail-page">
      {error && <div>{error.message}</div>}
      {isPending && (
        <div>
          <Loading />
        </div>
      )}
      {product && (
        <div>
          <FaArrowCircleLeft
            className="navbar-icon"
            onClick={() => history.goBack()}
          >
            Go back
          </FaArrowCircleLeft>
          <div className="product-info">
            <img src={product.image} alt="product" />
            <div className="product-description item-info">
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <span className="product-detail-description">
                {product.description}
              </span>
              <button className="detail-order-btn" onClick={handleClick}>
                ADD TO BAG
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
