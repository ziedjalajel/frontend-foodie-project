import { Link } from "react-router-dom";
import { CategoryItemImage } from "../../styles";

const CategoryItem = (props) => {
  const category = props.category;
  return (
    <div>
      <Link to={`/categories/${category.slug}`}>
        <CategoryItemImage src={category.image} alt={category.name} />
      </Link>
      <p>{category.name}</p>
    </div>
  );
};
export default CategoryItem;
