import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// API
import { fetchData } from "./api";

import { NavBar } from "./components";
import { Home, Cart, Item } from "./pages";

export const App: React.FC = () => {
  const [car, setCar] = useState<Array<object>>([]);
  const [data, setData] = useState<Array<object>>([]);
  const [cart, setCart] = useState<Array<object>>([]);
  const [cars, setCars] = useState<Array<object>>([]);
  const [hide, setHide] = useState<boolean>(false);

  useEffect(() => {
    // creating a function to make it async and then call it
    async function fetching() {
      await fetchData().then((res: any) => {
        // set the whole data
        setData(res.data);
      });
    }

    fetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavBar setHide={setHide} hide={hide} cartLength={cart.length} />
      <Routes>
        <Route
          path="/"
          element={
            <Home data={data} cars={cars} setCars={setCars} hide={hide} />
          }
        />
        <Route path="/cart" element={<Cart setCart={setCart} cart={cart} />} />
        <Route
          path="/cars/:id"
          element={
            <Item car={car} setCar={setCar} setCart={setCart} cart={cart} />
          }
        />
      </Routes>
    </>
  );
};
