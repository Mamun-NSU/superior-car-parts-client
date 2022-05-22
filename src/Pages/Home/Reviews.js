import React, { useEffect, useState } from "react";
//import useReviews from "../../hooks/useReviews";
import "./css/Reviews.css";
import Review from "./Review";

const Reviews = () => {
  // const [reviews, setReviews] = useReviews();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <>
      <h1 className="text-primary text-center mt-5">This is Review Section</h1>
      <div className="review-container">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </>
  );
};

export default Reviews;
