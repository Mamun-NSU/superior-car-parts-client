import React from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { partId } = useParams();
  return (
    <div>
      <h1>This is Purchase page</h1>
      <h3>Booking ID: {partId}</h3>
    </div>
  );
};

export default Purchase;
