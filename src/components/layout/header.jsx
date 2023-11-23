// import { useEffect } from "react";
import { Button, Dropdown } from "antd";
import { Link } from "react-router-dom";

function Header() {
  const tokens = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  const items = [
    {
      key: "1",
      label: (
        <Link rel="noopener noreferrer" to={"/Cart"}>
          Cart
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link rel="noopener noreferrer" to={"/Order"}>
          Order
        </Link>
      ),
    },
    {
      key: "3",
      onClick: handleLogout,
      label: <Link to={"/"}>Log Out</Link>,
    },
  ];

  return (
    <div className=" h-16 bg-gray-100 z-10 py-3 w-full flex justify-between ">
      <div
        className=" 
        mx-4  h-10 w-auto px-10  flex items-center font-['Agbalumo']
        justify-center rounded-lg text-4xl font-bold"
      >
        {role === "admin" ? (
          <>
            <Link to={"/AdminHome"}>E Comerse</Link>.
          </>
        ) : (
          <>
            <Link to={"/"}>E Comerse</Link>.
          </>
        )}
      </div>
      <div>{tokens && name ? <>{name}</> : <></>}</div>

      <div className="flex ">
        {tokens && name ? (
          <>
            {role === "admin" ? (
              <>
                <div
                  className=" 
        mx-4 bg-blue-700 text-white h-10 w-20 flex items-center 
        justify-center rounded-lg text-lg font-bold"
                >
                  <button
                    onClick={() => {
                      localStorage.clear();
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
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottomRight"
                  arrow
                >
                  <Button
                    className=" 
        mx-4 bg-blue-700 text-white h-10 px-2 flex items-center 
        justify-center rounded-lg text-lg font-bold"
                  >
                    {name}
                  </Button>
                </Dropdown>
              </>
            )}
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
