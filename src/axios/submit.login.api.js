import axios from "axios";

export const submitLoginForAPI = async () => {
  try {
    const response = await axios.post("http://localhost:3000/user/");
    return response.data;
  } catch (error) {
    throw new Error("Outro tipo de erro: " + error.message);
  }
};
