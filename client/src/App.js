import { Route, Routes } from "react-router-dom";
import Avatar from "./Pages/Avatar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { useSelector } from "react-redux";

function App() {
  const { isAuth } = useSelector((ele) => ele.Auth);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={isAuth ? <Home /> : <Login />}></Route>
        <Route path="/signup" element={isAuth ? <Home /> : <Signup />}></Route>
        <Route path="/avatar" element={isAuth ? <Home /> : <Avatar />} />
        <Route path="/" element={isAuth ? <Home /> : <Login />} />
      </Routes>
    </div>
  );
}

export default App;
