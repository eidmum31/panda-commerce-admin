import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./pages/routes/router.jsx";
import Authprovider from "./pages/Providers/Authprovider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container mx-auto">
      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>
    </div>
  </React.StrictMode>
);
