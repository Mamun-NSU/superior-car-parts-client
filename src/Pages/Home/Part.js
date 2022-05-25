import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Part.css";
import useParts from "../../hooks/useParts";
import { toast } from "react-toastify";

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

  const [parts, setParts] = useParts();

  const navigate = useNavigate();

  const navigateToPartDetail = (id) => {
    navigate(`/parts/${id}`);
  };

  const deleteItem = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      toast.success('Part deleted successfully');
      const url = `http://localhost:5000/parts/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = parts.filter((part) => part._id !== id);
          setParts(remaining);
        });

    }
    else {
      toast.error('Failed to delete the part');
    }
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
      <button onClick={() => deleteItem(_id)} className="btn btn-primary">
        Delete: {name}
      </button>
    </div>
  );
};

export default Part;
