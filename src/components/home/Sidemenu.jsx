import { CiSettings, CiUser } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";
import "./sidemenu.css";
import PropTypes from "prop-types";
import { RiShoppingBagLine } from "react-icons/ri";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "Profile", icon: <CiUser />, link: "/profile" },
  { label: "My Cart", icon: <RiShoppingBagLine/>, link: "" },
  { label: "Favourite", icon: <MdOutlineFavoriteBorder />, link: "" },
  { label: "Orders", icon: <TbTruckDelivery />, link: "" },
  { label: "Notifications", icon: <IoNotificationsOutline />, link: "" },
  { label: "Settings", icon: <CiSettings />, link: "" },
];

const Sidemenu = ({ closeSidebar }) => {
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName || "User");
      } else {
        setUserName("User");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("User signed out");
      closeSidebar();
    }).catch((error) => {
      console.error("Error signing out:", error);
    });
  };

  return (
    <div className="sidemenu-cnt">
      <div className="sidemenu-header">
        <button className="close-button" onClick={closeSidebar}>X</button>
      </div>
      <div className="profile-img-side">
        <img src="/avatar.png" alt="Profile" />
        <h2>{userName}</h2>
      </div>
      <div className="menu-list">
        <ul>
        {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
              <i className="link-icon">{item.icon}</i>
              <Link to={item.link} className="menu-label" onClick={handleSignOut}>
                {item.label}
              </Link>
            </li>
          ))}
          <div className="divider"></div>
          <li className="menu-item">
              <i className="link-icon"><IoIosLogOut /></i>
              <Link to='' className="menu-label">
              Sign Out
              </Link>
            </li>
         
        </ul>
      </div>
    </div>
  );
};

Sidemenu.propTypes = {
  closeSidebar: PropTypes.func.isRequired,
};

export default Sidemenu;
