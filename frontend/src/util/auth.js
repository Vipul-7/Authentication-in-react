import { redirect } from "react-router-dom";

const getAuthToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export default getAuthToken;

export const tokenLoader = () => {
  return getAuthToken();
};

export const checkAuthLoader = () => {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }

  return null;
};
