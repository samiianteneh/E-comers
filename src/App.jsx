import "./App.css";
import Header from "./components/layout/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Detail from "./pages/Detail/Detail";
import Signup from "./pages/SignUp/Signup";
import Signin from "./pages/signin/signin";
import Cart from "./pages/Cart/cart";
import Order from "./pages/order/order";
import Admin from "./pages/admin/admin";
import NotFound from "./pages/NotFound";

function App() {
  const tokens = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");
  return (
    <BrowserRouter>
      <div className="App relative">
        <div className=" z-30 fixed w-full ">
          <Header />
        </div>
        <div className=" dark:bg-gray-900 dark:text-white bg-slate-100 text-black">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Admin/" element={<Admin />} />
            {tokens && name ? (
              <>
                <>{role === "admin" ? <></> : <></>}</>
                <>
                  <Route path="/Detail/:id" element={<Detail />} />
                  <Route path="/Cart" element={<Cart />} />
                  <Route path="/Order" element={<Order />} />
                </>
              </>
            ) : (
              <>
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Signin" element={<Signin />} />
              </>
            )}

            {/* <Route path="/Sbody/:id" element={<Sbody />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
