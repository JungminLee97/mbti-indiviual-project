import axios from "axios";

const API_URL = "https://www.nbcamp-react-auth.link";

// const token = localStorage.getItem("accessToken");

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, {
    id: userData.id,
    password: userData.password,
  });
  return response.data;
};

export const getUserProfile = async (token) => {};

export const updateProfile = async (formData) => {};
