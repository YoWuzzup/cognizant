import { useEffect } from "react";
import { SingleItem } from "../components";
import { HomeProps } from "../interfaces";

export const Home: React.FC<HomeProps> = ({ data, cars, hide, setCars }) => {
  useEffect(() => {
    const allCars = data
      .flatMap((car: any) => car.cars.vehicles)
      // sorting in a added date order
      .sort((a: any, b: any) => {
        return (
          new Date(a.date_added).getTime() - new Date(b.date_added).getTime()
        );
      });

    setCars(allCars);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="home_wrapper">
      {cars.map((car: any, index) => {
        return <SingleItem key={`${index}`} car={car} hide={hide} />;
      })}
    </div>
  );
};
