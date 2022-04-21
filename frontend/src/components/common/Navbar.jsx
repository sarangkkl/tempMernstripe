import React from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { logout } from '../../action/userAction'
import "./common.scss"
const Navbar = () => {
  const dispatch = useDispatch();

  const executeLogout = () => {
    dispatch(logout());
  };
  const { user } = useSelector(
    (state) => state.user
  );
  const { cartItems } = useSelector(
    (state) => state.cart
  );
  // alert(cartItems.length)
  return (
    <>
      <header className="section-header">
        <nav className="navbar navbar-dark navbar-expand p-0 bg-primary">
          <div className="container">
            <ul className="navbar-nav d-none d-md-flex mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Delivery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Payment
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  {" "}
                  Call: +99812345678{" "}
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  {" "}
                  English{" "}
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-right"
                  style={{ maxWidth: "100px" }}
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Arabic
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Russian{" "}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>

        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 col-6">
                <Link to={"/"} className="brand-wrap">
                  <img className="logo" src="/images/logo.png" alt="" />
                </Link>
              </div>
              <div className="col-lg-6 col-12 col-sm-12">
                <form action="#" className="search">
                  <div className="input-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit">
                        <i className="fa fa-search"></i> Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="widgets-wrap float-lg-right">
                  <div className="widget-header  mr-3">
                    <Link
                      to={"/cart"}
                      className="icon icon-sm rounded-circle border"
                    >
                      <i className="fa fa-shopping-cart"></i>
                    </Link>
                    <span className="badge badge-pill badge-danger notify">
                      {cartItems.length}
                    </span>
                  </div>
				  {user ? <div className="widget-header icontext">
                    <Link
                      to={"/me"}
                      className="icon icon-sm rounded-circle border"
                    >
						<img src={user.avatar ? user.avatar.url :""} alt="" className="avatar_img"/>
                      {/* <i className="fa fa-user"></i> */}
                    </Link>
                    <div className="text">
                      <span className="text-muted">Welcome!</span>
                      <div>
                        <Link to={"/me"}>{user.name}</Link> |
                        {/* <Link to={"/register"}> Logout</Link> */}
						<button className="buttonToLink" onClick={(e)=>executeLogout()}>Logout</button>
                      </div>
                    </div>
                  </div>:<div className="widget-header icontext">
                    <Link
                      to={"/me"}
                      className="icon icon-sm rounded-circle border"
                    >
                      <i className="fa fa-user"></i>
                    </Link>
                    <div className="text">
                      <span className="text-muted">Welcome!</span>
                      <div>
                        <Link to={"/login"}>Sign in</Link> |
                        <Link to={"/register"}> Register</Link>
                      </div>
                    </div>
                  </div>}
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        <nav className="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main_nav"
              aria-controls="main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link pl-0" data-toggle="dropdown" href="#">
                    <strong>
                      {" "}
                      <i className="fa fa-bars"></i> All category
                    </strong>
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Foods and Drink
                    </a>
                    <a className="dropdown-item" href="#">
                      Home interior
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Category 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Category 2
                    </a>
                    <a className="dropdown-item" href="#">
                      Category 3
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Fashion
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Supermarket
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Electronics
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Baby &amp Toys
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Fitness sport
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Clothing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Furnitures
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
