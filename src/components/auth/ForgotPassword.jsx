import  { useState } from "react";
import PropTypes from "prop-types";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import "./styles.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      setShowPopup(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main">
      <form className="register" onSubmit={handleResetPassword}>
        <h2>Forgot Password</h2>
        <p>Enter your email address to reset your password</p>

        <ul>
          <li>
            <label htmlFor="email">Email</label>
            <div className="input">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </li>

          {error && <li className="error">{error}</li>}

          <li className="submit">
            <button type="submit" disabled={loading}>
              {loading ? "Loading..." : "Reset Password"}
            </button>
          </li>
        </ul>
      </form>

      {showPopup && (
        <div className="popup">
            <img src="/mail.png" alt="" />
            <span className="popup-text">
                <h2>Check your email.</h2>
                <p> We have sent a password recovery code to your email.</p>
            </span>
          
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

ForgotPassword.propTypes = {
  email: PropTypes.string,
  loading: PropTypes.bool,
  showPopup: PropTypes.bool,
  error: PropTypes.string,
};

export default ForgotPassword;
