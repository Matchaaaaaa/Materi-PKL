import { FaUserAlt, FaLock } from "react-icons/fa";
import '../assets/css/Login.css';
import logo from '../assets/hewoo.jpg'
import { Link } from "react-router-dom";

const Register = () => {
    return (
      <div className="login-page">
      <div className="login-card-container">
        <div className="login-card">
          <div className="login-card-logo">
          <img src={logo} alt="logo" style={{width: "90px", height: "90px", marginLeft: "110px"}} />
          </div>
          <div className="login-card-header">
            <h1>Register</h1>
            <div>Please insert your email</div>
          </div>
          <form className="login-card-form">
            <div className="form-item">
              <span className="form-item-icon material-symbols-rounded"><FaUserAlt /></span>
              <input type="text" placeholder="Enter Email" id="emailForm" autofocus required />
            </div>
            <div className="form-item">
              <span className="form-item-icon material-symbols-rounded"><FaLock /></span>
              <input type="password" placeholder="Enter Password" id="passwordForm" required />
            </div>
            <div className="form-item">
              <span className="form-item-icon material-symbols-rounded"><FaLock /></span>
              <input type="password" placeholder="Confirm Password" id="passwordForm" required />
            </div>
            <Link to='/Login'><button type="submit">Sign Up</button></Link>
          </form>
          </div>
      </div>
    </div>
    )
}

export default Register