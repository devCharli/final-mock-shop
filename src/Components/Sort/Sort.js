import { useHistory } from "react-router";

const Sort = () => {
  const history = useHistory();
  const handleChange = (e) => {
    if (e.target.value === "asce") {
      history.push("/sort/asce");
    } else if (e.target.value === "desc") {
      history.push("/sort/desc");
    }
  };
  return (
    <select onChange={handleChange} className="sort">
      <option>Sort by</option>
      <option value="asce">Price (low-high)</option>
      <option value="desc">Price (high-low)</option>
    </select>
  );
};

export default Sort;
