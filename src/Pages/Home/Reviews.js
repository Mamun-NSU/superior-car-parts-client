import React, { useEffect, useState } from "react";
//import useReviews from "../../hooks/useReviews";
import "./css/Reviews.css";
import Review from "./Review";

const Reviews = () => {
  // const [reviews, setReviews] = useReviews();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold text-primary text-center my-5">
        This is Review Section
      </h1>
      <div className="review-container">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </>
  );
};

export default Reviews;
