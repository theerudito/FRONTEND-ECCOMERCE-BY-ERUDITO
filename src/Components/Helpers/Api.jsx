import axios from "axios";

const url = "http://localhost:5000/COMPUTER";

export const GetAllComputer = async () => {
  try {
    const res = await axios.get(url);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const GetOneComputer = async (id) => {
  try {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
