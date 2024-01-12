import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { createRoot } from "react-dom/client";

import "./index.scss"
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
