import { Link, NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="bi bi-basket2-fill"></i> FoodCourt
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/find-food">Find Food</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
            <li className="nav-item ms-lg-3">
              <Link className="btn btn-brand rounded-pill px-4" to="/donate">Donate Food</Link>
            </li>

            {props.isLoggedIn ? (
              <>
                <li className="nav-item ms-lg-3">
                  <span className="nav-link">
                    Hi, {props.currentUser && props.currentUser.username}
                  </span>
                </li>
                <li className="nav-item ms-lg-2">
                  <button
                    className="btn btn-outline-secondary rounded-pill px-4"
                    onClick={() => props.setCurrentUser(null)}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item ms-lg-2">
                  <Link className="btn btn-outline-success rounded-pill px-4" to="/login">Login</Link>
                </li>
                <li className="nav-item ms-lg-2">
                  <Link className="btn btn-outline-secondary rounded-pill px-4" to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;