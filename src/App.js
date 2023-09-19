import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Spinner from "components/Spinner";

const Home = lazy(() => import("./page/Home"));
const LogIn = lazy(() => import("./page/LogIn"));
const SignUp = lazy(() => import("./page/SignUp"));
const Order = lazy(() => import("./page/Order"));
const Cart = lazy(() => import("./page/Cart"));
const MyPage = lazy(() => import("./page/MyPage"));
const ProductDetail = lazy(() => import("./page/ProductDetail"));
const Temporary = lazy(() => import("./page/Temporary"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/temp" element={<Temporary />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
