import React from "react";
import { toast } from "react-toastify";
import useProducts from "../../hooks/useProducts";

const ManageProduct = (product, index, refetch) => {
  const [products, setProducts] = useProducts();
  const deleteItem = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://arcane-caverns-72469.herokuapp.com/parts/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Part deleted successfully");
            refetch();
          } else {
            toast.error("Failed to delete the part");
          }
          const remaining = products.filter(
            (product) => product.product._id !== id
          );
          setProducts(remaining);
        });
    }
  };

  return (
    <tr>
      <th>{product.index + 1}</th>
      <td>{product.product.name}</td>
      <td>{product.product.price}</td>
      <td>{product.product.minimum_quantity}</td>
      <td>{product.product.available_quantity}</td>
      <td>{product.product.company_name}</td>
      <td>
        <button
          onClick={() => deleteItem(product.product._id)}
          className="btn btn-primary"
        >
          Delete: {product.product.name}
        </button>
      </td>
    </tr>
  );
};

export default ManageProduct;
