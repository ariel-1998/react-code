import React from "react";
import { FileTreeFileType, FileTreeFolderType } from "../utils/fileTree";
import Folder from "./Folder";
import File from "./File";

type FolderChildrenProps = {
  folder: FileTreeFolderType;
};

const FolderChildren: React.FC<FolderChildrenProps> = ({ folder }) => {
  return (
    <div>
      {folder.children.map((child) => {
        if (child.type === "folder")
          return <Folder key={child.id} folder={child as FileTreeFolderType} />;
        else return <File key={child.id} file={child as FileTreeFileType} />;
      })}
    </div>
  );
};

export default FolderChildren;
