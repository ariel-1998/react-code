import React from "react";
import { FaFile } from "react-icons/fa";
import { FileTreeType } from "../utils/fileTree";
import styles from "./styles.module.css";
import { useFileTree } from "../context/FileTreeProvider";

type FileType = Omit<FileTreeType, "children">;

type FileProps = {
  file: FileType;
};

const File: React.FC<FileProps> = ({ file }) => {
  const { removeFile } = useFileTree();
  return (
    <div className={styles.file}>
      <FaFile className={styles.fileFill} /> {file.name}
      <button onClick={() => removeFile(file.id)}>remove file -</button>
    </div>
  );
};

export default File;
