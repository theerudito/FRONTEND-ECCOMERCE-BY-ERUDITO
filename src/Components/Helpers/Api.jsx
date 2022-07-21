import axios from "axios";

const urlProducts = "https://eccomerce-erudito.herokuapp.com/api/v1/computers";

//const urlRegisterLocal = "http://localhost:5000/api/v1/users/register";
const urlRegister =
  "https://eccomerce-erudito.herokuapp.com/api/v1/users/register";

//const urlLoginLocal = "http://localhost:5000/api/v1/users/login";
const urlLogin = "https://eccomerce-erudito.herokuapp.com/api/v1/users/login";

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
    const res = await axios.post(urlLogin, data);

    return res.data.dataUser;
  } catch (error) {
    console.log(error);
  }
};

export const RegisterAPI = async (data) => {
  try {
    const res = await axios.post(urlRegister, data);
    return res.data.dataUser;
  } catch (error) {
    console.log(error);
  }
};
