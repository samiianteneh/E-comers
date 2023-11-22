import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { URLST } from "../../../../constants/urls";

function AddCatagoryForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit, // Correct property name
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post(`${URLST}/category`, {
        categoryName: data.name,
        description: data.Description,
      })
      .then((response) => {
        console.log("Response Data", response.data);
        if (response.data) {
          navigate("/manageCart");
        }
      })
      .catch((err) => {
        console.error("Error", err);
      });
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full px-10 py-5">
        <div className=" py-2">
          <div>
            <label>Title</label>
          </div>
          <div className=" pt-2">
            <input
              className="w-full h-10 pl-2 border-[1px] border-black rounded bg-white  dark:text-black"
              type="text"
              placeholder="Type here"
              id="name"
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
                  message: "Please enter a valid name with only letters.",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
        </div>
        <div className=" py-2">
          <div>
            <label>Description</label>
          </div>
          <div>
            <input
              className="w-full h-10 pl-2 border-[1px] border-black rounded  dark:text-black bg-white"
              type="text"
              id="Description"
              placeholder="Type here"
              {...register("Description", {
                required: "Description is requierd",
                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
                  message:
                    "Description should only contain letters, spaces, hyphens, and apostrophes.",
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
