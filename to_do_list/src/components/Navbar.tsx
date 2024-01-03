import whiteLogoImage from "../assets/img/white.png";
import blackLogoImage from "../assets/img/black.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            <img
              src={whiteLogoImage}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
