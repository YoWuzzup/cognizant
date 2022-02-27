import { Route, Routes } from "react-router-dom";

import { NavBar } from "./components";
import { Home, Cart, Item } from "./pages";

export const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cars/:id" element={<Item />} />
      </Routes>
    </>
  );
};
