// import { useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const tokens = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");

  return (
    <div className=" h-16 bg-gray-100 z-10 py-3 w-full flex justify-between ">
      <div
        className=" 
        mx-4  h-10 w-auto px-10  flex items-center font-['Agbalumo']
        justify-center rounded-lg text-4xl font-bold"
      >
        {/* <link to={"/ "}>E Comerse</link> */}
        <Link to={"/"}>E Comerse</Link>.
      </div>
      <div>{tokens && name ? <>{name}</> : <></>}</div>
      <div>
        {role === "admin" ? <p>admin</p> : role === "user" ? <p>user</p> : null}
      </div>
      <div className="flex ">
        {tokens && name ? (
          <>
            <div
              className=" 
        mx-4 bg-blue-700 text-white h-10 w-20 flex items-center 
        justify-center rounded-lg text-lg font-bold"
            >
              <button>
                <Link to={"/Cart"}> cart</Link>
              </button>
            </div>
            <div
              className=" 
        mx-4 bg-blue-700 text-white h-10 w-20 flex items-center 
        justify-center rounded-lg text-lg font-bold"
            >
              <button>
                <Link to={"/Order"}> Orders</Link>
              </button>
            </div>
            <div
              className=" 
        mx-4 bg-blue-700 text-white h-10 w-20 flex items-center 
        justify-center rounded-lg text-lg font-bold"
            >
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.href = "/";
                  // Navigate("/");
                }}
              >
                LogOut
              </button>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div
              className=" 
        mx-4 bg-blue-700 text-white h-10 w-20 flex items-center 
        justify-center rounded-lg text-lg font-bold"
            >
              <button>
                <Link to={"/Signin"}> Sign in</Link>
              </button>
            </div>
            <div
              className=" 
        mx-4 bg-blue-700 text-white h-10 w-20 flex items-center 
        justify-center rounded-lg text-lg font-bold"
            >
              <button>
                <Link to={"/Signup"}> Sign Up</Link>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
