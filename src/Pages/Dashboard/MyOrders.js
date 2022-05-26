import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  console.log(`http://localhost:5000/orders?user_email=${user.email}`);

  // pw: m.P$@-Y7+K23V?h
  //  use:882
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/orders?user_email=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user, navigate]);

  const deleteItem = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/orders/${id}`;
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
      <h2>Orders for: {user.displayName}</h2>
      <h2>My Orders: {orders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Email</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.order_name}</td>
                <td>{order.user_email}</td>
                <td>{order.order_quantity}</td>
                <td>{order.order_price}</td>
                <td>
                  {order.order_price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-xs btn-success">pay</button>
                    </Link>
                  )}
                  {order.order_price && order.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">
                          {order.transactionId}
                        </span>
                      </p>
                    </div>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => deleteItem(order._id)}
                    className="btn btn-primary"
                  >
                    Delete: {order.order_name}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
