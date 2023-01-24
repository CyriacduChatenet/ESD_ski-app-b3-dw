import React from "react";
import ReactDOM from "react-dom/client";

import Router from "@/router/router";

import "@/styles/index.css";
import { InputContextProvider } from "./contexts/inputs.context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <InputContextProvider>
      <Router />
    </InputContextProvider>
  </React.StrictMode>
);
