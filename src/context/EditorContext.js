import { createContext, useState } from "react";

const EditorContext = createContext({});

export const EditorProvider = ({ children }) => {
  const [data, setData] = useState("");
  return (
    <EditorContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorContext;
