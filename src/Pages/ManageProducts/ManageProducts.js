import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ManageProduct from "./ManageProduct";

const ManageProducts = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("https://arcane-caverns-72469.herokuapp.com/parts", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   // parts.json
  //   fetch("https://arcane-caverns-72469.herokuapp.com/parts")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  // console.log(products);
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary text-center my-5">
        All products: {products.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Minimum Quantity</th>
              <th>Available Quantity</th>
              <th>Company Name</th>
              <th>Remove product</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ManageProduct
                key={product._id}
                product={product}
                index={index}
                refetch={refetch}
              ></ManageProduct>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
