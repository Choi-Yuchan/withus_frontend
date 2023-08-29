import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import LogIn from "./page/LogIn";
import ProductDetail from "./page/ProductDetail";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
