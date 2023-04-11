import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Nav from "./components/Nav";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <body className="bg-white">
      <Nav />
      <App />
    </body>
  </React.StrictMode>
);
