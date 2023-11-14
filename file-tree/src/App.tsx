import FolderFile from "./components/FolderFile";
import { useFileTree } from "./context/FileTreeProvider";

function App() {
  const { files } = useFileTree();
  return <FolderFile folder={files} />;
}

export default App;
