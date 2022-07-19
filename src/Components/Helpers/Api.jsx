import axios from "axios";

const urlProducts = "https://eccomerce-erudito.herokuapp.com/api/v1/computers";

const urlUsers = "https://eccomerce-erudito.herokuapp.com/api/v1/users";

export const GetAllComputerApi = async () => {
  try {
    const res = await axios.get(urlProducts);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const GetOneComputerApi = async (_id) => {
  console.log(_id);
  try {
    const res = await axios.get(`${urlProducts}/${_id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const LoginAPI = async (data) => {
  try {
    const res = await axios.post(urlUsers, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
