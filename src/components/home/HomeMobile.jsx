import { FaBagShopping } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <img src="/menu.png" alt="" />
        <div className="top-text">
          <img src="/m1.png" alt="" />
          <h2>Explore</h2>
        </div>
        <FaBagShopping />
      </div>

<div className="search-container">
<form >
  <img src="/search.png" alt="" />
  <input type="search"  name="search"/>
   Looking for shoes
</form>
<Link to='/search'>
<img src="/search2.png" alt="" />
</Link>
</div>

<div className="categories">
  <h5>Select Category</h5>
  <button> All Shoes</button>
  <button> OutDoor</button>
  <button> Clothings</button>
  <button>Tennis </button>
  <button>Electronics</button>
  <button>Toys</button>
</div>

  <div className="products-container">
    <div className="product-text">
      <h2>Popular Shoes</h2>
      <p>See all</p>
    </div>
    <div className="products">
      <ul className="product-section">
        <li>
       <span> <MdOutlineFavoriteBorder /></span>
         <div className="product-img">
         <img src="/s1.png" alt="" />
         </div>
          <div className="product-details">
            <h2>BEST SELLER</h2>
            <h2>Nike Jordan</h2>
            <span>$302.00</span>
          </div>
          <div className="plus-icon">
            <img src="/plus.png" alt="" />
          </div>
        </li>
        <li>
       <span> <MdOutlineFavoriteBorder /></span>
         <div className="product-img">
         <img src="/s1.png" alt="" />
         </div>
          <div className="product-details">
            <h2>BEST SELLER</h2>
            <h2>Nike Jordan</h2>
            <span>$302.00</span>
          </div>
          <div className="plus-icon">
            <img src="/plus.png" alt="" />
          </div>
        </li>
      </ul>
    </div>

  <div className="arrivals">
  <div className="arrivals-text">
      <h2>New Arrivals</h2>
      <p>See all</p>
    </div>
    <div className="arrival-content">
      <div className="vector1">
        <img src="/vec-1.png" alt="" />
        <img src="/new.png" alt="" />
        <img src="/vec-1.png" alt="" />
      </div>
      <div className="mid-arrivals">
      <p>Summer Sale</p>
      <div className="mid">
        <h2>15% OFF</h2>
        <img src="/s3.png" alt="" />
      </div>
      </div>
      <div className="vector2">
      <img src="/vec-2.png" alt="" />
      <img src="/vec-1.png" alt="" />
        </div>
    </div>
  </div>

  <div className="cart-btn">
   <img src="/cart.png" alt="" />
  </div>
  <div className="bottom-btn">
    <img src="/btn-bg.png" alt="" />
    <img src="/icons.png" alt="" />
  </div>
  </div>

    </div>
  )
}

export default Home;  