import React, { useState } from "react";

const ManageOrder = ({ order, index, refetch }) => {
  const [orders, setOrders] = useState([]);
  const deleteItem = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://boiling-dawn-76009.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        });
    }
  };

  return (
    <div>
      <tr>
        <th>{index + 1}</th>
        <td>{order.user_email}</td>
        <td>{order.order_name}</td>
        <td>{order.order_quantity}</td>
        <td>{order.order_price}</td>
        <td>{order.order_address}</td>
        <td>
          <button
            onClick={() => deleteItem(order._id)}
            className="btn btn-primary"
          >
            Delete: {order.order_name}
          </button>
        </td>
      </tr>
    </div>
  );
};

export default ManageOrder;
