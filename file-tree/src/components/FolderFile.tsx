import React, { useState, MouseEvent, useRef, KeyboardEvent } from "react";
import { FileTreeType } from "../utils/fileTree";
import { FaFolder, FaFile } from "react-icons/fa";
import FolderChildren from "./FolderChildren";
import styles from "./styles.module.css";
import { useFileTree } from "../context/FileTreeProvider";
import { v4 as uuidV4 } from "uuid";

type FolderFileProps = {
  folder: FileTreeType;
};

type ShowInpuType = { show: boolean; type?: FileTypes };
type FileTypes = "folder" | "file";

const FolderFile: React.FC<FolderFileProps> = ({ folder }) => {
  const [showChildren, setShowChildren] = useState(false);
  const [showInput, setShowInput] = useState<ShowInpuType>({ show: false });
  const addFileInputRef = useRef<HTMLInputElement | null>(null);
  const { addfile, removeFile } = useFileTree();

  const showAddFileInput = (
    e: MouseEvent<HTMLButtonElement>,
    type: FileTypes
  ) => {
    e.stopPropagation();
    setShowChildren(true);
    setShowInput({ show: true, type });
  };

  const hideInput = () => setShowInput({ show: false });

  const handleFolder = () => setShowChildren((prev) => !prev);

  const handleAddFile = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!addFileInputRef.current || !showInput.type) return;
    if (e.key === "Escape") return hideInput();
    if (e.key === "Enter") {
      const newFile: FileTreeType = {
        id: uuidV4(),
        name: addFileInputRef.current.value,
        type: showInput.type,
        children: showInput.type === "file" ? undefined : [],
      };
      addfile(folder.id, newFile);
      hideInput();
    }
  };

  const deleteFolder = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    removeFile(folder.id);
  };

  return (
    <>
      <div className={styles.folder} onClick={handleFolder}>
        <FaFolder className={styles.folderFill} /> {folder.name}
        <button onClick={(e) => showAddFileInput(e, "file")}>Add file +</button>
        <button onClick={(e) => showAddFileInput(e, "folder")}>
          Add folder +
        </button>
        {folder.id !== "root" && (
          <button onClick={deleteFolder}>remove folder -</button>
        )}
      </div>
      {showChildren && (
        <div className={styles.children}>
          {showInput.show && (
            <>
              <span>
                {showInput.type === "folder" ? (
                  <FaFolder className={styles.folderFill} />
                ) : (
                  <FaFile className={styles.fileFill} />
                )}
              </span>
              <input
                autoFocus
                onBlur={hideInput}
                type="text"
                ref={addFileInputRef}
                onKeyDown={handleAddFile}
              />
            </>
          )}
          <FolderChildren folder={folder} />
        </div>
      )}
    </>
  );
};

export default FolderFile;
