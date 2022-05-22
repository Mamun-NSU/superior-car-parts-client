import React from "react";
import loddingImg from "../../assets/images/loading.gif";

const NotFound = () => {
  return (
    <div>
      <h2 className="text-primary text-center">Page Not Found!!!</h2>
      <h4 className="text-danger text-center">Error 404</h4>
      <img className="w-100" src={loddingImg} alt="" />
    </div>
  );
};

export default NotFound;
