
import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/parts`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Please add a product</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 40 })}
        />
        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          {...register("image")}
        />
        <textarea
          className="mb-2"
          placeholder="Description"
          {...register("about")}
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="Minimum quantity"
          type="number"
          {...register("minimum_quantity")}
        />
        <input
          className="mb-2"
          placeholder="Available quantity"
          type="number"
          {...register("available_quantity")}
        />
        <input
          className="mb-2"
          placeholder="company Name"
          {...register("company_name", { required: true, maxLength: 40 })}
        />
        <input type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddProduct;

