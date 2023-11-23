import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import { URLST } from "../../constants/urls";
import axios from "axios";
import { Button, Spin } from "antd";

function SigninForm() {
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //

  const onSubmit = (e) => {
    axios
      .post(`${URLST}/users/login`, {
        email: e.email,
        password: e.password,
      })
      .then((Response) => {
        console.log("Response Data", Response);
        // console.log(" message", Response.data.message);
        // console.log(" token", Response.data.user.user.role.roleName);
        localStorage.setItem("token", Response.data.token);
        localStorage.setItem("name", Response.data.user.user.name);
        localStorage.setItem("role", Response.data.user.user.role.roleName);
        localStorage.setItem("userID", Response.data.user.user.id);
        const role = localStorage.getItem("role");
        if (role === "admin") {
          window.location.href = "/AdminHome";
        } else {
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" lg:w-[800px] md:w-[500px] sm:w-[300px]"
      >
        <div>
          <div>
            <label>Email</label>
          </div>
          <div>
            <input
              className="w-full h-8 pl-2 border-[1px] border-black rounded dark:text-black bg-white"
              type="text"
              id="email"
              placeholder="Type here"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                  message: "Invalid email address. Please enter a valid email.",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <div>
            <label>Password</label>
          </div>
          <div>
            <input
              className="w-full h-8 pl-2 border-[1px] border-black rounded dark:text-black bg-white"
              type="password"
              id="password"
              placeholder="Type here"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
        </div>

        <div className="grid  justify-center mt-4 space-y-2">
          <div>
            <button
              onClick={() => setLoading((prev) => !prev)}
              className="px-4 py-2 text-white bg-blue-500 rounded"
              type="submit"
            >
              Log in
            </button>
            {/* <Button
              type="submit"
              onClick={() => {
                setLoading((prev) => !prev);
              }}
              className="px-4 py-2 text-white bg-blue-600 rounded"
            >
              Sign In
            </Button> */}
          </div>
          <div className="flex justify-center">
            {" "}
            {loading && <Spin size="large" loading={loading} />}
          </div>
        </div>
      </form>
    </div>
  );
}

export default SigninForm;
