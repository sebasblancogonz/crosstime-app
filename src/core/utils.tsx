import * as SecureStore from "expo-secure-store";
import jwt_decode from "jwt-decode";

export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return "Email cannot be empty.";
  if (!re.test(email)) return "Ooops! We need a valid email address.";

  return "";
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return "Password cannot be empty.";

  return "";
};

export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) return "Name cannot be empty.";

  return "";
};

export const storeToken = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

export const getToken = async (key: string) => {
  return await SecureStore.getItemAsync(key);
};

export const isTokenExpired = (token: string) => {
  const decoded = jwt_decode.jwtDecode(token);
  const currentTime = Date.now() / 1000;

  return decoded.exp < currentTime;
};
