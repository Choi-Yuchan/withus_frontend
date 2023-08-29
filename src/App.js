import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import LogIn from "./page/LogIn";
import SignUp from "./page/SignUp";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
