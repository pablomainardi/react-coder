import "./Navbar.css";
import CartWidget from "./CartWidget/CartWidget";
export const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light navbarTop">
        <button
          class="navbar-toggler btnHamb"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto navbarUl">
            <li class="nav-item active navbarUlLi">
              <a class="nav-link" href="#">
                Hogar
              </a>
            </li>
            <li class="nav-item navbarUlLi">
              <a class="nav-link" href="#">
                Electro
              </a>
            </li>
            <li class="nav-item navbarUlLi">
              <a class="nav-link" href="#">
                Herramientas
              </a>
            </li>
            <li class="nav-item navbarUlLi">
              <a class="nav-link" href="#">
                Multimedia
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <CartWidget />
    </>
  );
};
