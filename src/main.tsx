import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Nav from "./components/Nav";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Nav />
    <App />
    <ToastContainer />
  </React.StrictMode>
);
