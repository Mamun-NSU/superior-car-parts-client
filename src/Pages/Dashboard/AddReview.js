import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const AddReview = () => {
  const { register, handleSubmit } = useForm();
  const [user, loading, error] = useAuthState(auth);

  const onSubmit = (data, event) => {
    event.preventDefault();

    const reviews = {
      email: user.email,
      name: user.displayName,
      review: event.target.review.value,
      ratings: event.target.ratings.value,
    };
    const url = `http://localhost:5000/reviews`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="">
      <h2 className="font-bold text-lg text-secondary text-center my-5">
        Please add a Review
      </h2>
      <form
        className="grid grid-cols-1 gap-3 justify-items-center mt-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          name="name"
          disabled
          value={user?.displayName || ""}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="email"
          name="email"
          disabled
          value={user?.email || ""}
          className="input input-bordered w-full max-w-xs"
        />

        <textarea
          type="text"
          name="review"
          placeholder="Review"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="number"
          name="ratings"
          placeholder="Ratings"
          className="input input-bordered w-full max-w-xs"
        />

        <input
          type="submit"
          value="Add Review"
          className="btn btn-secondary w-full max-w-xs"
        />
      </form>
    </div>
  );
};

export default AddReview;
