import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="col-md-2 main__sidebar_div">
        <div className="logo_container py-3">
          <img src="images/logo.svg" alt="" />
        </div>
        <div className="nav_links">
          {/* <div className="nav_link"><Link to={"/"}>Home</Link></div> */}
          <div className="nav_link"><Link to={"/"}><i class="fas fa-tachometer-alt"></i>  Dashboard</Link></div>
          <div className="nav_link"><Link to={"/product"}><i class="fab fa-product-hunt"></i> Products</Link></div>
          <div className="nav_link"><Link to={""}> <i class="fas fa-user"></i> Users</Link></div>
          <div className="nav_link"><Link to={"/"}><i class="fas fa-shopping-bag"></i> Orders</Link></div>
          <div className="nav_link"><Link to={"/"}><i class="fas fa-wallet"></i> Payment</Link></div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
