import axios from "axios";

export const generateImage = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/image",
      data
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};