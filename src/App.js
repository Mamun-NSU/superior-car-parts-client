import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Blogs from "./Pages/Blogs/Blogs";
import NotFound from "./Pages/Shared/NotFound";
import Purchase from "./Pages/Purchase/Purchase";
import AddProduct from "./Pages/AddProduct/AddProduct";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddReview from "./Pages/Dashboard/AddReview";
import MyPortfolio from "./Pages/Dashboard/MyPortfolio";
import Users from "./Pages/Users/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import ManageOrders from "./Pages/ManageOrders/ManageOrders";
import ManageProducts from "./Pages/ManageProducts/ManageProducts";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home />} />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="history" element={<MyPortfolio></MyPortfolio>}></Route>
        </Route>
        <Route path="/parts/:partId" element={<Purchase></Purchase>} />
        <Route path="add" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>} />
        <Route path="/manageOrders" element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>} />
        <Route
          path="/manageProducts"
          element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}
        />
        <Route path="blogs" element={<Blogs></Blogs>} />
        <Route path="about" element={<About></About>} />
        <Route
          path="users"
          element={
            <RequireAdmin>
              <Users></Users>
            </RequireAdmin>
          }
        />
        <Route path="login" element={<Login></Login>} />
        <Route path="signup" element={<SignUp></SignUp>} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
