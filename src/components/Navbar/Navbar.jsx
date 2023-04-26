import "./Navbar.css";
import Logo from "../Logo/Logo";
import CartWidget from "../CartWidget/CartWidget";

import { Outlet, Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <div className="navbarBox">
        <Logo />
        <nav className="navbar navbar-expand-md navbar-light navbarTop">
          <button
            className="navbar-toggler btnHamb"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto navbarUl">
              <li className="nav-item active navbarUlLi">
                <Link className="nav-link" to="/category/hogar">
                  Hogar
                </Link>
              </li>
              <li className="nav-item navbarUlLi">
                <Link className="nav-link" to="/category/tecnologia">
                  Tecnología
                </Link>
              </li>
              <li className="nav-item navbarUlLi">
                <Link className="nav-link" to="/category/otros">
                  Otros
                </Link>
              </li>
              <li className="nav-item navbarUlLi">
                <Link className="nav-link" to="/category/todos">
                  Todos
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <CartWidget />
      </div>
      <Outlet />
    </>
  );
};
