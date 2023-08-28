import { Route, Routes } from "react-router-dom";
import LogIn from "./page/LogIn";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogIn />}></Route>
      </Routes>
    </div>
  );
}

export default App;
