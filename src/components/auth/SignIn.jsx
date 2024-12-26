import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import PropTypes from "prop-types";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
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
      // Sign in user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main">
      <form className="register" onSubmit={handleSubmit}>
        <h2>Hello Again!</h2>
        <p>Fill your details or continue with social media</p>
        {error && <p className="error">{error}</p>}
        <ul>
          <li>
            <label className="email-label" htmlFor="email">
              {" "}
              Email Address
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
            <label htmlFor="password">Password</label>
            <div className="input">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder=". . . . . . . . . ."
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

          <li className="recovery">
            <Link to="/password-recovery">Recover Password</Link>
          </li>

          <li className="submit">
            <button type="submit" disabled={loading}>
              {loading ? "Loading..." : "Sign In"}
            </button>
          </li>

          <li className="google">
            <FcGoogle />
            <Link to="">Sign In With Google</Link>
          </li>

          <li>
            <span className="text-wrapper">
              <span className="info-text">New User?</span>
              <Link to="/register" className="login-link">
                {" "}
                Create Account
              </Link>
            </span>
          </li>
        </ul>
      </form>
    </div>
  );
};


SignIn.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  showPassword: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.string,
  navigate: PropTypes.func,
};

export default SignIn;
