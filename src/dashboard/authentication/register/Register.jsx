import { useForm } from "react-hook-form";
import { registerUser } from "../../../redux/features/users/userSlice";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {message} = useSelector(state => state.user);
  console.log(message)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(registerUser(data));
    // toast.success(message);
    // navigate("/admin/login");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-white ">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-xl border">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8"
              src="https://epickmovies.online/wp-content/uploads/2023/12/cropped-EpickMovies-Favicone.png"
              alt=""
            />
          </div>

          <h3 className="mt-3 text-xl font-medium text-center">Welcome Back</h3>

          <p className="mt-1 text-center">Register here</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full mt-4">
              <input
                type="text"
                {...register("full_name")}
                placeholder="Full Name"
                aria-label="Full Name"
                className="block w-full px-4 py-2 mt-2  placeholder-gray-500 bg-white border border-gray-500 rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="w-full mt-4">
              <input
                type="email"
                {...register("email")}
                placeholder="Email Address"
                aria-label="Email Address"
                className="block w-full px-4 py-2 mt-2  placeholder-gray-500 bg-white border border-gray-500 rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="w-full mt-4">
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                })}
                placeholder="Password"
                aria-label="Password"
                className="block w-full px-4 py-2 mt-2  placeholder-gray-500 bg-white border border-gray-500 rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              />
              {errors.password && <p role="alert" className="text-sm text-red-400">minimum length 8 char</p>}
            </div>

            <div className="flex items-center justify-between mt-4">
              <a
                href="#"
                className="text-sm text-gray-600  hover:text-gray-500"
              >
                Forget Password?
              </a>

              <button
                type="submit"
                className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center">
          <span className="text-sm">Dont have an account?</span>

          <a
            href="/admin/login"
            className="mx-2 text-sm font-medium text-blue-500 hover:underline"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
