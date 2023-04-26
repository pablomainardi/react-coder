import "./Footer.css";
import { Outlet } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <Outlet />
      <div className="footerBox">
        <h5>Contacto</h5>
        <h5>Redes</h5>
      </div>
    </>
  );
};
