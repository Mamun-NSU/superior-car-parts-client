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
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    // <div>
    //         <input type="checkbox" id="booking-modal" className="modal-toggle" />
    //         <div className="modal modal-bottom sm:modal-middle">
    //             <div className="modal-box">
    //                 <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    //                 <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
    //                 {/* This is form */}
    //             </div>
    //         </div>
    //     </div>

    // This is in top nav: w-50 mx-auto
    <div className="">
      <h2 className="font-bold text-lg text-secondary text-center my-5">
        Please add a product
      </h2>
      <form
        className="grid grid-cols-1 gap-3 justify-items-center mt-2"
        onSubmit={handleSubmit(onSubmit)}
      >
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
        <input
          type="submit"
          value="Add Service"
          className="btn btn-secondary w-full max-w-xs"
        />
      </form>
    </div>
  );
};

export default AddProduct;
