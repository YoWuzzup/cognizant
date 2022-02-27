import axios from "axios";

// used the file but later moved to the mongoDB
const url = `http://localhost:5000/`;

export const fetchData = async () => {
  return axios.get(`${url}`);
};
