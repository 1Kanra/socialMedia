import { Link } from "react-router-dom";
import "./register.scss";

const Login = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Join the Club</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            posuere, erat elementum tincidunt elementum, sapien nisi vehicula
            urna, sit amet consequat orci nibh sed ex.
          </p>
          <span>Don't have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
