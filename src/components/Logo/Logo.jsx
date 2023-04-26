import "./Logo.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="logobox">
      <Link to="/">
        <img
          alt="Logo"
          className="logoImg img-fluid"
          width="170px"
          src="https://res.cloudinary.com/dku8gae8u/image/upload/v1680535494/react-coder/logo_tesirvo_qi9sym.png"
        />
      </Link>
    </div>
  );
}

export default Logo;
