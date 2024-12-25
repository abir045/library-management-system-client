import React, { useContext } from "react";
import AuthContext from "../AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location?.pathname}></Navigate>;
};

export default PrivateRoute;
