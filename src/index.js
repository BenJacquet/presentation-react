import React from "react";
import { createRoot } from "react-dom/client";
import ProductPage from "./Main";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<ProductPage />);