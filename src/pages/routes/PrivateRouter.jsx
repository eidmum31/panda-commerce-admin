import React, { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(loading);
  if (loading)
    return (
      <>
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </>
    );
  if (!user) return <Navigate to={"/"}></Navigate>;
  return children;
};

export default PrivateRouter;
