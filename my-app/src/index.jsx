
import { App } from "./App";
import { createRoot } from "react-dom/client";
import "./index.scss"
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
