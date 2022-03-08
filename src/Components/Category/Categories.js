import "./category.css";
import useFetch from "../../Hook/useFetch";
import Category from "./Category";

const Index = () => {
  const {
    data: categories,
    isPending,
    error,
  } = useFetch("https://fakestoreapi.com/products/categories");
  return (
    <section className="category">
      Category
      <ul className="category-list">
        {categories &&
          categories.map((category) => {
            return (
              <Category
                key={category}
                category={category}
                isPending={isPending}
                error={error}
              />
            );
          })}
      </ul>
    </section>
  );
};

export default Index;
