import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Purchase = () => {
  const { register, handleSubmit, reset } = useForm();
  const [user, loading, error] = useAuthState(auth);
  const [totalPrice, setTotalPrice] = useState(0);
  const [numberError, setNumberError] = useState("");
  const [totalPriceError, setTotalPriceError] = useState("");

  const { partId } = useParams();
  const url = `https://boiling-dawn-76009.herokuapp.com/parts/${partId}`;

  const { data: part, isLoading } = useQuery(["parts", partId], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (loading || isLoading) {
    return <Loading></Loading>;
  }

  const onSubmit = (data, event) => {
    event.preventDefault();

    const proceed = window.confirm("Your order placed?");
    if (proceed) {
      const orders = {
        user_email: user.email,
        user_name: user.displayName,
        order_name: part.name,
        order_quantity: event.target.order_quantity.value,
        order_price: totalPrice,
        order_address: event.target.order_address.value,
      };
      const url = `https://boiling-dawn-76009.herokuapp.com/orders`;
      if (!numberError.length) {
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(orders),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log("Result is:", result);
            if (result.insertedId) {
              toast.success("Part added successfully");
              reset();
            } else {
              toast.error("Failed to add the part");
            }
          });
        reset();
      }
    }
  };
  const calculatePrice = (event) => {
    const totalPrice = event.target.value * part.price;
    const inputValue = event.target.value;

    if (
      inputValue < part.minimum_quantity
      // inputValue > part.available_quantity
    ) {
      event.target.value = 0;
      setTotalPrice(0);
      setNumberError(
        `Error occured. Number must be between ${part.minimum_quantity} and ${part.available_quantity}`
      );
    } else if (totalPrice > 999999) {
      event.target.value = 0;
      setTotalPrice(0);
      setTotalPriceError(`Error occured. Total limit exceeded $999999 }`);
    } else {
      console.log(totalPrice);
      setTotalPrice(totalPrice);
      setNumberError("");
      setTotalPriceError("");
    }

  };

  const notify = () => toast("Wow so easy!");
  return (
    <div>
      <h3 className="font-bold text-3xl text-secondary text-center my-5">
        Booking ID: {partId}
      </h3>
      <form
        className="grid grid-cols-1 gap-3 justify-items-center mt-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <img className="w-100" src={part.image} alt="" />
        <input
          type="text"
          name="user_name"
          disabled
          value={user?.displayName || ""}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="user_email"
          name="email"
          disabled
          value={user?.email || ""}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="order_name"
          disabled
          value={part.name}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          //Here we write a
          onMouseLeave={calculatePrice}
          type="number"
          name="order_quantity"
          placeholder="Order Quantity"
          className="input input-bordered w-full max-w-xs"
          {...register("order_quantity", {
            required: {
              value: true,
              message: "Order Quantity is Required",
            },
          })}
        />
        <span style={{ color: "red" }}>{numberError}</span>
        <input
          type="number"
          name="order_price"
          disabled
          value={totalPrice}
          className="input input-bordered w-full max-w-xs"
        />
        <span style={{ color: "red" }}>{totalPriceError}</span>
        <input
          type="text"
          name="order_address"
          placeholder="Order Address"
          className="input input-bordered w-full max-w-xs"
        />


        <button
          type="submit"
          // onClick={() => navigateToPartOrder(part._id)}
          onClick={notify}
          className="btn btn-secondary w-full max-w-xs"
        >
          Order: {part.name}
        </button>
      </form>
    </div>
  );
};

export default Purchase;
