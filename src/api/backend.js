import axios from "axios";

export const generateLogo = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/logo",
      data
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};