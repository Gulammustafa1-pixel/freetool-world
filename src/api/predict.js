import axios from "axios";

const API = "http://127.0.0.1:5000";

export const predictPrice = async (data) => {
  try {
    const response = await axios.post(`${API}/predict`, data);
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};