import React from "react";

const ManageOrder = ({ order, index, refetch }) => {
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
          <button class="btn btn-xs">Remove Order</button>
        </td>
      </tr>
    </div>
  );
};

export default ManageOrder;
