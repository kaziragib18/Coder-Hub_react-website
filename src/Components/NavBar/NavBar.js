import { NavLink,  } from "react-router-dom";
import logo from "../..//images/logo/logo-NEW.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav__container">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="logo-img">
              {/* site logo adeed */}
              <NavLink to='/home'>
              <img className="w-100" src={logo} alt="" />
              </NavLink>
            </div>
          </div>
          <div className="col-md-10">
            <div className="nav-container ">
              <ul className="d-flex align-items-end justify-content-end">
              {/* Added Active style in rountes */}
                <NavLink to="/home"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#41114d;"
                  }}
                  className="items">
                  <li>Home</li>
                </NavLink>

                <NavLink to="/course" activeStyle={{
                  fontWeight: "bold",
                  color: "#41114d;"
                }}
                  className="items">
                  <li>Course</li>
                </NavLink>

                <NavLink to="/about"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#41114d;"
                  }}
                  className="items">
                  <li>About us</li>
                </NavLink>

                <NavLink to="contact"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#41114d;"
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