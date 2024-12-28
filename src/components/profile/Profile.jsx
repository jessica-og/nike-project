
import { FaPen  } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles.css";

const Profile = () => {
  return (
<div className="main-profile">
<div className="profile-cnt">
      <div className="profile-img">
        <img src="/avatar.png" alt="Profile" />
        <i>
          <FaPen />
        </i>
      </div>

      <div className="profile-details">
        <h2>Name</h2>
        <h2>Email</h2>
        <span>Location</span>
        <span>Phone Number</span>
      </div>

     <div className="btn-cnt">
     <Link to="/edit-profile">
        <button>Edit Profile</button>
      </Link>
     </div>
    </div>
</div>
  );
};

export default Profile;
