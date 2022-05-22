import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Part.css";
const Part = ({ part }) => {
  const {
    _id,
    name,
    image,
    about,
    price,
    minimum_quantity,
    available_quantity,
    company_name,
  } = part;
  const navigate = useNavigate();

  const navigateToPartDetail = (id) => {
    navigate(`/parts/${id}`);
  };
  return (
    <div className="product">
      <img className="w-100" src={image} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>Available Quantity: {available_quantity}</p>
      <p>Minimum Quantity: {minimum_quantity}</p>
      <p>Company Name: {company_name}</p>
      <p>
        <small>{about}</small>
      </p>
      <button
        onClick={() => navigateToPartDetail(_id)}
        className="btn btn-primary"
      >
        Book: {name}
      </button>
    </div>
  );
};

export default Part;