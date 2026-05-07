import axios from "axios";

const BASE_URL =  "https://dummyjson.com"

export const LoginAPI = async (params) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/login`,
      params,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error('LoginAPI error:', error.response?.data || error.message || error);
    throw error;
  }
};