import { useState } from "react";
import { FaUndoAlt } from "react-icons/fa";
import { useHistory } from "react-router";

const SearchParams = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search/${searchTerm}`);
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        className="search-input"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-btn">Search</button>
      <FaUndoAlt
        className="undo-btn"
        onClick={() => {
          setSearchTerm("");
          history.push("/");
        }}
      />
    </form>
  );
};

export default SearchParams;
