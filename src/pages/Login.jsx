import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "../shared/SocialLogin";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("You have logged in successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message || "failed to log in , please try again");
      });
  };

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0  rounded-none p-10">
          <h2 className="text-2xl font-semibold text-center">
            {" "}
            Login your account
          </h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />

              <label className="label">
                <Link to={"/"} className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>

            {/* <div>
            <button onClick={handleGoogleSignIn} className="btn btn-neutral">
              Log In with <FaGoogle />
            </button>
          </div> */}

            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-none" type="submit">
                Login
              </button>
            </div>
          </form>
          <p className="text-center font-semibold">
            Dont’t Have An Account ?{" "}
            <Link className="text-red-500" to="/register">
              Register
            </Link>{" "}
          </p>
          <SocialLogin />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
