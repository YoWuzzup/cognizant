import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// API
import { fetchData } from "./api";

import { NavBar } from "./components";
import { Home, Cart, Item } from "./pages";

export const App: React.FC = () => {
  const [data, setData] = useState<Array<object>>([]);
  const [cars, setCars] = useState<Array<object>>([]);
  const [hide, setHide] = useState<boolean>(false);

  useEffect(() => {
    // creating a function to make it async and then call it
    async function fetching() {
      await fetchData().then((res: any) => {
        setData(res.data);
      });
    }
    fetching();
  }, []);

  return (
    <>
      <NavBar setHide={setHide} hide={hide} />
      <Routes>
        <Route
          path="/"
          element={
            <Home data={data} cars={cars} setCars={setCars} hide={hide} />
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cars/:id" element={<Item />} />
      </Routes>
    </>
  );
};
