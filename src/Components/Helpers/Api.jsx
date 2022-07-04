import axios from "axios";

const url = "https://eccomerce-erudito.herokuapp.com/api/v1/computers";

export const GetAllComputerApi = async () => {
  try {
    const res = await axios.get(url);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const GetOneComputerApi = async (_id) => {
  console.log(_id);
  try {
    const res = await axios.get(`${url}/${_id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
