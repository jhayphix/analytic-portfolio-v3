// ... React modules
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";

// ... Context
import { NavigationContext } from "@contexts/NavigationContextProvider";
import BrandName from "@layouts/BrandName.jsx";
import { ThemeContext } from "@contexts/ThemeContextProvider";

// ... Components
import ThemeSwitch from "./ThemeSwitch";

const SideNavigation = () => {
  /*
  |----------------------------------------
  |  Contexts and states
  |----------------------------------------
  */

  const { nav_links, home } = useContext(NavigationContext);
  const { switchTheme, theme } = useContext(ThemeContext);

  /*
  |----------------------------------------
  | Return 
  |----------------------------------------
  */
  const nav_links_db = nav_links;
  const home_path = home?.path;

  return (
    <nav className="d-flex flex-column h-100">
      <Link
        className="navbar-brand fw-bold text_secondary_1 fs-4 mb-5"
        to={home_path}
      >
        <BrandName />
      </Link>

      <ul className="navbar-nav flex-grow-1">
        {nav_links_db?.map(({ name, path, end, icon }, index) => {
          return (
            <li className="nav-item side_nav_item mb-3" key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link d-flex align-items-center side_nav_link active_side_nav_link py-1 ps-1"
                    : "nav-link d-flex align-items-center side_nav_link py-1 ps-1"
                }
                to={path}
                end={end}
              >
                <span className="me-3 fs-3" style={{ fontSize: "100px" }}>
                  {icon}
                </span>
                {name}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <div className="mb-4">
        {" "}
        {/* Add margin-top to create space */}
        <ThemeSwitch onChange={switchTheme} theme={theme} />
      </div>
    </nav>
  );
};

export default SideNavigation;
