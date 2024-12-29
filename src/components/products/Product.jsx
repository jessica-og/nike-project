
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import './product.css'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div className="products-cnt">
            <div className="product-text head-text">
      <h2>Popular Shoes</h2>
      <p>See all</p>
    </div>
    <div className="products">
      <ul className="product-section">
        <li>
       <i className="wish-icon"> <MdOutlineFavoriteBorder /></i>
         <Link to='/details'  className="product-img">
         <img src="/s1.png" alt="" />
         </Link>
          <div className="product-details">
            <h2>BEST SELLER</h2>
             <p>Nike Jordan</p>
            <span>$302.00</span>
          </div>
          <div className="plus-icon">
            <img src="/plus.png" alt="" />
          </div>
        </li>
        <li>
        <i className="wish-icon"> <MdOutlineFavoriteBorder /></i>
         <div className="product-img">
         <img src="/s1.png" alt="" />
         </div>
          <div className="product-details">
            <h2>BEST SELLER</h2>
             <p>Nike Jordan</p>
            <span>$302.00</span>
          </div>
          <div className="plus-icon">
            <img src="/plus.png" alt="" />
          </div>
        </li>

        <li>
      <i className="wish-icon"> <MdOutlineFavoriteBorder /></i>
         <div className="product-img">
         <img src="/s1.png" alt="" />
         </div>
          <div className="product-details">
            <h2>BEST SELLER</h2>
            <p>Nike Jordan</p>
            <span>$302.00</span>
          </div>
          <div className="plus-icon">
            <img src="/plus.png" alt="" />
          </div>
        </li>
        <li>
      <i className="wish-icon"> <MdOutlineFavoriteBorder /></i>
         <div className="product-img">
         <img src="/s1.png" alt="" />
         </div>
          <div className="product-details">
            <h2>BEST SELLER</h2>
             <p>Nike Jordan</p>
            <span>$302.00</span>
          </div>
          <div className="plus-icon">
            <img src="/plus.png" alt="" />
          </div>
        </li>
        <li>
      <i className="wish-icon"> <MdOutlineFavoriteBorder /></i>
         <div className="product-img">
         <img src="/s1.png" alt="" />
         </div>
          <div className="product-details">
            <h2>BEST SELLER</h2>
             <p>Nike Jordan</p>
            <span>$302.00</span>
          </div>
          <div className="plus-icon">
            <img src="/plus.png" alt="" />
          </div>
        </li>
        <li>
      <i className="wish-icon"> <MdOutlineFavoriteBorder /></i>
         <div className="product-img">
         <img src="/s1.png" alt="" />
         </div>
          <div className="product-details">
            <h2>BEST SELLER</h2>
             <p>Nike Jordan</p>
            <span>$302.00</span>
          </div>
          <div className="plus-icon">
            <img src="/plus.png" alt="" />
          </div>
        </li>
        <li>
      <i className="wish-icon"> <MdOutlineFavoriteBorder /></i>
         <div className="product-img">
         <img src="/s1.png" alt="" />
         </div>
          <div className="product-details">
            <h2>BEST SELLER</h2>
             <p>Nike Jordan</p>
            <span>$302.00</span>
          </div>
          <div className="plus-icon">
            <img src="/plus.png" alt="" />
          </div>
        </li>

      </ul>
    </div>
    </div>
  )
}

export default Product