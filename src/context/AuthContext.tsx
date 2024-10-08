import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

interface AuthProps {
  authState?: { token: string | null; authenticated: boolean | null, userId: string | null };
  onRegister?: (email: string, password: string) => Promise<any>;
  onLogin?: (email: string, password: string) => Promise<any>;
  onLogout?: () => Promise<any>;
}

const TOKEN_KEY = "jwt-token";
const USER_ID_KEY = "user-id";
export const API_URL = "http://192.168.100.20:8080/api/v1/auth";
const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
    userId: string | null;
  }>({
    token: null,
    authenticated: null,
    userId: null,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      const userId = await SecureStore.getItemAsync(USER_ID_KEY);
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setAuthState({ token, authenticated: true, userId });
      }
    };
    loadToken();
  }, []);

  const register = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        email,
        password,
      });

      await SecureStore.setItemAsync(TOKEN_KEY, response.data.accessToken);
      await SecureStore.setItemAsync(USER_ID_KEY, response.data.userId);
      setAuthState({
        token: response.data.accessToken,
        authenticated: true,
        userId: response.data.userId,
      });
    } catch (error) {
      return { error: true, msg: (error as any).response.data.msg };
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/authenticate`, {
        email,
        password,
      });

      await SecureStore.setItemAsync(TOKEN_KEY, response.data.accessToken);
      setAuthState({
        token: response.data.accessToken,
        authenticated: true,
        userId: response.data.userId,
      });

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.accessToken}`;
    } catch (error) {
      return { error: true, msg: (error as any).response.data.msg };
    }
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    setAuthState({ token: null, authenticated: false, userId: null });
  };

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
