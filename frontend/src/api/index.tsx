import axios from "axios";

// used the file but later moved to the mongoDB
// const url = `/warehouses.json`;
const url = `https://cognizanttesting.herokuapp.com/`;

export const fetchData = async () => {
  return axios.get(`${url}`);
};

export const fetchSingleCar = async (id: any) => {
  return axios.get(`${url}cars/${id}`);
};
