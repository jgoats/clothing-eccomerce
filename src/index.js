import React from "react";
import App from "./components/app/app.js";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";



let app = document.getElementById("app");
const root = createRoot(app);
root.render(<BrowserRouter><App /></BrowserRouter>)