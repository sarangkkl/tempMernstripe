import React from "react";
// import {} from "../../";
import "./HomeBar.scss";
const HomeBar = () => {
  return (
    <>
      <div className="col-md-12">
        <div className="info_box">
          <div className="col-md-3 info_card">
            <h1 className="text-center my-3 font-weight-bold">Today Revenue</h1>
            <p className="mt-4 font-weight-bolder text-primary text-center"><i class="fas fa-dollar-sign"></i> 5425 </p>
          </div>
          <div className="col-md-3 info_card">
            <h1>Hello</h1>
          </div>
          <div className="col-md-3 info_card">
            <h1>Hello</h1>
          </div>
          <div className="col-md-3 info_card">
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBar;
