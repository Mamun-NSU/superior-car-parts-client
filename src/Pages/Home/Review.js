import React from "react";
import "./css/Review.css";

const Review = (props) => {
  const { user_name, user_image, review, rating } = props.review;
  return (
    <div className="review">
      <p>
        <img src={user_image} alt=""></img>{" "}
        <span className="user_name">{user_name}</span>
      </p>
      <p>{review}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default Review;
