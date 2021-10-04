import { NavLink } from "react-router-dom";
import logo from "../..//images/logo/logo-NEW.png";
import "./NavBar.css";

const NavBar = () => {

  return (
    <div className="nav-container">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="logo-img">
              <img className="w-100" src={logo} alt="" />
            </div>
          </div>
          <div className="col-md-10">
            <div className="nav-container ">
              <ul className="d-flex align-items-end justify-content-end">

                <NavLink to="/home"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#660c69;"
                  }}
                  className="items">
                  <li>Home</li>
                </NavLink>

                <NavLink to="/course" activeStyle={{
                  fontWeight: "bold",
                  color: "#660c69;"
                }}
                  className="items">
                  <li>Course</li>
                </NavLink>

                <NavLink to="/about"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#660c69;"
                  }}
                  className="items">
                  <li>About us</li>
                </NavLink>

                <NavLink to="contact"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#660c69;"
                  }}
                  className="items">
                  <li>Contact us</li>
                </NavLink>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;