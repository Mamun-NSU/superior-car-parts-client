import React, { useEffect, useState } from "react";
import "./css/Parts.css";
import Part from "./Part";

const Parts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/parts", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);

  return (
    <div id="parts" className="container">
      <h1 className="text-2xl font-bold text-primary text-center my-5">
        This is Parts Section
      </h1>
      <div className="row">
        {/* <h1 className="text-primary text-center mt-5"> Our Products</h1> */}
        <div className="products-container">
          {parts.map((part) => (
            <Part key={part._id} part={part}></Part>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Parts;
