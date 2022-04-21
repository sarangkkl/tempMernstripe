import React, { useState } from "react";
import "./Topbar.scss";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { HomeBar,Product,AddNewProduct } from '../'
import { Routes,Route } from 'react-router-dom'
import { logout } from '../../../action/userAction'
import { useDispatch } from 'react-redux'

const TopNav = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const executeLogout = () => {
    dispatch(logout());
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="col-md-10">
        <div className="topnav">
        <div className="searchbox">
          <input type="text" />
          <button className="btn btn-primary btn-sm mx-2 mb-1">Search</button>
        </div>
        <div className="top_nav_menu">
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <img src="images/avatars/avatar1.jpg" alt=""  className="user_img"/>
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={()=>{executeLogout()}}>Logout</MenuItem>
          </Menu>
        </div>
        </div>
        <div>
          <Routes>
            <Route path={"/"} element={<HomeBar/>}/>
            <Route path={"/product"} element={<Product/>}/>
            <Route path={"/newProduct"} element={<AddNewProduct/>}/>
          </Routes>

          
        </div>
        
      </div>
    </>
  );
};

export default TopNav;
