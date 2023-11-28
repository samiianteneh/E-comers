import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { URLST } from "../../../../constants/urls";

function AddCatagoryForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    axios
      .post(`${URLST}/category`, {
        categoryName: data.name,
        description: data.Description,
      })
      .then((response) => {
        // console.log("Response Data", response.data);
        if (response.data) {
          alert("Successfully created");
          // Reset the form fields
          e.target.reset();
          // Redirect to the desired page on successful submission
          // navigate("/AddCatagory");
        }
      })
      .catch((err) => {
        console.error("Error", err);
      });
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full px-10 py-5">
        <div className="py-2">
          <div>
            <label>Title</label>
          </div>
          <div className="pt-2">
            <input
              className="w-full h-10 pl-2 border-[1px] border-black rounded bg-white dark:text-black"
              type="text"
              placeholder="Type here"
              id="name"
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[A-Za-z0-9\s\-'.!@#$%^&*()_+=<>?/\\";:{}|[\],`~]+$/,
                  message: "Please enter a valid title.",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
        </div>
        <div className="py-2">
          <div>
            <label>Description</label>
          </div>
          <div>
            <input
              className="w-full h-10 pl-2 border-[1px] border-black rounded dark:text-black bg-white"
              type="text"
              id="Description"
              placeholder="Type here"
              {...register("Description", {
                required: "Description is required",
                pattern: {
                  value: /^[A-Za-z0-9\s\-'.!@#$%^&*()_+=<>?/\\";:{}|[\],`~]+$/,
                  message: "Please enter a valid description.",
                },
              })}
            />
            {errors.Description && (
              <p className="text-red-500 text-sm">
                {errors.Description.message}
              </p>
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

export default AddCatagoryForm;
