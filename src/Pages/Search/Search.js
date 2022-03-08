import { useParams } from "react-router";
import { useContext } from "react";
import { ItemContext } from "../../ContextProvider/ContextProvider";
import Product from "../Home/Product";

const Search = () => {
  const { id } = useParams();

  const { data: products, isPending, error } = useContext(ItemContext);

  const item = products.filter((product) =>
    product.title.toUpperCase().includes(id.toUpperCase())
  );

  return (
    <>
      <h3 className="search-result">
        Results for "{id.charAt(0).toUpperCase() + id.slice(1)}"
      </h3>

      {products && (
        <Product products={item} error={error} isPending={isPending} />
      )}
    </>
  );
};

export default Search;
