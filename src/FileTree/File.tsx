import React from "react";
import { FileTreeFileType } from "../utils/fileTree";
import { FaFile } from "react-icons/fa6";
import styles from "./styles.module.css";

type FileProps = {
  file: FileTreeFileType;
};

const File: React.FC<FileProps> = ({ file }) => {
  return (
    <div className={styles.file}>
      <FaFile className={styles.fileFill} /> {file.name}
      {/* <button >delete -</button> */}
    </div>
  );
};

export default File;
