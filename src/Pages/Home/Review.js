import React from "react";
import "./css/Review.css";

const Review = (props) => {
  const { name, email, review, ratings } = props.review;
  return (
    <div className="review">
      <p>
        {/* <img src={user_image} alt=""></img>{" "} */}
        <span className="user_name">{name}</span>
      </p>
      <p>{email}</p>
      <p>{review}</p>
      <p>Rating: {ratings}</p>
    </div>
  );
};

export default Review;
