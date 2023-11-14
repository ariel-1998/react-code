import React, { MouseEvent, useState, KeyboardEvent, useRef } from "react";
import { FileTreeFolderType, FileTreeType } from "../utils/fileTree";
import { FaFile, FaFolder } from "react-icons/fa6";
import FolderChildren from "./FolderChildren";
import styles from "./styles.module.css";
import { v4 as uuidV4 } from "uuid";

type FolderProps = {
  folder: FileTreeFolderType;
};

type AddFileInputType = {
  show: boolean;
  type: "folder" | "file";
};

const Folder: React.FC<FolderProps> = ({ folder }) => {
  const [folderState, setFolderState] = useState<FileTreeFolderType>({
    ...folder,
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const [openFolder, setOpenFolder] = useState(false);
  const [addFileInput, setAddFileInput] = useState<AddFileInputType>({
    show: false,
    type: "folder",
  });
  const onFolderClick = () => setOpenFolder((prev) => !prev);

  const addFile = (
    e: MouseEvent<HTMLButtonElement>,
    type: "folder" | "file"
  ) => {
    e.stopPropagation();
    setOpenFolder(true);
    setAddFileInput({ show: true, type });
  };

  const onInputBlur = () => setAddFileInput({ show: false, type: "file" });

  const createFile = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") setAddFileInput({ show: false, type: "file" });
    if (e.key === "Enter") {
      if (!inputRef.current) return;
      const newFile: FileTreeType = {
        id: uuidV4(),
        name: inputRef.current.value,
        type: addFileInput.type,
        children: addFileInput.type === "file" ? undefined : [],
      };
      setFolderState({
        ...folderState,
        children: [newFile, ...folderState.children],
      });

      setAddFileInput({ show: false, type: "file" });
    }
  };

  return (
    <div>
      <div className={styles.folder} onClick={onFolderClick}>
        <FaFolder className={styles.folderFill} />
        <span>{folderState.name}</span>
        <button onClick={(e) => addFile(e, "file")}>Add File +</button>
        <button onClick={(e) => addFile(e, "folder")}>Add Folder +</button>
      </div>
      <div className={styles.children}>
        {addFileInput.show && (
          <div>
            {addFileInput.type === "file" && (
              <FaFile className={styles.fileFill} />
            )}
            {addFileInput.type === "folder" && (
              <FaFolder className={styles.folderFill} />
            )}
            <input
              type="text"
              autoFocus
              onBlur={onInputBlur}
              onKeyDown={createFile}
              ref={inputRef}
            />
          </div>
        )}
        {openFolder && <FolderChildren folder={folderState} />}
      </div>
    </div>
  );
};

export default Folder;
