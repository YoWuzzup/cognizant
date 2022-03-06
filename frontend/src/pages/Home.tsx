import { useEffect } from "react";
import { SingleItem } from "../components";
import { HomeProps } from "../interfaces";

export const Home: React.FC<HomeProps> = ({ data, cars, hide, setCars }) => {
  useEffect(() => {
    // get all cars and sort them in by date
    const allCars = data
      .flatMap((car: any) => car.cars.vehicles)
      .sort((a: any, b: any) => {
        return (
          new Date(a.date_added).getTime() - new Date(b.date_added).getTime()
        );
      });

    setCars(allCars);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (data.length < 1)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading...
      </div>
    );

  return (
    <div className="home_wrapper">
      {cars &&
        cars.map((car: any, index) => {
          return (
            <div key={`${index}`}>
              <SingleItem car={car} hide={hide} />
            </div>
          );
        })}
    </div>
  );
};
