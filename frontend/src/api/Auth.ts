import axios from "axios";

const API_URL = "http://localhost:8000";
const signupEndpoint = "/signup";
const loginEndpoint = "/login";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Signup
export const signup = async (data: {
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  seller: boolean;
}) => {
  try {
    const response = await api.post(signupEndpoint, data);
    // return response.data;
    console.log(response.data);
  } catch (error) {
    console.error("Error during signup:", error);
    throw new Error("Signup failed. Please try again.");
  }
};

// Login
export const login = async (data: { email: string; password: string }) => {
  try {
    const response = await api.post(loginEndpoint, data);
    // return response.data;
    console.log(response.data);
  } catch (error) {
    console.error("Error during login:", error);
    throw new Error(
      "Login failed. Please check your credentials and try again."
    );
  }
};
