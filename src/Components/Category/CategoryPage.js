import { useParams } from "react-router-dom";
import Product from "../../Pages/Home/Product";
import useFetch from "../../Hook/useFetch";

const CategoryPage = () => {
  const { id } = useParams();
  const {
    data: products,
    isPending,
    error,
  } = useFetch(`https://fakestoreapi.com/products/category/${id}`);

  return <Product products={products} isPending={isPending} error={error} />;
};

export default CategoryPage;
