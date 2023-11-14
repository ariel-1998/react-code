import React from "react";
import { FileTreeType } from "../utils/fileTree";
import FolderFile from "./FolderFile";
import File from "./File";

type FolderChildrenProps = {
  folder: FileTreeType;
};

const FolderChildren: React.FC<FolderChildrenProps> = ({ folder }) => {
  return (
    <>
      {folder.children?.map((child) => {
        if (child.type === "folder")
          return <FolderFile key={child.id} folder={child} />;
        if (child.type === "file") return <File file={child} key={child.id} />;
      })}
    </>
  );
};

export default FolderChildren;
