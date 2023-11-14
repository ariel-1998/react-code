import React, { useState } from "react";
import Folder from "./Folder";
import { FileTreeFolderType, FileTreeType, fileTree } from "../utils/fileTree";

const FileTree: React.FC = () => {
  const [tree, setTree] = useState<FileTreeType>(fileTree);
  return <Folder folder={tree as FileTreeFolderType} />;
};

export default FileTree;
