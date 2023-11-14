import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import ImplementCustomUseMemo from "./CustomUseMemo.tsx/ImplementCustomUseMemo";
import FileTree from "./FileTree/FileTree";

const App: React.FC = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/custom-usememo" element={<ImplementCustomUseMemo />} />
        <Route path="/file-tree" element={<FileTree />} />
        <Route path="*" Component={ComponentsList} />
      </Routes>
      <ComponentsList />
    </div>
  );
};

export default App;

function ComponentsList() {
  return (
    <div>
      <h2>Components</h2>
      <ul>
        <li>
          <NavLink to={"/custom-usememo"}>CustomUseMemo</NavLink>
          <NavLink to={"/file-tree"}>file tree</NavLink>
        </li>
      </ul>
    </div>
  );
}
