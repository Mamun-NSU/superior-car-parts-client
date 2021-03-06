import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Part.css";
import useAdmin from "../../hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

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

  // const [parts, setParts] = useParts();

  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

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
        className="btn btn-primary" disabled={admin}
      >
        Book: {name}
      </button>
      {/* <button onClick={() => deleteItem(_id)} className="btn btn-primary">
        Delete: {name}
      </button> */}
    </div>
  );
};

export default Part;
