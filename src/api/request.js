import axios from "axios";

const request = async (url) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
