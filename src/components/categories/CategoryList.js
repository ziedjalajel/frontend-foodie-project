import { useSelector } from "react-redux";
import { useState } from "react";
import CategoryItem from "../categories/CategoryItem";
import SearchBar from "../SearchBar";
import { ListWrapperCategory } from "../../styles";

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
      <SearchBar setQuery={setQuery} />
      <ListWrapperCategory className="row">{categoryList}</ListWrapperCategory>
    </div>
  );
};
export default CategoryList;
