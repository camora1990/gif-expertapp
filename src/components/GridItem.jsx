import React from "react";

export const GridItem = ({ img, username, imageName}) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 p-3" >
      <div className="card h-100 overflow-hidden shadow bg-body rounded">
        <div className="container-img-card">
          <img src={img} alt={imageName} />
        </div>
        <div className="card-body">
          <h5 className="card-tex">{imageName}</h5>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            {username.length == 0 ? "N/A" : username}
          </small>
        </div>
      </div>
    </div>
  );
};


