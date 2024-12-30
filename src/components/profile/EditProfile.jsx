import { FaCheck } from "react-icons/fa";
import "./styles.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
    <div className="main-profile">
      <div className="profile-cnt">
        <Link to="/profile">
          <IoIosArrowBack />
        </Link>
        <div className="edit-top">
          <div className="profile-img2 ">
            <img src="/avatar.png" alt="Profile" />
          </div>
          <h2>Name</h2>
          <p>Change Profile Picture</p>
        </div>
        <form className="editprofile-form">
          <ul>
            <li>
              <label htmlFor="firstName">First Name</label>
              <div className="input">
                <input id="firstName" type="text" placeholder="John" required />
                <i className="check">
                  <FaCheck />
                </i>
              </div>
            </li>
            <li>
              <label htmlFor="lastName">Last Name</label>
              <div className="input">
                <input id="lastName" type="text" placeholder="Doe" required />
                <i className="check">
                  <FaCheck />
                </i>
              </div>
            </li>
            <li>
              <label htmlFor="location">Location</label>
              <div className="input">
                <input
                  id="location"
                  type="text"
                  placeholder="Nigeria"
                  required
                />
                <i className="check">
                  <FaCheck />
                </i>
              </div>
            </li>
            <li>
              <label htmlFor="mobile">Mobile Number</label>
              <div className="input">
                <input
                  id="mobile"
                  type="tel"
                  placeholder="+234 892-334-94"
                  required
                />
                <i className="check">
                  <FaCheck />
                </i>
              </div>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
