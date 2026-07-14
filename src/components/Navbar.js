import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">

      <div className="container">

        <Link className="navbar-brand fw-bold" to="/home">
          🛍 TrendMart
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/home">
                🏠 Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/category/electronics"
              >
                💻 Electronics
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/category/jewelery"
              >
                💍 Jewelery
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/add">
                ➕ Tambah Produk
              </Link>
            </li>

          </ul>

          <div className="d-flex align-items-center">

            <span className="user-name me-3">
              👋 Halo, <strong>{user}</strong>
            </span>

            <button
              className="btn btn-light logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>

        </div>

      </div>

    </nav>
  );
}