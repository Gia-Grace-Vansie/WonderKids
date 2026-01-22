import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  // demo auth state
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container-fluid px-4">
        {/* Brand */}
        <NavLink className="navbar-brand fw-bold" to="/">
          WonderKids 🌈
        </NavLink>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/games">
                Games
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/learning">
                Learning
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/videos">
                Videos
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>

          {/* Right side actions */}
          <div className="d-flex gap-2">
            {!isLoggedIn ? (
              <NavLink to="/login" className="btn btn-primary">
                Start Learning
              </NavLink>
            ) : (
              <>
                <NavLink to="/learning" className="btn btn-success">
                  My Learning
                </NavLink>
                <button onClick={handleLogout} className="btn btn-outline-danger">
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
