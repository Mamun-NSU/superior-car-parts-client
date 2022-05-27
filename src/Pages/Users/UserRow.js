import React, { useState } from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
  const { _id, email, role } = user;
  const [users, setUsers] = useState([]);
  const makeAdmin = () => {
    fetch(`https://boiling-dawn-76009.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };

  const deleteItem = (id) => {
    const proceed = window.confirm(`"Are you sure DELETE ${email} form user list?"`);
    if (proceed) {
      const url = `https://boiling-dawn-76009.herokuapp.com/user/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = users.filter((user) => user._id !== id);
          setUsers(remaining);
        });
    }
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button
          onClick={() => deleteItem(_id)}
          className="btn btn-primary"
        >
          Delete User
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
