import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import PostsProvider from "./components/PostsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PostsProvider>
      <Router>
        <App />
      </Router>
    </PostsProvider>
  </React.StrictMode>
);
