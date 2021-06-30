import { useSelector } from "react-redux";
import { useState } from "react";
import CategoryItem from "../categories/CategoryItem";
import SearchBar from "../SearchBar";
import { ListWrapperCategory, Center } from "../../styles";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const categories = useSelector((state) => state.categories.categories);
  const [query, setQuery] = useState("");
  const categoryList = categories
    .filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((category) => <CategoryItem category={category} key={category.id} />);

  return (
    <div className="container">
      <div>
        <SearchBar setQuery={setQuery} />
        <ListWrapperCategory className="row">
          {categoryList}
        </ListWrapperCategory>
      </div>
      <Center>
        <Link to={"/categories/new"}>
          <button
            style={{ marginTop: "150px" }}
            type="button"
            class="btn btn-light"
          >
            Add Category
          </button>
        </Link>
      </Center>
    </div>
  );
};
export default CategoryList;
