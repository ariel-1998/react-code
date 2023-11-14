import { v4 as uuidV4 } from "uuid";

export type FileTreeType = {
  id: string;
  name: string;
  type: "folder" | "file";
  children?: FileTreeType[];
};

export type FileTreeFolderType = FileTreeType & {
  type: "folder";
  children: FileTreeType[];
};

export type FileTreeFileType = Omit<FileTreeType, "children"> & {
  type: "file";
};

export const fileTree: FileTreeType = {
  id: uuidV4(),
  name: "root",
  type: "folder",
  children: [
    {
      id: uuidV4(),
      name: "folder1",
      type: "folder",
      children: [
        {
          id: uuidV4(),
          name: "file1-1.txt",
          type: "file",
        },
        {
          id: uuidV4(),
          name: "file1-2.txt",
          type: "file",
        },
      ],
    },
    {
      id: uuidV4(),
      name: "folder2",
      type: "folder",
      children: [
        {
          id: uuidV4(),
          name: "file2-1.txt",
          type: "file",
        },
        {
          id: uuidV4(),
          name: "file2-2.txt",
          type: "file",
        },
      ],
    },
    {
      id: uuidV4(),
      name: "file3.txt",
      type: "file",
    },
  ],
};
