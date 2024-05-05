import { useState } from "react";
import { GrLinkedin } from "react-icons/gr";
import { Link } from "react-router-dom";

const Header = () => {
  const classes = ["nav-link", "text-white"].join(" ");
  const [activePage, setActivePage] = useState("Home");

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ height: "100vh", width: "25vw" }}
    >
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">
          <GrLinkedin /> Linked-In
        </span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            to="/"
            className={classes + (activePage === "Home" && " active")}
            aria-current="page"
            onClick={() => setActivePage("Home")}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/create-post"
            className={classes + (activePage === "Create Post" && " active")}
            onClick={() => setActivePage("Create Post")}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={classes + (activePage === "Explore" && " active")}
            onClick={() => setActivePage("Explore")}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#table"></use>
            </svg>
            Explore
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={classes + (activePage === "Support" && " active")}
            onClick={() => setActivePage("Support")}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#grid"></use>
            </svg>
            Support
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
