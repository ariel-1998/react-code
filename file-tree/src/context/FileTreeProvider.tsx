import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { FileTreeType, fileTree } from "../utils/fileTree";
import { addFileLogic, removeFileLogic } from "../utils/fileContextMethods";

// type FolderType = FileTreeType & { children: FileTreeType[] };
type FileTreeContextProps = {
  files: FileTreeType;
  addfile: (parentId: string, newFile: FileTreeType) => void;
  removeFile: (fileId: string) => void;
};

const FileTreeContext = createContext<FileTreeContextProps | null>(null);

export const useFileTree = () => {
  const context = useContext(FileTreeContext);
  if (!context)
    throw new Error("useFileTree must be used insied FileTreeProvider");
  return context;
};

type FileTreeProviderProps = {
  children: ReactNode;
};

const FileTreeProvider: React.FC<FileTreeProviderProps> = ({ children }) => {
  const [files, setFiles] = useState<FileTreeType>(fileTree);

  const addfile = (parentId: string, newFile: FileTreeType) => {
    setFiles((prev) => addFileLogic(parentId, newFile, prev));
  };

  const removeFile = (fileId: string) => {
    setFiles((prev) => removeFileLogic(fileId, prev));
  };

  return (
    <FileTreeContext.Provider value={{ files, addfile, removeFile }}>
      {children}
    </FileTreeContext.Provider>
  );
};

export default FileTreeProvider;
