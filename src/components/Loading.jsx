import React from "react";
import img from "../public/img/spinner.gif";
export const Loading = () => {
  return (
    <div className="loading-spinner ">
      <div className="loading-img ">
        <img src={img} alt="" />
        <p>Loading please wait......</p>
      </div>
    </div>
  );
};
