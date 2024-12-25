import axios from "axios";
import { useContext } from "react";
import AuthContext from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
};
