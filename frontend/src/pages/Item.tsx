import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// API
import { fetchSingleCar } from "../api";
import { ItemProps } from "../interfaces";

export const Item: React.FC<ItemProps> = ({ setCart, setCar, cart, car }) => {
  const [err, setErr] = useState<string>("");
  const { id } = useParams();
  const oneCar = car[0]?.cars.vehicles;
  const allInfo = car[0];

  // adding a new car to the cart
  const handleClick = async (e: any) => {
    e.preventDefault();

    if (!cart.some((c: any) => c._id === oneCar._id)) {
      setCart((prev: Array<object>) => [...prev, oneCar]);
    } else {
      setErr("Already in the cart");
    }
  };

  // fetching a single car info
  useEffect(() => {
    fetchSingleCar(id).then((res: any) => {
      // set the whole data
      setCar(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="wrapper">
      <h3>
        {oneCar?.make} {oneCar?.model} {oneCar?.year_model}
      </h3>
      <div>{oneCar?.price}</div>
      <div>Licensed: {oneCar?.licensed ? "Yes" : "No"}</div>
      <div>
        Location: {allInfo?.name}, {allInfo?.cars.location}
      </div>
      <Button size="small" focusRipple onClick={handleClick}>
        Add to the Cart
      </Button>
      <div style={{ marginTop: "2rem", color: "red" }}>{err}</div>
    </div>
  );
};
