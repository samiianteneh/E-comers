// Import necessary components
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import your components
import Header from "./components/layout/Header";
import AddProduct from "./pages/admin/Products/addProduct/AddProduct";
import AddCatagory from "./pages/admin/catagory/addCatagory/AddCatagory";
import ManageProducts from "./pages/admin/Products/manageProduct/ManageProducts";
import EditProduct from "./pages/admin/Products/EditProduct/EditProduct";
import Home from "./pages/Home/home";
import Detail from "./pages/Detail/Detail";
import Signup from "./pages/SignUp/Signup";
import Signin from "./pages/signin/signin";
import Cart from "./pages/Cart/cart";
import Order from "./pages/order/order";
import ManageCatagory from "./pages/admin/catagory/manageCatagory/manageCatagory";
import EditCatagory from "./pages/admin/catagory/editCatagory/editCatagory";
import AdminHome from "./pages/admin/adminhome/adminHome";

function App() {
  const tokens = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");
  console.log(role, "role");

  return (
    <Router>
      <div className="App relative">
        <div className="z-30 fixed w-full">
          <Header />
        </div>
        <div className="dark:bg-gray-900 dark:text-white bg-slate-100 text-black sm:h-[100vh]  md:h-[100vh] h-[100vh] lg:h-full xl:h-full ">
          <Routes>
            {role === "admin" ? (
              <>
                <Route path="/" element={<AdminHome />} />
                <Route path="/ManageCatagory" element={<ManageCatagory />} />
                <Route path="/EditCatagory/:id" element={<EditCatagory />} />
                <Route path="/AddProduct" element={<AddProduct />} />
                <Route path="/AddCatagory" element={<AddCatagory />} />
                <Route path="/ManageProducts" element={<ManageProducts />} />
                <Route path="/EditProduct/:id" element={<EditProduct />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Home />} />
                {tokens && name ? (
                  <>
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/order" element={<Order />} />
                  </>
                ) : (
                  <>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signin" element={<Signin />} />
                  </>
                )}
              </>
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
