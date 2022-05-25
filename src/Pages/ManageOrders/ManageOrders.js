import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ManageOrder from "./ManageOrder";

const ManageOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("http://localhost:5000/orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl">All orders: {orders.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Customer</th>
              <th>Product Name</th>
              <th>Product Quantity</th>
              <th>Total Price</th>
              <th>Location</th>
              <th>Remove Order</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <ManageOrder
                key={order._id}
                order={order}
                index={index}
                refetch={refetch}
              ></ManageOrder>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
