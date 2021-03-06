import { Link } from "react-router-dom";
import { CategoryItemImage } from "../../styles";

const CategoryItem = (props) => {
  const category = props.category;
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/categories/${category.slug}`}>
        <CategoryItemImage
          class="img-rounded"
          src={category.image}
          alt={category.name}
        />
      </Link>
      <p>{category.name}</p>
    </div>
  );
};
export default CategoryItem;
