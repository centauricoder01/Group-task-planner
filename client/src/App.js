import { Route, Routes } from "react-router-dom";
import Avatar from "./Pages/Avatar";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/avatar" element={<Avatar />} />
      </Routes>
    </div>
  );
}

export default App;
