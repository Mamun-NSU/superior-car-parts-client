import React, { useEffect, useState } from "react";
import "./css/Parts.css";
import Part from "./Part";

const Parts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetch("https://arcane-caverns-72469.herokuapp.com/parts", {
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
