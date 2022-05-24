import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";

const Purchase = () => {
  const { partId } = useParams();
  const url = `http://localhost:5000/parts/${partId}`;

  const { data: part, isLoading } = useQuery(["parts", partId], () =>
    fetch(url, {
      method: "GET",
      // headers: {
      //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      // },
    }).then((res) => res.json())
  );

  const navigateToPartOrder = (id) => {
    // navigate(`/parts/${id}`);
    alert("GREAT!You click for order!!");
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1>This is Purchase page</h1>
      <h3>Booking ID: {partId}</h3>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        {/* <div className="card-body">
          <p className="text-success font-bold">
            Hello, {appointment.patientName}
          </p>
          <h2 className="card-title">Please Pay for {appointment.treatment}</h2>
          <p>
            Your Appointment:{" "}
            <span className="text-orange-700">{appointment.date}</span> at{" "}
            {appointment.slot}
          </p>
          <p>Please pay: ${appointment.price}</p>
        </div> */}
        <img className="w-100" src={part.image} alt="" />
        <h2>{part.name}</h2>
        <p>Price: {part.price}</p>
        <p>Available Quantity: {part.available_quantity}</p>
        <p>Minimum Quantity: {part.minimum_quantity}</p>
        <p>Company Name: {part.company_name}</p>
        <p>
          <small>{part.about}</small>
        </p>
        <button
          onClick={() => navigateToPartOrder(part._id)}
          className="btn btn-primary"
        >
          Order: {part.name}
        </button>
      </div>
    </div>
  );
};

export default Purchase;
