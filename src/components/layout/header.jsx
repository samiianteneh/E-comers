import { useState } from "react";
import { Link, NavLink } from "react-router-dom"; // Adjust the import as per your routing setup
import Number from "./number";
import { IoCartSharp } from "react-icons/io5";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const tokens = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");
  return (
    <nav className="bg-gray-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {role === "admin" ? (
          <>
            <Link
              className="text-white text-3xl font-bold font-['Agbalumo']"
              to={"/AdminHome"}
            >
              E Comerse
            </Link>
            .
          </>
        ) : (
          <Link
            to="/"
            className="text-white text-3xl font-bold font-['Agbalumo']"
          >
            E Comerse
          </Link>
        )}

        <div className="flex items-center">
          <div className="hidden md:flex space-x-4">
            {tokens && name ? (
              <>
                {role === "admin" ? (
                  <></>
                ) : (
                  <>
                    <NavLink
                      to="/Cart"
                      className="dark:text-white text-gray-800 hover:text-2xl px-3 font-bold text-xl"
                    >
                      <div className="flex gap-3 items-center">
                        <Number /> <IoCartSharp /> Cart
                      </div>
                    </NavLink>

                    <NavLink
                      to="/order"
                      className="dark:text-white text-gray-800 hover:text-2xl px-3 font-bold text-xl"
                    >
                      order
                    </NavLink>
                  </>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="hidden md:flex space-x-4">
            {tokens && name ? (
              <div className="relative">
                <button
                  onClick={toggleMenu}
                  className="flex items-center text-white mr-4 focus:outline-none"
                >
                  <img
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQndWs3OIrdkNNxWtZIqtZCyJZZkVOdJar5JePGzqw&s"
                    }
                    alt={`$ {name}'s Avatar`}
                    className="h-8 w-8 rounded-full mr-2"
                  />
                  <div> {name}</div>
                </button>

                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 bg-gray-700 p-2 rounded-md">
                    <Link
                      to={"/#"}
                      className="block text-white hover:text-gray-300 py-1"
                    >
                      Profile
                    </Link>
                    <button
                      className="block text-white hover:text-gray-300 py-1"
                      onClick={() => {
                        localStorage.clear();
                        window.location.href = "/";
                        // Handle logout or any other user-related action
                      }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <NavLink
                  to="/Signin"
                  className="dark:text-white text-gray-800 hover:text-2xl px-3 font-bold text-xl"
                >
                  Signin
                </NavLink>
                <NavLink
                  to="/Signup"
                  className="dark:text-white text-gray-800 hover:text-2xl px-3 font-bold text-xl"
                >
                  Signup
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 right-4 bg-gray-700 p-4 rounded-md">
              {tokens && name ? (
                <>
                  <button
                    onClick={toggleMenu}
                    className="flex items-center text-white mr-4 focus:outline-none"
                  >
                    <img
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQndWs3OIrdkNNxWtZIqtZCyJZZkVOdJar5JePGzqw&s"
                      }
                      alt={`$ {name}'s Avatar`}
                      className="h-8 w-8 rounded-full mr-2"
                    />
                    <div> {name}</div>
                  </button>
                  {role === "admin" ? (
                    <></>
                  ) : (
                    <>
                      <NavLink
                        to="/Cart"
                        className="block text-white hover:text-gray-300 py-2"
                      >
                        Cart
                      </NavLink>
                      <NavLink
                        to="/order"
                        className="block text-white hover:text-gray-300 py-2"
                      >
                        order
                      </NavLink>
                    </>
                  )}

                  <button
                    className="block text-white hover:text-gray-300 py-2"
                    onClick={() => {
                      localStorage.clear();
                      window.location.href = "/";
                      // Handle logout or any other user-related action
                    }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <>
                    <NavLink
                      to="/Signin"
                      className="block text-white hover:text-gray-300 py-2"
                    >
                      Signin
                    </NavLink>
                    <NavLink
                      to="/Signup"
                      className="block text-white hover:text-gray-300 py-2"
                    >
                      Signup
                    </NavLink>
                  </>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
