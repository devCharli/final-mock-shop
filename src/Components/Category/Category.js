import { Link } from "react-router-dom";

const Category = ({ category, isPending, error }) => {
  return (
    <>
      {error && <div>{error.message}</div>}
      {isPending && <div>Loading...</div>}
      {category && (
        <Link to={`/products/category/${category}`}>
          <li className="category-item">{category}</li>
        </Link>
      )}
    </>
  );
};

export default Category;
