import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { URLST } from "../../constants/urls";

function SignupForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //

  const onSubmit = (e) => {
    axios
      .post(
        `${URLST}/users`,
        {
          name: e.name,
          email: e.email,
          file: e.file[0],
          password: e.password,
        },
        {
          headers: {
            "Content-type": "multipart/form-data; ",
          },
        }
      )
      .then((Response) => {
        console.log("Response Data", Response);
        // console.log("Response message", Response.data.message);
        alert(Response.data.message);
        if (Response.data.message === "Successfuly created") {
          navigate("/Signin");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  //   console.log(data);

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" lg:w-[800px] md:w-[500px] sm:w-[300px]"
      >
        <div>
          <div>
            <label>Full Name</label>
          </div>
          <div className=" ">
            <input
              className="w-full h-8 pl-2 border-[1px] border-black rounded bg-white"
              type="text"
              placeholder="Type here"
              id="name"
              {...register("name", {
                required: "Full name is requierd",
                pattern: {
                  value: /^[A-Za-z]+ [A-Za-z]+$/,
                  message:
                    "Please enter your first and last name separated by a space.",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
        </div>

        <div>
          <div>
            <label>Email</label>
          </div>
          <div>
            <input
              className="w-full h-8 pl-2 border-[1px] border-black rounded bg-white"
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
              className="w-full h-8 pl-2 border-[1px] border-black rounded bg-white"
              type="password"
              id="password"
              placeholder="Type here"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/,
                  message:
                    "Password must be at least 8 characters long and contain at least one number, one symbol, and one capital letter.",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
        </div>

        <div>
          <div>
            <label>Photo</label>
          </div>
          <div>
            <input
              className="w-full h-8 pl-2 border-[1px] border-black rounded bg-white"
              type="file"
              id="file"
              {...register("file", {
                required: "Photo is required",
              })}
            />
            {errors.file && (
              <p className="text-red-500 text-sm">{errors.file.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
