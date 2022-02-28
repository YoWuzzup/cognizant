import axios from "axios";

// used the file but later moved to the mongoDB
const url = `http://localhost:5000/`;

export const fetchData = async () => {
  return axios.get(`${url}`);
};

export const fetchSingleCar = async (id: any) => {
  return axios.get(`${url}cars/${id}`);
};
