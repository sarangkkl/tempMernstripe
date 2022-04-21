import React from "react";
import "./common.scss";
const Loading = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden"><i className="fab fa-gg-circle text-danger"></i></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
