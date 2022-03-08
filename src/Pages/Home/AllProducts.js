import "./allItems.css";
import useFetch from "../../Hook/useFetch";
import Product from "./Product";

const AllProducts = () => {
  const {
    data: products,
    isPending,
    error,
  } = useFetch(`https://fakestoreapi.com/products/`);

  return (
    <>
      <h1 className="all-items">All Items</h1>
      <Product products={products} isPending={isPending} error={error} />
    </>
  );
};

export default AllProducts;
