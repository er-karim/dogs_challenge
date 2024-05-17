import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

if (container) {
  root.render(<App />);
} else {
  console.error("Root element not found in the document.");
}
