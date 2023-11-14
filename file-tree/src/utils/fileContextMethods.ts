import { FileTreeType } from "./fileTree";

export const removeFileLogic = (
  fileId: string,
  fileTree: FileTreeType
): FileTreeType => {
  //if its the root Folder than do not delete
  if (fileId === "root") return fileTree;
  return {
    ...fileTree,
    children: fileTree.children
      ?.map((child) => {
        if (child.children) {
          // Return the result of the recursive call
          return removeFileLogic(fileId, child);
        }
        return child;
      })
      .filter((child) => child.id !== fileId),
  };
};

export const addFileLogic = (
  parentId: string,
  newFile: FileTreeType,
  files: FileTreeType
): FileTreeType => {
  if (!files.children) return files;
  if (parentId === files.id) {
    return { ...files, children: [newFile, ...files.children] };
  }
  return {
    ...files,
    children: files.children.map((file: any) => {
      if (file.children) return addFileLogic(parentId, newFile, file);
      return file;
    }),
  };
};
