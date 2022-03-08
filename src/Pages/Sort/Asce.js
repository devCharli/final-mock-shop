import { useContext } from "react";
import { ItemContext } from "../../ContextProvider/ContextProvider";
import Product from "../Home/Product";
const Asce = () => {
  const { data: products, isPending, error } = useContext(ItemContext);
  const item = products.sort((a, b) =>
    a.price === b.price ? 0 : a.price > b.price ? 1 : -1
  );
  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {products && <Product products={item} />}
    </>
  );
};

export default Asce;
