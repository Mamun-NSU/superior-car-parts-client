import React, { useState } from "react";

const ManageOrder = ({ order, index, refetch }) => {
  const [orders, setOrders] = useState([]);
  var isConfirmed = false;
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

  const confirmItem = (id) => {
    const proceed = window.confirm("Are you Confirm the order?");
    if (proceed) {
      isConfirmed = true;
    }
    console.log("Comfirem:", isConfirmed);
  }

  return (

    <tr>

      <th>{index + 1}</th>
      <td>{order.user_email}</td>
      <td>{order.order_name}</td>
      <td>{order.order_quantity}</td>
      <td>{order.order_price}</td>
      <td>{order.order_address}</td>
      <td>
        {
          order.paid && (
            <button
              onClick={() => confirmItem(order._id)}
              className="btn btn-sceondary"
            // disabled={order.paid}
            >
              Confirm: {order.order_name}
            </button>
          )
        }
        {
          !order.paid && (
            <button
              onClick={() => deleteItem(order._id)}
              className="btn btn-primary"
              disabled={order.paid}
            >
              Delete: {order.order_name}
            </button>
          )
        }

        {order.paid && (

          <div className="text-green-500">

            <p>Paid</p>
          </div>
        )}
      </td>

    </tr>

  );

};

export default ManageOrder;
