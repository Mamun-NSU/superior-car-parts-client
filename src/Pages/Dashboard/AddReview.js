import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
  const { handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);

  const onSubmit = (data, event) => {
    event.preventDefault();

    const reviews = {
      email: user.email,
      name: user.displayName,
      review: event.target.review.value,
      ratings: event.target.ratings.value,
    };
    const url = `https://boiling-dawn-76009.herokuapp.com/reviews`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          toast.success("Review added successfully");
          reset();
        } else {
          toast.error("Failed to add the review");
        }
      });
  };
  return (
    <div className="">
      <h2 className="font-bold text-lg text-primary text-center my-5">
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
        {/* <input
          type="number"
          name="ratings"
          placeholder="Ratings"
          className="input input-bordered w-full max-w-xs"
        /> */}
        <select
          name="ratings"
          className="select select-bordered w-full max-w-xs"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>

        <input
          type="submit"
          value="Add Review"
          className="btn btn-primary w-full max-w-xs"
        />
      </form>
    </div>
  );
};

export default AddReview;
