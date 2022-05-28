import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const imageStorageKey = '0a30bc76b0d95f4d6e4cf0846de21115';


  // const onSubmit = (data) => {
  //   // console.log(data);





  //   const url = `https://boiling-dawn-76009.herokuapp.com/parts`;
  //   fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //     });
  // };
  const onSubmit = async data => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          const img = result.data.url;
          const part = {
            name: data.name,
            about: data.about,
            price: data.price,
            minimum_quantity: data.minimum_quantity,
            available_quantity: data.available_quantity,
            company_name: data.company_name,
            image: img
          }
          // send to your database 
          fetch(`https://boiling-dawn-76009.herokuapp.com/parts`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(part)
          })
            .then(res => res.json())
            .then(inserted => {
              if (inserted.insertedId) {
                toast.success('Part added successfully')
                reset();
              }
              else {
                toast.error('Failed to add the part');
              }
            })

        }

      })
  }
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
          placeholder="Photo"
          type="file"
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
