import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `https://boiling-dawn-76009.herokuapp.com/parts`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="">
      <h2 className="text-2xl font-bold text-primary text-center my-5">
        Please add a product
      </h2>
      <form
        className="grid grid-cols-1 gap-3 justify-items-center mt-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="input input-bordered w-full max-w-xs"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 40 })}
        />
        <input
          className="input input-bordered w-full max-w-xs"
          placeholder="Photo URL"
          type="text"
          {...register("image")}
        />
        <textarea
          className="input input-bordered w-full max-w-xs"
          placeholder="Description"
          {...register("about")}
        />
        <input
          className="input input-bordered w-full max-w-xs"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="input input-bordered w-full max-w-xs"
          placeholder="Minimum quantity"
          type="number"
          {...register("minimum_quantity")}
        />
        <input
          className="input input-bordered w-full max-w-xs"
          placeholder="Available quantity"
          type="number"
          {...register("available_quantity")}
        />
        <input
          className="input input-bordered w-full max-w-xs"
          placeholder="company Name"
          {...register("company_name", { required: true, maxLength: 40 })}
        />
        <input
          type="submit"
          value="Add Product"
          className="btn btn-secondary w-full max-w-xs"
        />
      </form>
    </div>
  );
};

export default AddProduct;
