import { MdOutlineFavoriteBorder } from "react-icons/md";
import "./product.css";
import { Link } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import PropTypes from "prop-types";

const Product = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="products-cnt">
      <div className="product-text head-text">
        <h2>Popular Shoes</h2>
        <p>See all</p>
      </div>
      <div className="products">
        <ul className="product-section">
          {products.map((product) => (
            <li key={product.id}>
              <i className="wish-icon">
                <MdOutlineFavoriteBorder />
              </i>
              <Link to={`/details/${product.id}`} className="product-img">
                <img src={product.imageUrl} alt={product.name} />
              </Link>
              <div className="product-details">
                <h2 >{product.sellerRank}</h2>
                <p>{product.name}</p>
                <span>${product.price.toFixed(2)}</span>
              </div>
              <div className="plus-icon">
                <img src="/plus.png" alt="Add to cart" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
Product.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      sellerRank: PropTypes.string,
      imageUrl: PropTypes.string.isRequired,
    })
  ),
};

export default Product;
