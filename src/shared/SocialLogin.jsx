import React, { useContext } from "react";
import AuthContext from "../AuthContext/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("You have logged in successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="m-4">
      <div className="divider">OR</div>
      <button className="btn btn-neutral" onClick={handleGoogleSignIn}>
        Google
      </button>

      <ToastContainer />
    </div>
  );
};

export default SocialLogin;
