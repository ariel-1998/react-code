import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import FileTreeProvider from "./context/FileTreeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FileTreeProvider>
      <App />
    </FileTreeProvider>
  </React.StrictMode>
);
