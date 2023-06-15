import "./App.css";
import { Routes, Route } from "react-router-dom";
import GoalInput from "./container/GoalInputPage/GoalInput";
import Editor from "./container/Onboard Screen/Editor";
import { Navbar } from "./utlis/Import";
import { EditorProvider } from "./context/EditorContext";

function App() {
  return (
    <>
      <EditorProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<GoalInput />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </EditorProvider>
    </>
  );
}

export default App;
