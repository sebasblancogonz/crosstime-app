import React from "react";
import { AuthProvider } from "./src/context/AuthContext";
import { useAuth } from "./src/context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./src/navigation/Tabs";
import { Login, Register, ForgotPassword, Splash } from "./src/screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}

export const Layout = () => {
  const { authState } = useAuth();

  return (
    <NavigationContainer>
      {authState && authState.authenticated ? (
        <Tabs />
      ) : (
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
          }}
        >
          <>
            <Stack.Screen
              name="Splash"
              options={{ title: "Home" }}
              component={Splash}
            />
            <Stack.Screen
              name="Register"
              options={{ title: "Sign Up" }}
              component={Register}
            />
            <Stack.Screen
              name="ForgotPassword"
              options={{ title: "Forgot Your Password?" }}
              component={ForgotPassword}
            />
            <Stack.Screen
              name="Login"
              options={{ title: "Log In" }}
              component={Login}
            />
          </>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
