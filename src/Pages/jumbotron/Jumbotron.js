import "./jumbotron.css";
import useFetch from "../../Hook/useFetch";
import { useHistory } from "react-router";
import Loading from "../../imgs/loading/Loading";

const Jumbotron = () => {
  const {
    data: product,
    isPending,
    error,
  } = useFetch("https://fakestoreapi.com/products/7");
  const history = useHistory();
  return (
    <div className="jumbotron">
      {error && <div>{error.message}</div>}
      {isPending && (
        <div>
          <Loading />
        </div>
      )}
      {product && (
        <>
          <img src={product.image} className="jumbo-img" alt="product" />
          <div className="jumbo-description">
            <p>Hot Item</p>
            <h3>{product.title}</h3>
            <button onClick={() => history.push("/products/7")}>
              Check Out
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Jumbotron;
