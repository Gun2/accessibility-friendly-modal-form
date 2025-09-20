import "modern-normalize";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ModalFormPage from "./pages/Home/ModalFormPage";
import Home from "./pages/Home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
