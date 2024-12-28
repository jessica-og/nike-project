
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import './home.css';
import { useState } from "react";
import Sidemenu from "./Sidemenu";


const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="home-cnt">
     {isSidebarOpen && <Sidemenu closeSidebar={toggleSidebar} />}
      <div className="header">
        <img src="/menu.png" alt="menu" 
              onClick={toggleSidebar} 
        />
        <div className="top-text">
          <img src="/m1.png" alt="" />
          <h2>Explore</h2>
        </div>
        <i className="shopping-bag">
          <span className="cart-num">4</span>
          <img src="/bag.png" alt="" /></i>
      </div>

      <div className="search-container">
      <form className="search-form">
      <div className="input-wrapper">
    <img src="/search.png" alt="Search Icon" className="search-icon" />
    <input
      type="search"
      name="search"
      placeholder="Looking for shoes"
      className="search-input"
    />
  </div>
        <Link to="/search">
          <button type="submit" className="search-button">
            <img src="/search2.png" alt="Search Button" />
          </button>
        </Link>
      </form>
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

  
  </div>

    </div>
  )
}

export default Home;  