import "./Header.css";
import Logo from "./Logo/Logo";

import { Navbar } from "./Navbar/Navbar";

function Header() {
  return (
    <div className="headerBox">
      <Logo />
      <Navbar />
    </div>
  );
}

export default Header;
