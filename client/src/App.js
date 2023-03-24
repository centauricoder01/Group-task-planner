import { Route, Routes } from "react-router-dom";
import Avatar from "./Pages/Avatar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/avatar" element={<Avatar />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
