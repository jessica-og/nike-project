import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { auth, db } from "../../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import PropTypes from "prop-types";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Update user profile with name
      await updateProfile(user, { displayName: name });

      // Save user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        createdAt: new Date().toISOString(),
      });

      navigate("/sign-in");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main">
      <form className="register" onSubmit={handleSubmit}>
        <h2>Register Account</h2>
        <p>Fill your details or continue with social media</p>
        {error && <p className="error">{error}</p>}
        <ul>
          <li>
            <label className="name-label" htmlFor="name">
              {" "}
              Name
            </label>
            <div className="input">
              <input
                type="text"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </li>
          <li>
            <label className="email-label" htmlFor="email">
              Email{" "}
            </label>
            <div className="input">
              <input
                type="email"
                id="email"
                placeholder="Xyz@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </li>
          <li>
            <label htmlFor="password"> Password </label>
            <div className="input">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i
                className="icon"
                style={{ cursor: "pointer" }}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <BsEye /> : <BsEyeSlash />}
              </i>
            </div>
          </li>
          <li className="submit">
            <button type="submit" disabled={loading}>
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </li>
          <li className="google">
            <FcGoogle />
            <Link to="">Sign Up With Google</Link>
          </li>
          <li>
            <span className="text-wrapper">
              <span className="info-text">Already Have an Account?</span>
              <Link to="/sign-in" className="login-link">
                {" "}
                Log In
              </Link>
            </span>
          </li>
        </ul>
      </form>
    </div>
  );
};


Register.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  showPassword: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.string,
  navigate: PropTypes.func,
};

export default Register;
